// Page metadata. vite.config.js uses this to emit one static HTML file per page
// (GitHub Pages serves /leaderboard from leaderboard.html) plus the sitemap.

export const PAGES = {
  '/': {
    title: 'perfect type — the typing test where one mistake ends the game',
    description:
      'perfect type is a free typing game that requires you to type perfectly: one wrong key and the run is over. ' +
      'test your words per minute in easy, medium, hard and impossible modes and climb the leaderboard.',
    index: true,
  },
  '/leaderboard': {
    title: 'leaderboard — perfect type',
    description:
      'the fastest perfect typists on perfect type: top words-per-minute scores for easy, medium, hard and impossible mode.',
    index: true,
  },
  '/privacy': {
    title: 'privacy policy — perfect type',
    description: 'what perfect type collects, how ads and analytics work on the site, and how to delete your account.',
    index: true,
  },
  '/login': {
    title: 'log in — perfect type',
    description: 'log in to perfect type to save your stats and get on the leaderboard.',
    index: false,
  },
  '/signup': {
    title: 'sign up — perfect type',
    description: 'create a free perfect type account to save your stats and get on the leaderboard.',
    index: false,
  },
  '/profile': {
    title: 'profile — perfect type',
    description: 'your perfect type stats.',
    index: false,
  },
  '/logout': {
    title: 'log out — perfect type',
    description: 'logging out of perfect type.',
    index: false,
  },
};

export const NOT_FOUND = {
  title: 'page not found — perfect type',
  description: "that page doesn't exist.",
  index: false,
};

// "/leaderboard.html", "/leaderboard/" and "/leaderboard" are all the same page.
export function normalizePath(pathname) {
  const path = pathname.replace(/\.html$/, '').replace(/\/+$/, '') || '/';
  return path === '/index' ? '/' : path;
}
