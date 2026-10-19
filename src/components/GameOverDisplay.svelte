<script>
  import PerfectButton from './PerfectButton.svelte';
  import { resendVerification } from '../lib/account.js';
  import { SUPPORT_URL } from '../lib/config.js';
  import { formatWpm, shareScore } from '../utils.js';

  // result: what TypingGame reported plus anti-cheat flags; save: what saveRun reported (null while saving)
  let { mode, result, save, onrestart } = $props();

  let shareStatus = $state('');
  let resent = $state(false);

  // The word the player tripped on, split around the missed character.
  const mistake = $derived.by(() => {
    const { prompt, typed } = result;
    const start = prompt.lastIndexOf(' ', typed - 1) + 1;
    const end = prompt.indexOf(' ', typed);
    return {
      before: prompt.slice(start, typed),
      char: prompt[typed],
      after: end === -1 ? prompt.slice(typed + 1) : prompt.slice(typed + 1, end),
    };
  });

  const show = (char) => (char === ' ' ? 'space' : char);

  async function share() {
    try {
      shareStatus = (await shareScore(mode, result.wpm)) === 'copied' ? 'copied to your clipboard' : '';
    } catch {
      shareStatus = ''; // share sheet dismissed
    }
  }

  async function resend() {
    await resendVerification().catch(console.error);
    resent = true;
  }
</script>

<div class="result" aria-live="polite">
  {#if result.won}
    <p class="label">you won :)</p>
    <p class="score"><span class="number">{formatWpm(result.wpm)}</span><span class="unit">wpm</span></p>
    <p class="label details">{result.chars} characters · {(result.durationMs / 1000).toFixed(2)}s · {mode}</p>
  {:else}
    <p class="label">you lost :(</p>
    <p class="word">
      {mistake.before}<mark class:space={mistake.char === ' '}>{mistake.char === ' ' ? '␣' : mistake.char}</mark
      >{mistake.after}
    </p>
    <p class="detail">
      you pressed <kbd>{show(result.got)}</kbd> instead of <kbd>{show(result.expected)}</kbd>
    </p>
    <p class="label details">{result.typed} of {result.chars} characters · {mode}</p>
  {/if}

  {#if result.flags.length || save?.status !== 'lost'}
    <p class="status" class:highlight={save?.status === 'ranked' && !result.flags.length}>
      {#if result.flags.length}
        this run can't be ranked because {result.flags.join(' and ')}.
      {:else if !save}
        saving…
      {:else if save.status === 'guest'}
        <a href="/signup">sign up</a> or <a href="/login">login</a> to save your stats and get on the leaderboard.
      {:else if save.status === 'no-profile'}
        <a href="/profile">pick a username</a> to start saving your stats.
      {:else if save.status === 'unverified'}
        verify your email to get on the leaderboard.
        {#if resent}
          sent! check your inbox.
        {:else}
          <button class="link" onclick={resend}>resend the email</button>
        {/if}
      {:else if save.status === 'ranked'}
        new personal best! you're <strong>#{save.rank}</strong> on the <a href="/leaderboard">{mode} leaderboard</a>.
      {:else if save.status === 'not-best'}
        your best on {mode} is {formatWpm(save.best)} wpm.
      {:else if save.status === 'error'}
        <span class="error">couldn't save your score, please try again later.</span>
      {/if}
    </p>
  {/if}

  <div class="actions">
    <PerfectButton onclick={onrestart}>{result.won ? 'play again' : 'try again'}</PerfectButton>
    {#if result.won}
      <PerfectButton variant="secondary" onclick={share}>share score</PerfectButton>
    {/if}
  </div>
  <p class="hint muted">
    {#if shareStatus}{shareStatus}{:else}<kbd>enter</kbd> to play again{/if}
  </p>

  {#if SUPPORT_URL && result.won}
    <p class="support muted">enjoying perfect type? <a href={SUPPORT_URL} target="_blank" rel="noopener">buy us a taco 🌮</a></p>
  {/if}
</div>

<style>
  .result {
    text-align: center;
    padding: 12px 0;
  }

  p {
    margin: 0;
  }

  .score {
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 0.25em;
    color: var(--ink);
    line-height: 1;
    margin: 12px 0 14px;
  }

  .number {
    font-size: clamp(4.5rem, 12vw, 7.5rem);
    font-weight: 600;
    letter-spacing: -0.03em;
    font-variant-numeric: tabular-nums;
  }

  .unit {
    font-family: var(--mono);
    font-size: 1.1rem;
    color: var(--muted);
  }

  .word {
    font-size: clamp(2.4rem, 7vw, 3.6rem);
    color: var(--ink);
    margin: 10px 0 6px;
    overflow-wrap: anywhere;
  }

  mark {
    background: var(--accent-soft);
    color: var(--accent);
    border-bottom: 3px solid var(--accent);
    padding: 0 0.04em;
  }

  .detail {
    font-size: 1.1rem;
    margin-bottom: 8px;
  }

  .details {
    margin-top: 6px;
  }

  .status {
    max-width: 520px;
    margin: 24px auto 0;
    padding: 12px 18px;
    border-radius: 8px;
    font-size: 1.05rem;
  }

  .status.highlight {
    background: var(--accent-soft);
    color: var(--ink);
  }

  .actions {
    margin-top: 28px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
  }

  .hint {
    margin-top: 16px;
    font-size: 0.95rem;
  }

  .support {
    margin-top: 32px;
    font-size: 0.95rem;
  }
</style>
