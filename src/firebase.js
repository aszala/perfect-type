import { initializeApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import {
  browserLocalPersistence,
  connectAuthEmulator,
  indexedDBLocalPersistence,
  initializeAuth,
} from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore/lite';
import { FIREBASE_CONFIG, RECAPTCHA_SITE_KEY } from './lib/config.js';

// `npm run dev:emulators` points the app at local Firebase emulators instead of production.
const useEmulators = import.meta.env.MODE === 'emulators';

export const app = initializeApp(
  useEmulators ? { ...FIREBASE_CONFIG, projectId: 'demo-perfect-type' } : FIREBASE_CONFIG,
);

// Production enforces App Check: Firestore rejects requests that don't come from the real site.
if (!useEmulators) {
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(RECAPTCHA_SITE_KEY),
    isTokenAutoRefreshEnabled: true,
  });
}

export const auth = initializeAuth(app, {
  persistence: [indexedDBLocalPersistence, browserLocalPersistence],
});

// Firestore Lite: plain request/response, no realtime listeners, a fraction of the bundle size.
export const db = getFirestore(app);

if (useEmulators) {
  connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
  connectFirestoreEmulator(db, '127.0.0.1', 8080);
}

// Only the production build reports to Google Analytics.
const analyticsEnabled = import.meta.env.PROD && !useEmulators;
let analytics;

function loadAnalytics() {
  analytics ??= import('firebase/analytics')
    .then(async ({ getAnalytics, isSupported, logEvent }) => {
      if (!(await isSupported())) return () => {};
      const instance = getAnalytics(app);
      return (name, params) => logEvent(instance, name, params);
    })
    .catch(() => () => {});
  return analytics;
}

// Google Analytics is loaded after the app renders so it never delays the game.
export function startAnalytics() {
  if (analyticsEnabled) loadAnalytics();
}

export function track(name, params) {
  if (analyticsEnabled) loadAnalytics().then((log) => log(name, params));
}
