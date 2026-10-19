<script>
  // aside: a small label shown opposite the title
  let { title, aside, children } = $props();
</script>

<section class="card">
  {#if title}
    <header>
      <h2>{title}</h2>
      {#if aside}<span class="label">{aside}</span>{/if}
    </header>
  {/if}
  {@render children?.()}
</section>

<style>
  header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 14px;
  }

  h2 {
    margin: 0;
  }
</style>
