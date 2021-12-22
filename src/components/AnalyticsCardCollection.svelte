<script>
  import { fade } from "svelte/transition"
</script>
<style>
  .analytics-card-collection {
    justify-content: center;
    display:inline-flex;
    flex-wrap:wrap;
    padding: 5px;
    align-items: center;
    justify-content: center;
  }
</style>

<main>
  <div in:fade class="analytics-card-collection"><slot>place analytics cards here</slot></div>
</main>