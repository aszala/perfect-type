<script>
  import { MODE_NAMES } from '../lib/game.js';

  let { mode, onselect } = $props();

  function select(event, name) {
    // A focused button would also react to the space bar while typing.
    event.currentTarget.blur();
    onselect(name);
  }
</script>

<div class="modes" role="group" aria-label="game mode">
  {#each MODE_NAMES as name (name)}
    <button class:active={name === mode} aria-pressed={name === mode} onclick={(e) => select(e, name)}>
      {name}
    </button>
  {/each}
</div>

<style>
  .modes {
    display: inline-flex;
    gap: 2px;
    padding: 4px;
    background: var(--surface);
    border: 1px solid var(--rule);
    border-radius: 999px;
    user-select: none;
  }

  button {
    padding: 0.45em 1.1em;
    border-radius: 999px;
    font-family: var(--mono);
    font-size: 0.85rem;
    color: var(--muted);
    transition:
      color 150ms,
      background-color 150ms;
  }

  button:hover {
    color: var(--ink);
  }

  button.active {
    background: var(--ink);
    color: var(--bg);
  }

  @media (max-width: 420px) {
    button {
      padding: 0.45em 0.75em;
    }
  }
</style>
