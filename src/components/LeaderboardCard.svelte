<!-- must go inside of a card collection -->
<script>
  export let title;
  import { fade } from "svelte/transition"
</script>

<style>

  .card {
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    min-width: 300px;
    padding: 30px;
    border-radius: 5px; /* 5px rounded corners */
  }

  .card:hover {
    box-shadow: 0 3px 6px 0 rgba(0,0,0,0.2);
  }
  .leaderboard-card {
    text-align: left;
    padding: 30px;
    justify-content: center;
    display:grid;
  }


</style>

<main>
<div in:fade class="card">
  <h1>{title}</h1>
  <div class="leaderboard-card">
    <slot>default card</slot>
  </div>
</div>
</main>