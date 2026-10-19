import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { NOT_FOUND, PAGES } from './src/routes.js';
import { ADSENSE_CLIENT, SITE_URL } from './src/lib/config.js';

export default defineConfig({
  // The old Rollup build used public/ for its own HTML files; static/ holds only real assets.
  publicDir: 'static',
  plugins: [svelte(), staticPages()],
  test: {
    include: ['tests/*.test.js'],
  },
});

// Every page runs the same app, but each gets its own HTML file: GitHub Pages serves
// /leaderboard from leaderboard.html, and search engines see the right title and description.
function staticPages() {
  const placeholder = /<!-- page-head[^>]*-->/;
  const filled = /<!-- page-head -->[\s\S]*?<!-- \/page-head -->/;
  const head = (path, page) => `<!-- page-head -->\n    ${headTags(path, page)}\n    <!-- /page-head -->`;

  let production = false;

  return {
    name: 'perfect-type:static-pages',
    enforce: 'post',
    configResolved(config) {
      production = config.command === 'build' && config.mode === 'production';
    },
    transformIndexHtml(html) {
      html = html.replace(placeholder, head('/', PAGES['/']));
      // Ads only in the real site build, never in dev or emulator builds.
      if (production) {
        const adsense = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}" crossorigin="anonymous"></script>`;
        html = html.replace('</head>', `  ${adsense}\n  </head>`);
      }
      return html;
    },
    generateBundle: {
      // after Vite has emitted index.html
      order: 'post',
      handler(_, bundle) {
        const template = String(bundle['index.html'].source);
        const emit = (fileName, source) => this.emitFile({ type: 'asset', fileName, source });
        for (const [path, page] of Object.entries(PAGES)) {
          if (path !== '/') emit(`${path.slice(1)}.html`, template.replace(filled, head(path, page)));
        }
        emit('404.html', template.replace(filled, head(null, NOT_FOUND)));
        emit('sitemap.xml', sitemap());
      },
    },
  };
}

function headTags(path, page) {
  const url = path && `${SITE_URL}${path}`;
  return [
    `<title>${escapeHtml(page.title)}</title>`,
    `<meta name="description" content="${escapeHtml(page.description)}">`,
    page.index ? `<link rel="canonical" href="${url}">` : '<meta name="robots" content="noindex">',
    '<meta property="og:type" content="website">',
    '<meta property="og:site_name" content="perfect type">',
    `<meta property="og:title" content="${escapeHtml(page.title)}">`,
    `<meta property="og:description" content="${escapeHtml(page.description)}">`,
    url && `<meta property="og:url" content="${url}">`,
    `<meta property="og:image" content="${SITE_URL}/favicon.png">`,
    '<meta name="twitter:card" content="summary">',
  ]
    .filter(Boolean)
    .join('\n    ');
}

function sitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = Object.entries(PAGES)
    .filter(([, page]) => page.index)
    .map(([path]) => `  <url><loc>${SITE_URL}${path}</loc><lastmod>${today}</lastmod></url>`);
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
}

function escapeHtml(text) {
  return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}
