<script>
  import { onMount } from 'svelte';
  import { ADSENSE_CLIENT } from '../lib/config.js';

  // slot: an ad unit ID from AdSense. Empty means no manual ad here (Auto ads may still place one).
  let { slot } = $props();

  onMount(() => {
    if (slot) (window.adsbygoogle ||= []).push({});
  });
</script>

{#if slot}
  <div class="ad">
    <ins
      class="adsbygoogle"
      style="display:block"
      data-ad-client={ADSENSE_CLIENT}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  </div>
{/if}

<style>
  .ad {
    max-width: 970px;
    margin: 30px auto;
  }
</style>
