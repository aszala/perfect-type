<script>
  import Input from './Input.svelte';
  import PerfectButton from './PerfectButton.svelte';
  import { chooseUsername, errorMessage } from '../lib/account.js';

  let username = $state('');
  let error = $state('');
  let busy = $state(false);

  async function submit(event) {
    event.preventDefault();
    busy = true;
    error = '';
    try {
      await chooseUsername(username.trim().toLowerCase());
    } catch (e) {
      error = errorMessage(e);
    }
    busy = false;
  }
</script>

<form class="card" onsubmit={submit}>
  <h2>pick a username</h2>
  <p class="muted">
    perfect type now shows usernames on the leaderboard instead of part of your email address. you can't change it
    later.
  </p>
  <Input
    label="username"
    id="username"
    hint="3–16 characters: a-z, 0-9 and _"
    autocomplete="username"
    maxlength="16"
    required
    bind:value={username}
  />
  <PerfectButton type="submit" full disabled={busy}>save username</PerfectButton>
  {#if error}<p class="error" role="alert">{error}</p>{/if}
</form>

<style>
  form {
    max-width: 440px;
    margin: 0 auto;
  }

  p {
    margin: 0 0 20px;
  }

  .error {
    margin: 14px 0 0;
  }
</style>
