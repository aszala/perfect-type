<script>
  export let user;
  export let profilePhoto;
  export let score;
  export let place;
  export let date;
  import { profilePhotoLocation } from "../utils";
</script>

<style>
  .leaderboard-env {
    padding: 10px;
    border-bottom: .5mm solid black;
    display: flex;
  }

  img {
    border-radius: 50%;
    height: 30px;
    width: auto;
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
  <div class="block-item profile-photo"><img alt="avatar" src={profilePhotoLocation + 'photo' + profilePhoto + '.png'}></div>
  <div class="block-item date">
    {user}
    <br>
    {date}
    <br>
  </div>
  <div class="block-item score">
    {score}
  </div>
</div>