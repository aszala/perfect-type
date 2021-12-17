<!-- must go inside of a card collection -->
<script>
  export let title;
</script>

<style>

  .card {
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px; /* 5px rounded corners */
    width: 500px;
    height: 400px;
    padding: 10px;
  }

  .card:hover {
    box-shadow: 0 3px 6px 0 rgba(0,0,0,0.2);
  }
  .container {
    text-align: left;
    padding: 2px 16px;
  }


</style>


<div class="card">
  <div class="container">
    <p><slot>default card</slot></p>
  </div>
</div>