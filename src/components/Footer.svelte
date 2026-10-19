<script>
  import { SUPPORT_URL } from '../lib/config.js';
</script>

<footer>
  <div class="inner">
    <p><span class="name">perfect type</span> · one mistake and it's over</p>
    <nav aria-label="footer">
      <a href="/#how-to-play">how to play</a>
      <a href="/leaderboard">leaderboard</a>
      <a href="/privacy">privacy</a>
      {#if SUPPORT_URL}
        <a href={SUPPORT_URL} target="_blank" rel="noopener">buy us a taco 🌮</a>
      {/if}
    </nav>
  </div>
</footer>

<style>
  footer {
    border-top: 1px solid var(--rule);
  }

  .inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 10px 24px;
    max-width: var(--page);
    margin: 0 auto;
    padding: 24px 20px 32px;
    font-size: 0.95rem;
    color: var(--muted);
  }

  p {
    margin: 0;
  }

  .name {
    color: var(--ink);
    font-weight: 600;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 18px;
  }

  a {
    color: var(--muted);
    text-decoration: none;
  }

  a:hover {
    color: var(--ink);
  }

  @media (max-width: 600px) {
    .inner {
      flex-direction: column;
      text-align: center;
    }

    nav {
      justify-content: center;
    }
  }
</style>
