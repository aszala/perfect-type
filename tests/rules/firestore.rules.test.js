import { readFileSync } from 'node:fs';
import { afterAll, beforeAll, beforeEach, describe, it } from 'vitest';
import { assertFails, assertSucceeds, initializeTestEnvironment } from '@firebase/rules-unit-testing';
import {
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  collection,
  serverTimestamp,
  setDoc,
  updateDoc,
  writeBatch,
} from 'firebase/firestore';

let env;

beforeAll(async () => {
  env = await initializeTestEnvironment({
    projectId: 'demo-perfect-type',
    firestore: { rules: readFileSync('firestore.rules', 'utf8'), host: '127.0.0.1', port: 8080 },
  });
});

afterAll(() => env.cleanup());

beforeEach(() => env.clearFirestore());

const verified = (uid) => env.authenticatedContext(uid, { email_verified: true }).firestore();
const unverified = (uid) => env.authenticatedContext(uid, { email_verified: false }).firestore();
const anonymous = () => env.unauthenticatedContext().firestore();

const stats = { easy: { played: 0, won: 0, wpmSum: 0, best: 0 } };

function claim(db, uid, username, profile = {}) {
  const batch = writeBatch(db);
  batch.set(doc(db, 'usernames', username), { uid });
  batch.set(doc(db, 'profiles', uid), { username, photo: 0, createdAt: serverTimestamp(), stats, ...profile });
  return batch.commit();
}

// 30 characters in 3 seconds is 120 wpm.
function score(uid, overrides = {}) {
  return {
    uid,
    username: 'alice',
    photo: 0,
    wpm: 120,
    chars: 30,
    durationMs: 3000,
    achievedAt: serverTimestamp(),
    ...overrides,
  };
}

const scoreDoc = (db, uid, mode = 'easy') => doc(db, 'leaderboards', mode, 'scores', uid);

async function seed(writes) {
  await env.withSecurityRulesDisabled(async (ctx) => {
    const db = ctx.firestore();
    for (const [path, data] of Object.entries(writes)) await setDoc(doc(db, path), data);
  });
}

const alice = { 'usernames/alice': { uid: 'alice' }, 'profiles/alice': { username: 'alice', photo: 0, stats } };

describe('usernames and profiles', () => {
  it('lets a player claim a username and create their profile together', async () => {
    await assertSucceeds(claim(unverified('alice'), 'alice', 'alice'));
  });

  it("won't hand out a username twice", async () => {
    await claim(unverified('alice'), 'alice', 'alice');
    await assertFails(claim(unverified('bob'), 'bob', 'alice'));
  });

  it('requires the username and profile to be written together', async () => {
    const db = unverified('alice');
    await assertFails(setDoc(doc(db, 'usernames', 'alice'), { uid: 'alice' }));
    await assertFails(
      setDoc(doc(db, 'profiles', 'alice'), { username: 'alice', photo: 0, createdAt: serverTimestamp(), stats }),
    );
  });

  it("can't claim a username for someone else", async () => {
    await assertFails(claim(unverified('alice'), 'bob', 'bob'));
  });

  it('rejects malformed usernames and fields', async () => {
    await assertFails(claim(unverified('alice'), 'alice', 'Al'));
    await assertFails(claim(unverified('alice'), 'alice', 'has space'));
    await assertFails(claim(unverified('alice'), 'alice', 'alice', { photo: 10 }));
    await assertFails(claim(unverified('alice'), 'alice', 'alice', { admin: true }));
  });

  it('lets anyone check whether a username is taken, but not list them', async () => {
    await seed(alice);
    await assertSucceeds(getDoc(doc(anonymous(), 'usernames', 'alice')));
    await assertFails(getDocs(collection(anonymous(), 'usernames')));
  });

  it('keeps profiles private', async () => {
    await seed(alice);
    await assertSucceeds(getDoc(doc(verified('alice'), 'profiles', 'alice')));
    await assertFails(getDoc(doc(verified('bob'), 'profiles', 'alice')));
  });

  it('lets players update their photo and stats but not their username', async () => {
    await seed(alice);
    const db = verified('alice');
    await assertSucceeds(updateDoc(doc(db, 'profiles', 'alice'), { photo: 3, 'stats.easy.played': 1 }));
    await assertFails(updateDoc(doc(db, 'profiles', 'alice'), { username: 'mallory' }));
    await assertFails(updateDoc(doc(db, 'profiles', 'alice'), { photo: 12 }));
    await assertFails(updateDoc(doc(verified('bob'), 'profiles', 'alice'), { photo: 1 }));
  });

  it('frees the username only when the whole account is deleted', async () => {
    await seed({ ...alice, 'leaderboards/easy/scores/alice': score('alice') });
    const db = verified('alice');
    await assertFails(deleteDoc(doc(db, 'usernames', 'alice')));
    await assertFails(deleteDoc(doc(db, 'profiles', 'alice')));

    const batch = writeBatch(db);
    for (const mode of ['easy', 'medium', 'hard', 'impossible']) batch.delete(scoreDoc(db, 'alice', mode));
    batch.delete(doc(db, 'usernames', 'alice'));
    batch.delete(doc(db, 'profiles', 'alice'));
    await assertSucceeds(batch.commit());
  });
});

describe('leaderboard', () => {
  beforeEach(() => seed(alice));

  it('is public to read', async () => {
    await assertSucceeds(getDocs(query(collection(anonymous(), 'leaderboards', 'easy', 'scores'), orderBy('wpm', 'desc'), limit(10))));
  });

  it('accepts a valid score from a verified player', async () => {
    await assertSucceeds(setDoc(scoreDoc(verified('alice'), 'alice'), score('alice')));
  });

  it('requires a verified email', async () => {
    await assertFails(setDoc(scoreDoc(unverified('alice'), 'alice'), score('alice')));
  });

  it("won't let players post for someone else or under another name", async () => {
    await seed({ 'usernames/bob': { uid: 'bob' }, 'profiles/bob': { username: 'bob', photo: 0, stats } });
    await assertFails(setDoc(scoreDoc(verified('bob'), 'alice'), score('alice')));
    await assertFails(setDoc(scoreDoc(verified('bob'), 'bob'), score('bob', { username: 'alice' })));
    await assertFails(setDoc(scoreDoc(anonymous(), 'alice'), score('alice')));
  });

  it("rejects a wpm that doesn't match the characters and time", async () => {
    await assertFails(setDoc(scoreDoc(verified('alice'), 'alice'), score('alice', { wpm: 200 })));
    await assertSucceeds(setDoc(scoreDoc(verified('alice'), 'alice'), score('alice', { wpm: 120.3 })));
  });

  it('rejects anything over 300 wpm', async () => {
    // 75 characters in 2.9 s is 310 wpm
    await assertFails(
      setDoc(scoreDoc(verified('alice'), 'alice'), score('alice', { chars: 75, durationMs: 2900, wpm: 310.34 })),
    );
  });

  it('rejects prompt lengths the mode could never produce', async () => {
    // a 5-word easy prompt can't be 300 characters
    await assertFails(
      setDoc(scoreDoc(verified('alice'), 'alice'), score('alice', { chars: 300, durationMs: 30000, wpm: 120 })),
    );
    await assertFails(setDoc(scoreDoc(verified('alice'), 'alice', 'extreme'), score('alice')));
  });

  it('rejects made-up timestamps and extra fields', async () => {
    await assertFails(setDoc(scoreDoc(verified('alice'), 'alice'), score('alice', { achievedAt: new Date(0) })));
    await assertFails(setDoc(scoreDoc(verified('alice'), 'alice'), score('alice', { verified: true })));
    await assertFails(setDoc(scoreDoc(verified('alice'), 'alice'), score('alice', { durationMs: 3000.5 })));
  });

  it('only replaces an entry with a better score', async () => {
    const db = verified('alice');
    await setDoc(scoreDoc(db, 'alice'), score('alice'));
    // 30 characters in 4 s is 90 wpm; 30 in 2.5 s is 144
    await assertFails(setDoc(scoreDoc(db, 'alice'), score('alice', { durationMs: 4000, wpm: 90 })));
    await assertSucceeds(setDoc(scoreDoc(db, 'alice'), score('alice', { durationMs: 2500, wpm: 144 })));
  });

  it('lets players refresh the avatar on their entry', async () => {
    const db = verified('alice');
    await setDoc(scoreDoc(db, 'alice'), score('alice'));
    await assertSucceeds(updateDoc(scoreDoc(db, 'alice'), { photo: 4 }));
    await assertFails(updateDoc(scoreDoc(db, 'alice'), { photo: 4, wpm: 299 }));
    await assertFails(updateDoc(scoreDoc(verified('bob'), 'alice'), { photo: 1 }));
  });

  it('keeps banned players off', async () => {
    await seed({ 'banned/alice': { reason: 'bot' } });
    await assertFails(setDoc(scoreDoc(verified('alice'), 'alice'), score('alice')));
  });
});

describe('everything else', () => {
  it('locks the collections from the old version of the site', async () => {
    const db = verified('alice');
    for (const path of ['users/alice', 'userinfo/alice', 'leaderboard/easy_wpm', 'diary/alice']) {
      await assertFails(getDoc(doc(db, path)));
      await assertFails(setDoc(doc(db, path), { anything: true }));
    }
  });

  it('hides the ban list', async () => {
    await assertFails(getDoc(doc(verified('alice'), 'banned', 'alice')));
    await assertFails(setDoc(doc(verified('alice'), 'banned', 'bob'), { reason: 'x' }));
  });
});
