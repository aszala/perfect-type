<script>
  import { onMount } from 'svelte';
  import { calculateWpm } from '../lib/game.js';

  // Plays one prompt and calls onfinish once with the outcome and keystroke timings.
  let { prompt, onfinish } = $props();

  // Each word keeps its trailing space so lines only break between words.
  const words = $derived.by(() => {
    let start = 0;
    return prompt.split(' ').map((word, i, all) => {
      const chars = i < all.length - 1 ? `${word} ` : word;
      const entry = { start, chars };
      start += chars.length;
      return entry;
    });
  });

  let index = $state(0);
  let text;
  let caret = $state({ left: 0, top: 0, height: 0, line: 0 });
  let layoutVersion = $state(0);

  let finished = false;
  let startedAt = 0;
  // { at, trusted, hold } per key press, for the anti-cheat check
  const keystrokes = [];
  const held = new Map();

  // Letters move when the web font arrives, so measure again then.
  onMount(() => {
    document.fonts?.ready.then(() => layoutVersion++);
  });

  $effect(() => {
    layoutVersion; // re-measure after the window resizes or fonts load
    const letter = text.querySelectorAll('.letter')[index];
    if (letter) {
      const height = letter.offsetHeight * 0.62;
      caret = {
        left: letter.offsetLeft,
        top: letter.offsetTop + (letter.offsetHeight - height) / 2,
        height,
        line: letter.offsetTop,
      };
    }
  });

  function onkeydown(event) {
    if (finished || event.repeat || event.key.length !== 1) return;
    if ((event.ctrlKey || event.metaKey || event.altKey) && !event.getModifierState('AltGraph')) return;
    event.preventDefault(); // stops the space bar scrolling and Firefox's quick find
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();

    const stroke = { at: event.timeStamp, trusted: event.isTrusted, hold: null };
    keystrokes.push(stroke);
    held.set(event.code || event.key, stroke);
    if (keystrokes.length === 1) startedAt = event.timeStamp;

    if (event.key !== prompt[index]) {
      finish(false, event.key);
    } else if (++index === prompt.length) {
      finish(true);
    }
  }

  function onkeyup(event) {
    const key = event.code || event.key;
    const stroke = held.get(key);
    if (stroke) {
      stroke.hold = event.timeStamp - stroke.at;
      held.delete(key);
    }
  }

  function finish(won, typedKey) {
    finished = true;
    const durationMs = Math.max(1, Math.round(keystrokes.at(-1).at - startedAt));
    onfinish({
      won,
      wpm: won ? calculateWpm(prompt.length, durationMs) : 0,
      prompt,
      chars: prompt.length,
      durationMs,
      typed: index,
      expected: prompt[index],
      got: typedKey,
      keystrokes,
    });
  }
</script>

<svelte:window {onkeydown} {onkeyup} onresize={() => layoutVersion++} />

<div class="game">
  <div class="viewport">
    <p class="for-screen-readers">type this: {prompt}</p>
    <div class="text" aria-hidden="true" bind:this={text} style:transform="translateY({-caret.line}px)">
      <span
        class="caret"
        class:waiting={index === 0}
        style:left="{caret.left}px"
        style:top="{caret.top}px"
        style:height="{caret.height}px"
      ></span>
      {#each words as word}
        <span class="word">
          {#each word.chars as char, i}
            <span class="letter" class:typed={word.start + i < index}>{char}</span>
          {/each}
        </span>
      {/each}
    </div>
  </div>
  <div class="progress" aria-hidden="true">
    <span style:transform="scaleX({index / prompt.length})"></span>
  </div>
</div>

<style>
  /* hugs short prompts so they sit centered; long ones wrap at the max width */
  .game {
    width: fit-content;
    max-width: min(100%, 920px);
    margin: 0 auto;
  }

  .viewport {
    position: relative;
    /* at most three lines; the lower ones fade out */
    max-height: 4.95em;
    overflow: hidden;
    font-size: clamp(1.45rem, 2.9vw, 2.35rem);
    line-height: 1.65;
    text-align: left;
    user-select: none;
  }

  .viewport::after {
    content: '';
    position: absolute;
    inset: 1.4em 0 0;
    background: linear-gradient(transparent, var(--bg) 95%);
    pointer-events: none;
  }

  .text {
    position: relative;
    transition: transform 160ms ease-out;
  }

  .word {
    display: inline-block;
  }

  .letter {
    display: inline-block;
    white-space: pre;
    color: var(--faint);
    transition: color 80ms;
  }

  .letter.typed {
    color: var(--ink);
  }

  .caret {
    position: absolute;
    width: 2.5px;
    margin-left: -1.5px;
    border-radius: 2px;
    background: var(--accent);
    transition:
      left 90ms ease-out,
      top 90ms ease-out;
  }

  .caret.waiting {
    animation: blink 1.1s steps(1) infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  .progress {
    height: 2px;
    margin-top: 10px;
    background: var(--rule);
    border-radius: 2px;
    overflow: hidden;
  }

  .progress span {
    display: block;
    height: 100%;
    background: var(--accent);
    transform-origin: left;
    transition: transform 90ms ease-out;
  }
</style>
