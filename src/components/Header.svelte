<script>
  import { session } from '../stores.js';
  import { logOut } from '../lib/account.js';
  import { normalizePath } from '../routes.js';

  const current = normalizePath(location.pathname);
  const here = (path) => (path === current ? 'page' : undefined);
</script>

<header>
  <div class="inner">
    <a class="wordmark" href="/">perfect type<span class="caret" aria-hidden="true"></span></a>
    <nav class:ready={$session.ready} aria-label="main">
      <a href="/" aria-current={here('/')}>play</a>
      <a href="/leaderboard" aria-current={here('/leaderboard')}>leaderboard</a>
      {#if $session.user}
        <a href="/profile" aria-current={here('/profile')}>profile</a>
        <button onclick={logOut}>logout</button>
      {:else}
        <a href="/login" aria-current={here('/login')}>login</a>
        <a class="signup" href="/signup" aria-current={here('/signup')}>sign up</a>
      {/if}
    </nav>
  </div>

  {#if $session.ready && $session.user && !$session.profile && current !== '/profile'}
    <p class="notice">pick a username on your <a href="/profile">profile</a> to start saving your stats.</p>
  {/if}
</header>

<style>
  .inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 12px 24px;
    max-width: var(--page);
    margin: 0 auto;
    padding: 22px 20px;
  }

  .wordmark {
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--ink);
    text-decoration: none;
  }

  .wordmark:hover {
    color: var(--ink);
  }

  .caret {
    display: inline-block;
    width: 3px;
    height: 0.85em;
    margin-left: 3px;
    vertical-align: -0.08em;
    background: var(--accent);
    animation: blink 1.1s steps(1) infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px 22px;
    opacity: 0;
    transition: opacity 250ms;
  }

  nav.ready {
    opacity: 1;
  }

  nav a,
  nav button {
    color: var(--muted);
    font-size: 1.05rem;
    text-decoration: none;
    transition: color 150ms;
  }

  nav a:hover,
  nav button:hover,
  nav a[aria-current='page'] {
    color: var(--ink);
  }

  nav a[aria-current='page']:not(.signup) {
    text-decoration: underline;
    text-decoration-color: var(--accent);
    text-decoration-thickness: 2px;
    text-underline-offset: 8px;
  }

  .signup {
    color: var(--ink) !important;
    border: 1.5px solid var(--ink);
    border-radius: 999px;
    padding: 0.2em 0.95em;
  }

  .signup:hover {
    background: var(--ink);
    color: var(--bg) !important;
  }

  .notice {
    max-width: var(--page);
    margin: 0 auto;
    padding: 10px 20px;
    text-align: center;
    background: var(--accent-soft);
    color: var(--ink);
  }

  @media (max-width: 600px) {
    .inner {
      padding: 16px 20px;
    }

    .wordmark {
      font-size: 1.5rem;
    }

    nav {
      gap: 6px 16px;
    }
  }
</style>
