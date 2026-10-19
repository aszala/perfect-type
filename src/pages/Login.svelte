<script>
  import Input from '../components/Input.svelte';
  import PerfectButton from '../components/PerfectButton.svelte';
  import { errorMessage, logIn, resetPassword } from '../lib/account.js';
  import { session } from '../stores.js';

  let email = $state('');
  let password = $state('');
  let error = $state('');
  let message = $state('');
  let busy = $state(false);

  $effect(() => {
    if ($session.ready && $session.user && !busy) location.replace('/');
  });

  async function login(event) {
    event.preventDefault();
    busy = true;
    error = '';
    message = '';
    try {
      await logIn(email.trim(), password);
      location.assign('/');
    } catch (e) {
      error = errorMessage(e);
      busy = false;
    }
  }

  async function forgot() {
    error = '';
    message = '';
    if (!email.trim()) {
      error = 'enter your email above first';
      return;
    }
    try {
      await resetPassword(email.trim());
      message = 'if that email has an account, a password reset link is on its way.';
    } catch (e) {
      error = errorMessage(e);
    }
  }
</script>

<div class="auth">
  <form class="card" onsubmit={login}>
    <h1>welcome back</h1>
    <p class="muted lede">log in to save your stats and climb the leaderboard.</p>

    <Input label="email" id="email" type="email" autocomplete="email" required bind:value={email} />
    <Input
      label="password"
      id="password"
      type="password"
      autocomplete="current-password"
      required
      bind:value={password}
    />
    <button type="button" class="link forgot" onclick={forgot}>forgot your password?</button>

    <PerfectButton type="submit" full disabled={busy}>login</PerfectButton>

    {#if error}<p class="error" role="alert">{error}</p>{/if}
    {#if message}<p class="message">{message}</p>{/if}
  </form>
  <p class="switch">new here? <a href="/signup">create an account</a></p>
</div>

<style>
  .auth {
    max-width: 420px;
    margin: 32px auto 0;
  }

  .card {
    padding: 32px;
  }

  h1 {
    font-size: 2rem;
  }

  .lede {
    margin: 0 0 26px;
  }

  .forgot {
    display: block;
    margin: -8px 0 22px auto;
    font-size: 0.9rem;
    color: var(--muted);
  }

  .error,
  .message {
    margin: 16px 0 0;
  }

  .switch {
    text-align: center;
    color: var(--muted);
  }
</style>
