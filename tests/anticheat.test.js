import { describe, expect, it } from 'vitest';
import { detectAutomation } from '../src/lib/anticheat.js';

// Seeded PRNG so "human" timings are irregular but reproducible.
function mulberry32(seed) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function keystrokes(count, { gap, hold, trusted = true }) {
  const strokes = [];
  let at = 1000;
  for (let i = 0; i < count; i++) {
    strokes.push({ at, trusted, hold: hold(i) });
    at += gap(i);
  }
  return strokes;
}

function human(count, seed = 1) {
  const random = mulberry32(seed);
  return keystrokes(count, {
    gap: () => 60 + random() * 140, // 60–200 ms between keys
    hold: () => 50 + random() * 90, // 50–140 ms per key
  });
}

describe('detectAutomation', () => {
  it('passes human-like typing', () => {
    for (let seed = 1; seed <= 50; seed++) {
      expect(detectAutomation(human(40, seed), 120)).toEqual([]);
    }
  });

  it('flags key events dispatched from a script', () => {
    const strokes = human(30);
    strokes[5].trusted = false;
    expect(detectAutomation(strokes, 120)).toContain('the key presses came from a script');
  });

  it('flags runs over the wpm cap', () => {
    expect(detectAutomation(human(30), 301)).toContain('it was faster than 300 wpm');
    expect(detectAutomation(human(30), 300)).toEqual([]);
  });

  it('flags an autotyper on a fixed interval', () => {
    const random = mulberry32(7);
    const strokes = keystrokes(30, { gap: () => 50 + random(), hold: () => 50 + random() * 90 });
    expect(detectAutomation(strokes, 200)).toContain('every key was pressed at exactly the same pace');
  });

  it('flags keys that are released instantly', () => {
    const random = mulberry32(3);
    const strokes = keystrokes(30, { gap: () => 60 + random() * 140, hold: () => random() * 2 });
    expect(detectAutomation(strokes, 150)).toContain('the keys were released instantly');
  });

  it('flags identical hold times', () => {
    const random = mulberry32(5);
    const strokes = keystrokes(30, { gap: () => 60 + random() * 140, hold: () => 40 + random() * 0.5 });
    expect(detectAutomation(strokes, 150)).toContain('every key was held down for exactly the same time');
  });

  it('ignores missing hold times', () => {
    const strokes = human(30).map((k, i) => (i % 2 ? { ...k, hold: null } : k));
    expect(detectAutomation(strokes, 120)).toEqual([]);
  });

  it("doesn't judge rhythm on too few keys", () => {
    const strokes = keystrokes(5, { gap: () => 100, hold: () => 1 });
    expect(detectAutomation(strokes, 100)).toEqual([]);
  });
});
