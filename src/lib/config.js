// Site-wide settings. Plain constants only: vite.config.js imports this file in Node.

export const SITE_URL = 'https://perfect-type.com';

// Firebase web config is public by design; access is controlled by firestore.rules and App Check.
export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyAcfFLGAnLbwIUCfyCYgayBl2oPvbu5RFQ',
  authDomain: 'perfect-type.firebaseapp.com',
  projectId: 'perfect-type',
  storageBucket: 'perfect-type.appspot.com',
  messagingSenderId: '358376646912',
  appId: '1:358376646912:web:d750e4f6970556a8072be5',
  measurementId: 'G-MDGFNKMNEC',
};

export const RECAPTCHA_SITE_KEY = '6LfUF8EdAAAAAIsY52KJ4t-SzYybu1gZRYNk-Zce';

export const ADSENSE_CLIENT = 'ca-pub-5479752995149616';

// Ad unit slot IDs from AdSense > Ads > By ad unit (display, responsive).
// Leave a slot empty to skip that placement; Auto ads still run either way.
export const AD_SLOTS = {
  play: '',
  leaderboard: '',
};

// Ko-fi / Buy Me a Coffee page. Leave empty to hide the "buy us a taco" links.
export const SUPPORT_URL = '';

export const CONTACT_URL = 'https://github.com/aszala/perfect-type/issues';
