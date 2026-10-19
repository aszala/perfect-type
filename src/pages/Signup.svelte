<script>
  import Input from '../components/Input.svelte';
  import PerfectButton from '../components/PerfectButton.svelte';
  import { MIN_PASSWORD_LENGTH, errorMessage, signUp } from '../lib/account.js';
  import { session } from '../stores.js';

  let username = $state('');
  let email = $state('');
  let password = $state('');
  let confirmPassword = $state('');
  let error = $state('');
  let busy = $state(false);
  let done = $state(false);

  $effect(() => {
    if ($session.ready && $session.user && !busy && !done) location.replace('/');
  });

  async function signup(event) {
    event.preventDefault();
    error = '';
    if (password !== confirmPassword) {
      error = "the passwords don't match";
      return;
    }
    busy = true;
    try {
      await signUp({ username: username.trim().toLowerCase(), email: email.trim(), password });
      done = true;
    } catch (e) {
      error = errorMessage(e);
    }
    busy = false;
  }
</script>

<div class="auth">
  {#if done}
    <div class="card done">
      <h1>you're in!</h1>
      <p>
        we sent a verification link to <strong>{email.trim()}</strong>. you can play right away; verifying puts your
        best runs on the leaderboard.
      </p>
      <a class="button full" href="/">start playing</a>
    </div>
  {:else}
    <form class="card" onsubmit={signup}>
      <h1>create an account</h1>
      <p class="muted lede">track your stats and get on the leaderboard. it's free.</p>

      <Input
        label="username"
        id="username"
        hint="shown on the leaderboard. 3–16 characters: a-z, 0-9 and _"
        autocomplete="username"
        maxlength="16"
        required
        bind:value={username}
      />
      <Input label="email" id="email" type="email" autocomplete="email" required bind:value={email} />
      <Input
        label="password"
        id="password"
        type="password"
        hint="at least {MIN_PASSWORD_LENGTH} characters"
        autocomplete="new-password"
        minlength={MIN_PASSWORD_LENGTH}
        required
        bind:value={password}
      />
      <Input
        label="confirm password"
        id="confirm-password"
        type="password"
        autocomplete="new-password"
        required
        bind:value={confirmPassword}
      />

      <PerfectButton type="submit" full disabled={busy}>sign up</PerfectButton>
      {#if error}<p class="error" role="alert">{error}</p>{/if}
    </form>
    <p class="switch">already have an account? <a href="/login">login</a></p>
  {/if}
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

  .done p {
    margin: 0 0 24px;
  }

  .error {
    margin: 16px 0 0;
  }

  .switch {
    text-align: center;
    color: var(--muted);
  }
</style>
