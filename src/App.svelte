<script>
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import Play from './pages/Play.svelte';
  import Leaderboard from './pages/Leaderboard.svelte';
  import Profile from './pages/Profile.svelte';
  import Login from './pages/Login.svelte';
  import Signup from './pages/Signup.svelte';
  import Logout from './pages/Logout.svelte';
  import Privacy from './pages/Privacy.svelte';
  import NotFound from './pages/404.svelte';
  import { normalizePath } from './routes.js';

  // Every link is a full page load (GitHub Pages serves a static HTML file per page),
  // so the page is picked once from the URL.
  const pages = {
    '/': Play,
    '/leaderboard': Leaderboard,
    '/profile': Profile,
    '/login': Login,
    '/signup': Signup,
    '/logout': Logout,
    '/privacy': Privacy,
  };

  const Page = pages[normalizePath(location.pathname)] ?? NotFound;
</script>

<Header />
<main>
  <Page />
</main>
<Footer />
