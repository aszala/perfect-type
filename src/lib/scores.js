import { get } from 'svelte/store';
import { refreshVerified, session } from '../stores.js';
import { recordGame, submitScore } from './db.js';

// Saves a finished run to the player's stats and, if it qualifies, the leaderboard.
// Resolves to { status, rank?, best? } so the result screen can say what happened.
// run: { won, wpm, chars, durationMs, flags } where flags are anti-cheat reasons.
export async function saveRun(mode, run) {
  const { user, profile } = get(session);
  if (!user) return { status: 'guest' };
  if (!profile) return { status: 'no-profile' };

  const before = profile.stats[mode];
  const clean = run.won && run.flags.length === 0;
  const newBest = clean && run.wpm > before.best;
  // A run flagged as automated counts as played, but never as a win or towards the averages.
  const stats = {
    played: before.played + 1,
    won: before.won + (clean ? 1 : 0),
    wpmSum: before.wpmSum + (clean ? run.wpm : 0),
    best: newBest ? run.wpm : before.best,
  };
  session.update((s) => ({ ...s, profile: { ...s.profile, stats: { ...s.profile.stats, [mode]: stats } } }));

  try {
    await recordGame(user.uid, mode, { won: clean, wpm: run.wpm }, newBest);
  } catch (e) {
    console.error(e);
  }

  if (!run.won) return { status: 'lost' };
  if (!clean) return { status: 'flagged' };
  if (!(await refreshVerified(user))) return { status: 'unverified' };

  try {
    const rank = await submitScore(user.uid, mode, profile, run);
    return rank ? { status: 'ranked', rank } : { status: 'not-best', best: stats.best };
  } catch (e) {
    console.error(e);
    return { status: 'error' };
  }
}
