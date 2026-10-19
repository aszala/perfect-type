<script>
  import GameModes from '../components/GameModes.svelte';
  import TypingGame from '../components/TypingGame.svelte';
  import GameOverDisplay from '../components/GameOverDisplay.svelte';
  import AdUnit from '../components/AdUnit.svelte';
  import { MAX_WPM, MODES, generatePrompt } from '../lib/game.js';
  import { detectAutomation } from '../lib/anticheat.js';
  import { saveRun } from '../lib/scores.js';
  import { AD_SLOTS } from '../lib/config.js';
  import { track } from '../firebase.js';
  import { session } from '../stores.js';
  import { formatWpm, isTouchOnly } from '../utils.js';

  const MODE_KEY = 'perfect-type:mode';
  const initialMode = savedMode();

  const MODE_INFO = {
    easy: 'common words. a sprint where every millisecond counts.',
    medium: 'words. long enough for nerves to kick in.',
    hard: "words. one slip near the end and it's all gone.",
    impossible: 'strings of random letters, numbers and symbols. good luck.',
  };

  let mode = $state(initialMode);
  let prompt = $state(generatePrompt(initialMode));
  let round = $state(0);
  let result = $state.raw(null);
  let save = $state.raw(null);
  let keyboardless = $state(isTouchOnly());

  const best = $derived($session.profile?.stats[mode].best ?? 0);

  function savedMode() {
    try {
      const stored = localStorage.getItem(MODE_KEY);
      return Object.hasOwn(MODES, stored) ? stored : 'easy';
    } catch {
      return 'easy';
    }
  }

  function restart() {
    result = null;
    save = null;
    prompt = generatePrompt(mode);
    round += 1;
  }

  function selectMode(name) {
    mode = name;
    try {
      localStorage.setItem(MODE_KEY, name);
    } catch {
      // the mode just won't be remembered
    }
    restart();
  }

  async function finish(run) {
    const finishedRound = round;
    const finishedMode = mode;
    result = { ...run, flags: run.won ? detectAutomation(run.keystrokes, run.wpm) : [] };
    track('game_end', { mode: finishedMode, won: run.won, wpm: run.wpm });

    const outcome = await saveRun(finishedMode, result);
    if (round === finishedRound) save = outcome;
  }

  function onkeydown(event) {
    if (result && event.key === 'Enter' && !event.target.closest?.('button, a')) {
      event.preventDefault();
      restart();
    } else if (!result && event.key === 'Escape') {
      restart();
    }
  }
</script>

<svelte:window {onkeydown} />

<section class="play" class:compact={keyboardless}>
  {#if keyboardless}
    <div class="keyboardless card">
      <h1>perfect type needs a keyboard</h1>
      <p>it's a typing game where one wrong key ends the run, so it's best on a laptop or desktop.</p>
      <div class="actions">
        <button class="button" onclick={() => (keyboardless = false)}>i have a keyboard</button>
        <a class="button secondary" href="/leaderboard">see the leaderboard</a>
      </div>
    </div>
  {:else if result}
    <GameOverDisplay {mode} {result} {save} onrestart={restart} />
  {:else}
    <div class="controls">
      <GameModes {mode} onselect={selectMode} />
      <p class="label">
        {MODES[mode].words}
        {MODES[mode].symbols ? 'symbol strings' : 'words'}{#if best}&nbsp;· your best {formatWpm(best)} wpm{/if}
      </p>
    </div>
    {#key round}
      <TypingGame {prompt} onfinish={finish} />
    {/key}
    <p class="hint muted">start typing to begin · one mistake ends the run · <kbd>esc</kbd> new words</p>
  {/if}
</section>

<AdUnit slot={AD_SLOTS.play} />

<article id="how-to-play">
  <div class="intro">
    <h2>how to play</h2>
    <p>
      perfect type is a typing test with one rule: type the text exactly. hit a single wrong key, whether it's a
      typo, a missed space or a wrong capital, and the run is over. finish without a mistake and you win, with your
      speed measured in words per minute.
    </p>
  </div>

  <ol class="steps">
    <li><span class="label">01</span>start typing whenever you're ready. the clock starts on your first key press.</li>
    <li><span class="label">02</span>press <kbd>enter</kbd> after a game to play again, or <kbd>esc</kbd> mid-game for new words.</li>
    <li><span class="label">03</span>log in to track your stats and put your best runs on the leaderboard.</li>
  </ol>

  <h2>modes</h2>
  <div class="modes">
    {#each Object.entries(MODES) as [name, { words }] (name)}
      <div class="mode card">
        <h3>{name}</h3>
        <p><strong>{words}</strong> {MODE_INFO[name]}</p>
      </div>
    {/each}
  </div>

  <div class="columns">
    <section>
      <h2>how is wpm calculated?</h2>
      <p>
        perfect type uses the standard typing-test definition: every five characters, spaces included, count as one
        word. your score is the length of the prompt divided by five, divided by the minutes between your first and
        last key press. since a single mistake ends the game, every winning run is 100% accurate.
      </p>
    </section>
    <section>
      <h2>tips for typing perfectly</h2>
      <ul>
        <li>slow down a little. accuracy first, speed follows.</li>
        <li>keep your eyes on the text, not on your hands.</li>
        <li>read a word ahead so the next one never surprises you.</li>
        <li>rest your fingers on the home row (asdf jkl;) and return to it after every key.</li>
      </ul>
    </section>
  </div>

  <h2>leaderboard rules</h2>
  <p>
    each player's best run in each mode goes on the <a href="/leaderboard">leaderboard</a>. you need an account with
    a verified email address. runs that look automated, and anything over {MAX_WPM} wpm, aren't ranked.
  </p>
</article>

<style>
  .play {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 36px;
    min-height: calc(100vh - 220px);
    text-align: center;
  }

  .play.compact {
    min-height: 0;
    padding: 24px 0;
  }

  .controls {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .controls p,
  .hint {
    margin: 0;
  }

  .hint {
    font-size: 0.95rem;
  }

  .keyboardless {
    max-width: 480px;
    margin: 0 auto;
  }

  .keyboardless h1 {
    font-size: 1.6rem;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  }

  article {
    max-width: 880px;
    margin: 48px auto 0;
    padding-top: 48px;
    border-top: 1px solid var(--rule);
    line-height: 1.65;
  }

  .intro p {
    font-size: 1.15rem;
    margin-top: 0;
  }

  .steps {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px 28px;
    margin: 28px 0 44px;
    padding: 0;
  }

  .steps .label {
    display: block;
    color: var(--accent);
    margin-bottom: 4px;
  }

  .modes {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    gap: 14px;
    margin-bottom: 44px;
  }

  .mode {
    padding: 18px 20px;
    box-shadow: none;
  }

  .mode h3 {
    font-family: var(--mono);
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--accent);
  }

  .mode p {
    margin: 0;
    font-size: 0.98rem;
  }

  .columns {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 8px 48px;
    margin-bottom: 28px;
  }

  .columns ul {
    padding-left: 1.1em;
    margin: 0;
  }

  .columns li + li {
    margin-top: 6px;
  }
</style>
