import { WORDS } from './words.js';

export const MODES = {
  easy: { words: 5 },
  medium: { words: 20 },
  hard: { words: 50 },
  impossible: { words: 50, symbols: true },
};

export const MODE_NAMES = Object.keys(MODES);

// firestore.rules rejects leaderboard scores above this; keep the two in sync.
export const MAX_WPM = 300;

const SYMBOLS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}:";<>,./?~`';

export function generatePrompt(mode, random = Math.random) {
  const { words, symbols } = MODES[mode];
  const pick = (list) => list[Math.floor(random() * list.length)];
  const symbolWord = () => Array.from({ length: 1 + Math.floor(random() * 10) }, () => pick(SYMBOLS)).join('');
  return Array.from({ length: words }, () => (symbols ? symbolWord() : pick(WORDS))).join(' ');
}

// Standard typing-test WPM: every 5 characters, spaces included, count as one word.
export function calculateWpm(chars, durationMs) {
  return Math.round((chars / 5 / (Math.max(durationMs, 1) / 60000)) * 100) / 100;
}

export function emptyStats() {
  return Object.fromEntries(MODE_NAMES.map((mode) => [mode, { played: 0, won: 0, wpmSum: 0, best: 0 }]));
}
