import { writable } from 'svelte/store';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.js';
import { loadProfile } from './lib/db.js';

// ready:    the auth state is known
// user:     the signed-in Firebase user, or null
// verified: whether their email is verified (required for the leaderboard)
// profile:  their Firestore profile, or null if they haven't picked a username yet
//           (accounts from before usernames existed start out this way)
export const session = writable({ ready: false, user: null, verified: false, profile: null });

onAuthStateChanged(auth, async (user) => {
  let profile = null;
  let verified = false;
  if (user) {
    [profile, verified] = await Promise.all([
      loadProfile(user.uid).catch((e) => {
        console.error(e);
        return null;
      }),
      refreshVerified(user),
    ]);
  }
  if (auth.currentUser !== user) return; // superseded by a newer sign-in or sign-out

  // Sign-up may have stored the new profile while we were loading.
  session.update((s) => ({
    ready: true,
    user,
    verified,
    profile: s.user === user && s.profile ? s.profile : profile,
  }));
});

// Picks up a verification link clicked since the ID token was issued. firestore.rules reads
// email_verified from the token, which can say "unverified" even after the account record
// (and user.emailVerified) has caught up, until the token is refreshed.
export async function refreshVerified(user = auth.currentUser) {
  if (!user) return false;
  try {
    const { claims } = await user.getIdTokenResult();
    if (claims.email_verified) return true;

    await user.reload();
    if (!user.emailVerified) return false;
    await user.getIdToken(true);
    session.update((s) => ({ ...s, verified: true }));
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}
