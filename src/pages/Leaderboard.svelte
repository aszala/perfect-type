<script>
  import Card from "../components/Card.svelte";
  import LeaderboardBlock from "../components/LeaderboardBlock.svelte";
  import { getLeaderboard, getUserProfile } from "../firebase";
  import { onMount } from "svelte"
    // svelte-ignore unused-export-let
  export let currentRoute;
  // svelte-ignore unused-export-let
  export let params;

  let easyLeaderboardWPM = [];
  let mediumLeaderboardWPM = [];
  let hardLeaderboardWPM = [];
  let impossibleLeaderboardWPM = [];

  onMount(() => {
    getLeaderboard("easy_wpm").then( res => {
      easyLeaderboardWPM = res;
    })
    getLeaderboard("medium_wpm").then( res => {
      mediumLeaderboardWPM = res;
    })
    getLeaderboard("hard_wpm").then( res => {
      hardLeaderboardWPM = res;
    })
    getLeaderboard("impossible_wpm").then( res => {
      impossibleLeaderboardWPM = res;
    })
  })
  
</script>

<style>
  .card-collection {
    max-height: auto;
    justify-content: center;
    max-width: 1500px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
  }
</style>

<main>
  <h1>leaderboard</h1>
  {#if !(easyLeaderboardWPM.length == 0 || mediumLeaderboardWPM.length == 0 || hardLeaderboardWPM.length == 0 || impossibleLeaderboardWPM.length == 0)}
    <div class="card-collection">

      <Card title="easy (wpm)">
        {#each easyLeaderboardWPM.slice(0, 5) as userObject, i}
          <LeaderboardBlock profilePhoto={userObject.profilePhoto} user={userObject.user} score={userObject.score} date={userObject.date} place={i+1}/>
        {/each}
      </Card>


      <Card title="medium (wpm)">
        {#each mediumLeaderboardWPM.slice(0, 5) as userObject, i}
          <LeaderboardBlock profilePhoto={userObject.profilePhoto} user={userObject.user} score={userObject.score} date={userObject.date} place={i+1}/>
        {/each}
      </Card>


      <Card title="hard (wpm)">
        {#each hardLeaderboardWPM.slice(0, 5) as userObject, i}
          <LeaderboardBlock profilePhoto={userObject.profilePhoto} user={userObject.user} score={userObject.score} date={userObject.date} place={i+1}/>
        {/each}
      </Card>

      
      <Card title="impossible (wpm)">
        {#each impossibleLeaderboardWPM.slice(0, 5) as userObject, i}
          <LeaderboardBlock profilePhoto={userObject.profilePhoto} user={userObject.user} score={userObject.score} date={userObject.date} place={i+1}/>
        {/each}
      </Card>
      
    </div>
  {/if}
</main>