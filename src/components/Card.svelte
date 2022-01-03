<!-- must go inside of a card collection -->
<script>
  import { fade } from "svelte/transition";

  export let title;
</script>

<style>

  .card {
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
    min-width: 350px;
    max-width: 250px;
    min-height: 200px;
    padding: 10px;
    margin: auto;
  }

  .card:hover {
    box-shadow: 0 3px 6px 0 rgba(0,0,0,0.2);
  }

  .container {
    padding: 2px 16px;
  }

</style>

<div in:fade class="card">
  <h2>{title}</h2>
  <div class="container">
    <p><slot>default card</slot></p>
  </div>
</div>
