import {
  collection,
  doc,
  getCount,
  getDoc,
  getDocs,
  increment,
  limit,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
  writeBatch,
} from 'firebase/firestore/lite';
import { db } from '../firebase.js';
import { MODE_NAMES, emptyStats } from './game.js';

// Data layout (enforced by firestore.rules):
//   profiles/{uid}                  username, photo, createdAt, stats.{mode}.{played,won,wpmSum,best}
//   usernames/{username}            uid; makes usernames unique
//   leaderboards/{mode}/scores/{uid} each player's best run: uid, username, photo, wpm, chars, durationMs, achievedAt
//   banned/{uid}                    managed by hand in the Firebase console

const profileRef = (uid) => doc(db, 'profiles', uid);
const usernameRef = (username) => doc(db, 'usernames', username);
const scoresRef = (mode) => collection(db, 'leaderboards', mode, 'scores');
const scoreRef = (mode, uid) => doc(scoresRef(mode), uid);

export async function loadProfile(uid) {
  const snap = await getDoc(profileRef(uid));
  if (!snap.exists()) return null;
  const profile = snap.data();
  const stats = emptyStats();
  for (const mode of MODE_NAMES) Object.assign(stats[mode], profile.stats?.[mode]);
  return { ...profile, stats };
}

export async function isUsernameTaken(username) {
  return (await getDoc(usernameRef(username))).exists();
}

// Claims the username and creates the profile in one atomic write.
export async function createProfile(uid, username) {
  const profile = { username, photo: 0, stats: emptyStats() };
  const batch = writeBatch(db);
  batch.set(usernameRef(username), { uid });
  batch.set(profileRef(uid), { ...profile, createdAt: serverTimestamp() });
  await batch.commit();
  return profile;
}

export function recordGame(uid, mode, { won, wpm }, newBest) {
  const field = (name) => `stats.${mode}.${name}`;
  const update = { [field('played')]: increment(1) };
  if (won) {
    update[field('won')] = increment(1);
    update[field('wpmSum')] = increment(wpm);
  }
  if (newBest) update[field('best')] = wpm;
  return updateDoc(profileRef(uid), update);
}

// Saves the run if it beats the player's leaderboard entry and returns their new rank,
// or null if their existing entry is already better.
export async function submitScore(uid, mode, profile, { wpm, chars, durationMs }) {
  const ref = scoreRef(mode, uid);
  const current = await getDoc(ref);
  if (current.exists() && current.data().wpm >= wpm) return null;

  await setDoc(ref, {
    uid,
    username: profile.username,
    photo: profile.photo,
    wpm,
    chars,
    durationMs,
    achievedAt: serverTimestamp(),
  });
  const ahead = await getCount(query(scoresRef(mode), where('wpm', '>', wpm)));
  return ahead.data().count + 1;
}

export async function fetchLeaderboard(mode, size = 10) {
  const snap = await getDocs(query(scoresRef(mode), orderBy('wpm', 'desc'), limit(size)));
  return snap.docs.map((d) => d.data());
}

export async function updatePhoto(uid, profile, photo) {
  await updateDoc(profileRef(uid), { photo });
  // Leaderboard entries carry their own copy of the avatar.
  const ranked = MODE_NAMES.filter((mode) => profile.stats[mode].best > 0);
  await Promise.allSettled(ranked.map((mode) => updateDoc(scoreRef(mode, uid), { photo })));
}

export async function deleteAccountData(uid, username) {
  const batch = writeBatch(db);
  for (const mode of MODE_NAMES) batch.delete(scoreRef(mode, uid));
  batch.delete(usernameRef(username));
  batch.delete(profileRef(uid));
  await batch.commit();
}
