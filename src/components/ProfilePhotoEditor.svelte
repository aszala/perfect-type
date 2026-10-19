<script>
  import PerfectButton from './PerfectButton.svelte';
  import { AVATAR_COUNT, avatarUrl } from '../utils.js';

  // Shows the current avatar; clicking it opens a picker.
  let { current, onapply } = $props();

  let dialog;
  let selected = $state(0);

  function open() {
    selected = current;
    dialog.showModal();
  }

  function apply() {
    onapply(selected);
    dialog.close();
  }
</script>

<button class="avatar" onclick={open} aria-label="change avatar">
  <img src={avatarUrl(current)} alt="" width="104" height="104" />
  <span class="edit">change</span>
</button>

<dialog bind:this={dialog} aria-labelledby="avatar-title">
  <h2 id="avatar-title">choose an avatar</h2>
  <div class="avatars">
    {#each { length: AVATAR_COUNT }, i (i)}
      <button class:selected={i === selected} aria-pressed={i === selected} onclick={() => (selected = i)}>
        <img src={avatarUrl(i)} alt="avatar {i + 1}" width="80" height="80" />
      </button>
    {/each}
  </div>
  <div class="actions">
    <PerfectButton variant="secondary" onclick={() => dialog.close()}>cancel</PerfectButton>
    <PerfectButton onclick={apply}>save</PerfectButton>
  </div>
</dialog>

<style>
  .avatar {
    position: relative;
    display: block;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
  }

  .avatar img {
    display: block;
  }

  .edit {
    position: absolute;
    inset: auto 0 0;
    padding: 4px 0 6px;
    font-family: var(--mono);
    font-size: 0.7rem;
    color: var(--bg);
    background: rgb(29 27 23 / 0.7);
    opacity: 0;
    transition: opacity 150ms;
  }

  .avatar:hover .edit,
  .avatar:focus-visible .edit {
    opacity: 1;
  }

  dialog {
    width: min(560px, calc(100vw - 32px));
    padding: 28px;
    background: var(--surface);
    color: var(--text);
    border: 1px solid var(--rule);
    border-radius: var(--radius);
    box-shadow: 0 20px 60px rgb(29 27 23 / 0.25);
  }

  dialog::backdrop {
    background: rgb(29 27 23 / 0.55);
    backdrop-filter: blur(2px);
  }

  .avatars {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    gap: 14px;
    justify-items: center;
  }

  .avatars button {
    display: flex;
    border-radius: 50%;
    outline: 3px solid transparent;
    outline-offset: 3px;
    transition: outline-color 150ms;
  }

  .avatars img {
    border-radius: 50%;
  }

  .avatars button:hover {
    outline-color: var(--rule-strong);
  }

  .avatars button.selected {
    outline-color: var(--accent);
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 24px;
  }
</style>
