import { describe, expect, it } from 'vitest';
import { MODES, MODE_NAMES, calculateWpm, emptyStats, generatePrompt } from '../src/lib/game.js';
import { WORDS } from '../src/lib/words.js';

// The prompt-length bounds per mode in firestore.rules.
const RULE_CHAR_BOUNDS = {
  easy: [10, 80],
  medium: [40, 320],
  hard: [100, 800],
  impossible: [50, 600],
};

// Deterministic stand-in for Math.random that always returns `value`.
const constant = (value) => () => value;

describe('generatePrompt', () => {
  it.each(MODE_NAMES)('gives %s mode the right number of words', (mode) => {
    expect(generatePrompt(mode).split(' ')).toHaveLength(MODES[mode].words);
  });

  it('uses dictionary words for normal modes', () => {
    for (const word of generatePrompt('hard').split(' ')) expect(WORDS).toContain(word);
  });

  it('uses 1 to 10 symbols per word in impossible mode', () => {
    for (const word of generatePrompt('impossible').split(' ')) {
      expect(word.length).toBeGreaterThanOrEqual(1);
      expect(word.length).toBeLessThanOrEqual(10);
    }
  });

  it.each(MODE_NAMES)('keeps %s prompts within the lengths firestore.rules accepts', (mode) => {
    const [min, max] = RULE_CHAR_BOUNDS[mode];
    const shortest = generatePrompt(mode, constant(0)); // shortest symbol words, first dictionary word
    const longest = generatePrompt(mode, constant(0.999999));
    const longestWord = Math.max(...WORDS.map((w) => w.length));
    const worstCase = MODES[mode].symbols
      ? MODES[mode].words * 11 - 1
      : MODES[mode].words * (longestWord + 1) - 1;
    const bestCase = MODES[mode].symbols
      ? MODES[mode].words * 2 - 1
      : MODES[mode].words * (Math.min(...WORDS.map((w) => w.length)) + 1) - 1;

    expect(shortest.length).toBeGreaterThanOrEqual(min);
    expect(longest.length).toBeLessThanOrEqual(max);
    expect(bestCase).toBeGreaterThanOrEqual(min);
    expect(worstCase).toBeLessThanOrEqual(max);
  });
});

describe('calculateWpm', () => {
  it('counts five characters as one word', () => {
    expect(calculateWpm(50, 60_000)).toBe(10);
    expect(calculateWpm(30, 3_000)).toBe(120);
  });

  it('rounds to two decimals', () => {
    expect(calculateWpm(29, 2_345)).toBe(148.4);
    expect(calculateWpm(31, 7_000)).toBe(53.14);
  });

  it('never divides by zero', () => {
    expect(Number.isFinite(calculateWpm(30, 0))).toBe(true);
  });
});

describe('emptyStats', () => {
  it('has a zeroed entry for every mode', () => {
    const stats = emptyStats();
    expect(Object.keys(stats)).toEqual(MODE_NAMES);
    expect(stats.easy).toEqual({ played: 0, won: 0, wpmSum: 0, best: 0 });
  });
});
