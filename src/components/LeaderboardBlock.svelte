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
    display: flex;
    align-items: center;
    justify-content: left;
  }

  .leaderboard-section { 
    padding: 10px;
  }


</style>



<div class="leaderboard-env">
  <p><strong>{`${place}:`}</strong></p>
  <div class="leaderboard-section">
    {date}
  </div>
  <div class="leaderboard-section">
    {user}
  </div>
  <div class="leaderboard-section">
    {score}
  </div>
</div>