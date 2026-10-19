import { defineConfig } from 'vitest/config';

// Runs against the Firestore emulator; use `npm run test:rules`, which starts it.
export default defineConfig({
  test: {
    include: ['tests/rules/*.test.js'],
    testTimeout: 20000,
    hookTimeout: 30000,
  },
});
