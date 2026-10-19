<script>
  import { onMount } from 'svelte';
  import { logOut } from '../lib/account.js';

  onMount(logOut);
</script>

<p class="muted">logging you out…</p>

<style>
  p {
    text-align: center;
    margin-top: 80px;
  }
</style>
