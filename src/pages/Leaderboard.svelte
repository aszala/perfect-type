<script>
  import { onMount } from 'svelte';
  import LeaderboardBlock from '../components/LeaderboardBlock.svelte';
  import AdUnit from '../components/AdUnit.svelte';
  import { MODE_NAMES } from '../lib/game.js';
  import { fetchLeaderboard } from '../lib/db.js';
  import { AD_SLOTS } from '../lib/config.js';
  import { session } from '../stores.js';

  let boards = $state(Object.fromEntries(MODE_NAMES.map((mode) => [mode, null])));
  let failed = $state(false);

  onMount(() => {
    for (const mode of MODE_NAMES) {
      fetchLeaderboard(mode)
        .then((rows) => {
          boards[mode] = rows;
        })
        .catch((e) => {
          console.error(e);
          failed = true;
        });
    }
  });
</script>

<header class="page-header">
  <h1>leaderboard</h1>
  <p>the top 10 perfect runs in each mode. verified accounts only, bots need not apply.</p>
</header>

{#if failed}
  <p class="error">couldn't load the leaderboard, please refresh to try again.</p>
{/if}

<div class="boards">
  {#each MODE_NAMES as mode (mode)}
    <LeaderboardBlock {mode} rows={boards[mode]} me={$session.user?.uid} />
  {/each}
</div>

<AdUnit slot={AD_SLOTS.leaderboard} />

<style>
  .boards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 420px), 1fr));
    gap: 20px;
    align-items: start;
    max-width: 960px;
    margin: 0 auto;
  }

  .error {
    text-align: center;
  }
</style>
