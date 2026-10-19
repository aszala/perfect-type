import { MAX_WPM } from './game.js';

// Heuristics for spotting scripted input. They decide whether a run may go on the
// leaderboard; firestore.rules enforces the hard limits server-side.

const MIN_SAMPLES = 10;

// keystrokes: [{ at, trusted, hold }] in typing order, times in milliseconds.
// hold is null when the key was still down at the end of the run.
// Returns human-readable reasons; an empty list means the run looks human.
export function detectAutomation(keystrokes, wpm) {
  const reasons = [];

  // Events dispatched from JavaScript (console scripts, extensions) are never trusted.
  if (keystrokes.some((k) => !k.trusted)) reasons.push('the key presses came from a script');

  if (wpm > MAX_WPM) reasons.push(`it was faster than ${MAX_WPM} wpm`);

  // Autotypers fire on a fixed timer; people never keep a steady beat.
  const gaps = keystrokes.slice(1).map((k, i) => k.at - keystrokes[i].at);
  if (gaps.length >= MIN_SAMPLES && variation(gaps) < 0.1) {
    reasons.push('every key was pressed at exactly the same pace');
  }

  // People hold each key for tens of milliseconds, and never for the same time twice.
  const holds = keystrokes.map((k) => k.hold).filter((h) => h != null);
  if (holds.length >= MIN_SAMPLES) {
    if (median(holds) < 8) reasons.push('the keys were released instantly');
    else if (variation(holds) < 0.05) reasons.push('every key was held down for exactly the same time');
  }

  return reasons;
}

function mean(xs) {
  return xs.reduce((sum, x) => sum + x, 0) / xs.length;
}

function median(xs) {
  const sorted = [...xs].sort((a, b) => a - b);
  const mid = sorted.length >> 1;
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

// Coefficient of variation: standard deviation relative to the mean. Human typing sits around 0.3–0.6.
function variation(xs) {
  const m = mean(xs);
  if (m <= 0) return 0;
  return Math.sqrt(mean(xs.map((x) => (x - m) ** 2))) / m;
}
