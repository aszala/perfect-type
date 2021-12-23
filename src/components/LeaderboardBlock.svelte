<script>
  export let user;
  export let score;
  export let place;
  export let date;
</script>

<style>
  .leaderboard-env {
    padding: 10px;
    border-bottom: .5mm solid black;
    min-width: 175px;
    display: flex;
  }

  .block-item {
    padding: 5px;
  }
  
  .score {
    margin-left:auto;
    margin-right:0;
  }

  .date {
    font-size: 1em;
  }


</style>



<div class="leaderboard-env">
  <div class="block-item"><strong>{`${place}`}</strong></div>
  <div class="block-item date">
    {user}
    <br>
    {date}
  </div>

  <div class="block-item score">
    {score}
  </div>
</div>