<script>
  import Input from '../components/Input.svelte';
  import PerfectButton from '../components/PerfectButton.svelte';
  import ProfilePhotoEditor from '../components/ProfilePhotoEditor.svelte';
  import StatisticsBlock from '../components/StatisticsBlock.svelte';
  import UsernameForm from '../components/UsernameForm.svelte';
  import { deleteAccount, errorMessage, resendVerification } from '../lib/account.js';
  import { updatePhoto } from '../lib/db.js';
  import { session } from '../stores.js';

  let resent = $state(false);
  let password = $state('');
  let deleteError = $state('');
  let deleting = $state(false);

  $effect(() => {
    if ($session.ready && !$session.user && !deleting) location.replace('/login');
  });

  async function changePhoto(photo) {
    const { user, profile } = $session;
    if (photo === profile.photo) return;
    session.update((s) => ({ ...s, profile: { ...s.profile, photo } }));
    await updatePhoto(user.uid, profile, photo).catch(console.error);
  }

  async function resend() {
    await resendVerification().catch(console.error);
    resent = true;
  }

  async function removeAccount(event) {
    event.preventDefault();
    if (!confirm('delete your account, stats and leaderboard entries? this cannot be undone.')) return;
    deleting = true;
    deleteError = '';
    try {
      await deleteAccount(password);
      location.assign('/');
    } catch (e) {
      deleteError = errorMessage(e);
      deleting = false;
    }
  }
</script>

{#if !$session.ready || !$session.user}
  <p class="loading muted">loading…</p>
{:else if !$session.profile}
  <div class="setup">
    <UsernameForm />
  </div>
{:else}
  {@const profile = $session.profile}
  <div class="profile">
    <section class="identity card">
      <ProfilePhotoEditor current={profile.photo} onapply={changePhoto} />
      <div>
        <h1>{profile.username}</h1>
        <p class="muted">{$session.user.email}</p>
        {#if $session.verified}
          <p class="badge">✓ email verified</p>
        {:else}
          <p class="badge unverified">
            verify your email to get on the leaderboard ·
            {#if resent}
              sent! check your inbox.
            {:else}
              <button class="link" onclick={resend}>resend the email</button>
            {/if}
          </p>
        {/if}
      </div>
    </section>

    <StatisticsBlock stats={profile.stats} />

    <details>
      <summary>delete account</summary>
      <form onsubmit={removeAccount}>
        <p>this deletes your login, stats and leaderboard entries for good. enter your password to confirm.</p>
        <Input
          label="password"
          id="delete-password"
          type="password"
          autocomplete="current-password"
          required
          bind:value={password}
        />
        <button class="button danger" type="submit" disabled={deleting}>delete my account</button>
        {#if deleteError}<p class="error" role="alert">{deleteError}</p>{/if}
      </form>
    </details>
  </div>
{/if}

<style>
  .loading {
    text-align: center;
    margin-top: 80px;
  }

  .setup {
    margin-top: 40px;
  }

  .profile {
    max-width: 860px;
    margin: 16px auto 0;
  }

  .identity {
    display: flex;
    align-items: center;
    gap: 28px;
    margin-bottom: 20px;
  }

  .identity h1 {
    margin: 0;
    overflow-wrap: anywhere;
  }

  .identity p {
    margin: 2px 0 0;
  }

  .identity .badge {
    display: inline-block;
    margin-top: 10px;
    padding: 3px 10px;
    border-radius: 999px;
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--ink);
    background: rgb(29 27 23 / 0.06);
  }

  .badge.unverified {
    background: var(--accent-soft);
  }

  .badge .link {
    font: inherit;
  }

  details {
    margin-top: 48px;
    padding-top: 20px;
    border-top: 1px solid var(--rule);
  }

  summary {
    cursor: pointer;
    width: fit-content;
    color: var(--muted);
  }

  form {
    max-width: 420px;
    margin-top: 16px;
  }

  .danger {
    background: var(--accent);
    border-color: var(--accent);
  }

  .danger:hover:not(:disabled) {
    background: #8f2f1a;
    border-color: #8f2f1a;
  }

  .error {
    margin: 12px 0 0;
  }

  @media (max-width: 560px) {
    .identity {
      flex-direction: column;
      text-align: center;
    }
  }
</style>
