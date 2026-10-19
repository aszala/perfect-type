<script>
  import Card from './Card.svelte';
  import { MODE_NAMES } from '../lib/game.js';
  import { formatWpm } from '../utils.js';

  let { stats } = $props();

  const modes = $derived(MODE_NAMES.map((name) => ({ name, ...stats[name] })));
  const overall = $derived(
    modes.reduce(
      (total, s) => ({
        played: total.played + s.played,
        won: total.won + s.won,
        wpmSum: total.wpmSum + s.wpmSum,
        best: Math.max(total.best, s.best),
      }),
      { played: 0, won: 0, wpmSum: 0, best: 0 },
    ),
  );

  const passRate = (s) => (s.played ? `${Math.round((s.won / s.played) * 100)}%` : '–');
  const averageWpm = (s) => (s.won ? formatWpm(s.wpmSum / s.won) : '–');
  const bestWpm = (s) => (s.best ? formatWpm(s.best) : '–');
</script>

<div class="tiles">
  <div class="tile card">
    <span class="value">{overall.played}</span>
    <span class="label">games played</span>
  </div>
  <div class="tile card">
    <span class="value">{passRate(overall)}</span>
    <span class="label">pass rate</span>
  </div>
  <div class="tile card">
    <span class="value">{averageWpm(overall)}</span>
    <span class="label">average wpm</span>
  </div>
  <div class="tile card">
    <span class="value">{bestWpm(overall)}</span>
    <span class="label">best wpm</span>
  </div>
</div>

<Card title="by mode">
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th scope="col">mode</th>
          <th scope="col">games</th>
          <th scope="col">pass rate</th>
          <th scope="col">avg wpm</th>
          <th scope="col">best wpm</th>
        </tr>
      </thead>
      <tbody>
        {#each modes as s (s.name)}
          <tr>
            <th scope="row">{s.name}</th>
            <td>{s.played}</td>
            <td>{passRate(s)}</td>
            <td>{averageWpm(s)}</td>
            <td>{bestWpm(s)}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</Card>

<style>
  .tiles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 14px;
    margin-bottom: 20px;
  }

  .tile {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 18px 20px;
  }

  .value {
    font-size: 2.1rem;
    font-weight: 600;
    line-height: 1.1;
    color: var(--ink);
    font-variant-numeric: tabular-nums;
  }

  .table-wrap {
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-variant-numeric: tabular-nums;
  }

  th,
  td {
    padding: 10px 12px;
    text-align: right;
    white-space: nowrap;
  }

  th:first-child {
    text-align: left;
  }

  thead th {
    font-family: var(--mono);
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--muted);
    border-bottom: 1px solid var(--rule-strong);
  }

  tbody th {
    font-weight: 500;
    color: var(--ink);
  }

  tbody tr + tr {
    border-top: 1px solid var(--rule);
  }

  td {
    font-family: var(--mono);
    font-size: 0.95rem;
  }

  @media (max-width: 560px) {
    th,
    td {
      padding: 8px 5px;
    }

    thead th {
      white-space: normal;
    }

    td {
      font-size: 0.82rem;
    }
  }
</style>
