<script>
  import Card from './Card.svelte';
  import { avatarUrl, formatDate, formatWpm } from '../utils.js';

  // rows: leaderboard entries, best first; null while loading
  let { mode, rows, me } = $props();
</script>

<Card title={mode} aside="wpm">
  {#if rows === null}
    <ol aria-label="loading">
      {#each { length: 5 }, i (i)}
        <li class="skeleton"><span></span></li>
      {/each}
    </ol>
  {:else if rows.length === 0}
    <p class="empty">no scores yet. <a href="/">be the first!</a></p>
  {:else}
    <ol>
      {#each rows as row, i (row.uid)}
        <li class:me={row.uid === me} class:first={i === 0}>
          <span class="place">{i + 1}</span>
          <img src={avatarUrl(row.photo)} alt="" width="36" height="36" />
          <span class="who">
            <span class="name">{row.username}</span>
            <span class="date">{formatDate(row.achievedAt)}</span>
          </span>
          <span class="score">{formatWpm(row.wpm)}</span>
        </li>
      {/each}
    </ol>
  {/if}
</Card>

<style>
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    gap: 12px;
    min-height: 58px;
    padding: 8px 10px;
    border-top: 1px solid var(--rule);
  }

  li:first-child {
    border-top: none;
  }

  li.me {
    background: var(--accent-soft);
    border-radius: 8px;
  }

  .place {
    width: 1.6em;
    font-family: var(--mono);
    font-size: 0.85rem;
    color: var(--muted);
  }

  .first .place {
    color: var(--accent);
    font-weight: 500;
  }

  img {
    border-radius: 50%;
    flex-shrink: 0;
  }

  .who {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .name {
    color: var(--ink);
    overflow-wrap: anywhere;
  }

  .date {
    font-family: var(--mono);
    font-size: 0.72rem;
    color: var(--muted);
  }

  .score {
    margin-left: auto;
    font-family: var(--mono);
    font-size: 1rem;
    font-weight: 500;
    color: var(--ink);
    font-variant-numeric: tabular-nums;
  }

  .skeleton span {
    flex: 1;
    height: 14px;
    border-radius: 4px;
    background: linear-gradient(90deg, var(--rule), rgb(29 27 23 / 0.05), var(--rule));
    background-size: 200% 100%;
    animation: shimmer 1.4s ease-in-out infinite;
  }

  @keyframes shimmer {
    to {
      background-position: -200% 0;
    }
  }

  .empty {
    margin: 0;
    padding: 28px 12px;
    text-align: center;
    color: var(--muted);
    border: 1px dashed var(--rule-strong);
    border-radius: 8px;
  }
</style>
