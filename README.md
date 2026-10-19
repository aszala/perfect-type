# perfect type

A typing game where one wrong key ends the run. Live at [perfect-type.com](https://perfect-type.com).

Svelte 5 + Vite, Firebase Auth and Firestore (with App Check), hosted on GitHub Pages.

## Develop

```sh
npm install
npm run dev              # http://localhost:5173, talks to production Firebase*
npm test                 # unit tests (game logic, anti-cheat)
npm run build            # static site in dist/
```

\* Production enforces App Check, so Firestore calls from localhost fail unless you
[register a debug token](https://firebase.google.com/docs/app-check/web/debug-provider).
Use the emulators instead:

```sh
npm run emulators        # local Auth + Firestore (needs Java 21+)
npm run dev:emulators    # in a second terminal: the app, pointed at the emulators
npm run test:rules       # security rule tests against the Firestore emulator
```

## Deploy

The site and its backend deploy separately:

- **Site (GitHub Pages):** every push to `main` builds and publishes `dist/` to the `gh-pages` branch
  (`.github/workflows/deploy.yml`).
- **Database rules (Firebase):** pushing to GitHub does *not* update them. Whenever `firestore.rules`
  changes, either paste the file into Firebase console → Firestore Database → Rules → Publish, or run
  `npx firebase-tools login` once and then `npm run deploy:rules`.

## How it fits together

| Path | What |
| --- | --- |
| `src/pages/` | One component per page. Every page is a full page load; `vite.config.js` writes a static HTML file per page (titles, descriptions, sitemap) from `src/routes.js`. |
| `src/components/TypingGame.svelte` | The game: key handling, caret, scrolling, keystroke timing. |
| `src/lib/anticheat.js` | Flags runs that look scripted (synthetic events, robotic rhythm, instant key releases, > 300 wpm). Flagged runs still count in your stats but never reach the leaderboard. |
| `src/lib/db.js` | All Firestore reads and writes. |
| `src/stores.js` | Signed-in user, profile and email-verification state. |
| `firestore.rules` | The server-side checks. Scores must come from a verified, unbanned player, stay within each mode's possible prompt lengths, add up (wpm = characters ÷ 5 ÷ minutes) and stay at or under 300 wpm. |

Firestore collections: `profiles/{uid}`, `usernames/{name}`, `leaderboards/{mode}/scores/{uid}`
(one best run per player per mode) and `banned/{uid}`.

## Moderation

To remove a cheater: in the Firebase console, create a document `banned/{their uid}` (any fields),
then delete their documents under `leaderboards/*/scores/{uid}`. Banned players can still play,
they just can't post scores.

## Monetization settings

`src/lib/config.js`:

- `AD_SLOTS`: AdSense ad unit IDs for the play and leaderboard pages. Empty means Auto ads only.
- `SUPPORT_URL`: a Ko-fi / Buy Me a Coffee link. Shows "buy us a taco" in the footer and after wins.
