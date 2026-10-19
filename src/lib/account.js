import {
  EmailAuthProvider,
  createUserWithEmailAndPassword,
  deleteUser,
  reauthenticateWithCredential,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { get } from 'svelte/store';
import { auth } from '../firebase.js';
import { session } from '../stores.js';
import { createProfile, deleteAccountData, isUsernameTaken } from './db.js';

export const MIN_PASSWORD_LENGTH = 8;

// Must match the pattern in firestore.rules.
const USERNAME_PATTERN = /^[a-z0-9_]{3,16}$/;

// An error whose message is safe to show the player as-is.
class AccountError extends Error {}

const AUTH_ERRORS = {
  'auth/invalid-credential': 'wrong email or password',
  'auth/invalid-login-credentials': 'wrong email or password',
  'auth/wrong-password': 'wrong email or password',
  'auth/user-not-found': 'wrong email or password',
  'auth/invalid-email': "that email address doesn't look right",
  'auth/missing-password': 'enter your password',
  'auth/email-already-in-use': 'an account with that email already exists',
  'auth/weak-password': 'that password is too weak',
  'auth/too-many-requests': 'too many attempts, wait a minute and try again',
  'auth/network-request-failed': "couldn't reach the server, check your connection",
};

export function errorMessage(error) {
  if (error instanceof AccountError) return error.message;
  console.error(error);
  return AUTH_ERRORS[error?.code] ?? 'something went wrong, please try again';
}

export function usernameProblem(username) {
  if (username.length < 3 || username.length > 16) return 'usernames are 3 to 16 characters';
  if (!USERNAME_PATTERN.test(username)) return 'usernames can only use a-z, 0-9 and _';
  return '';
}

export async function chooseUsername(username) {
  const problem = usernameProblem(username);
  if (problem) throw new AccountError(problem);
  if (await isUsernameTaken(username)) throw new AccountError('that username is taken');
  const profile = await createProfile(auth.currentUser.uid, username);
  session.update((s) => ({ ...s, profile }));
}

export async function signUp({ username, email, password }) {
  const problem = usernameProblem(username);
  if (problem) throw new AccountError(problem);
  if (password.length < MIN_PASSWORD_LENGTH) {
    throw new AccountError(`passwords need at least ${MIN_PASSWORD_LENGTH} characters`);
  }
  if (await isUsernameTaken(username)) throw new AccountError('that username is taken');

  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  // If someone grabs the username in the meantime, the profile page asks for another one.
  const profile = await createProfile(user.uid, username).catch(() => null);
  session.update((s) => ({ ...s, user, profile }));
  await sendEmailVerification(user).catch(console.error);
}

export function logIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export async function logOut() {
  await signOut(auth);
  location.assign('/');
}

export function resetPassword(email) {
  return sendPasswordResetEmail(auth, email);
}

export function resendVerification() {
  return sendEmailVerification(auth.currentUser);
}

export async function deleteAccount(password) {
  const user = auth.currentUser;
  await reauthenticateWithCredential(user, EmailAuthProvider.credential(user.email, password));
  const { profile } = get(session);
  if (profile) await deleteAccountData(user.uid, profile.username);
  await deleteUser(user);
}
