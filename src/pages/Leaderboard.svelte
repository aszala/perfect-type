<script>
  import Card from "../components/Card.svelte";
  import LeaderboardBlock from "../components/LeaderboardBlock.svelte";
  import { getLeaderboard } from "../firebase";
  import { onMount } from "svelte"
  
  // svelte-ignore unused-export-let
  export let currentRoute;
  // svelte-ignore unused-export-let
  export let params;

  let easyLeaderboardWPM = [];
  let mediumLeaderboardWPM = [];
  let hardLeaderboardWPM = [];

  onMount(() => {
    getLeaderboard("easy_wpm").then( res => {
      res.data.forEach(item => easyLeaderboardWPM.push(JSON.parse(item)))
      easyLeaderboardWPM = easyLeaderboardWPM
    })
    getLeaderboard("medium_wpm").then( res => {
      res.data.forEach(item => mediumLeaderboardWPM.push(JSON.parse(item)))
      mediumLeaderboardWPM = mediumLeaderboardWPM
    })
    getLeaderboard("hard_wpm").then( res => {
      res.data.forEach(item => hardLeaderboardWPM.push(JSON.parse(item)))
      hardLeaderboardWPM = hardLeaderboardWPM
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
  <div class="card-collection">
    {#if easyLeaderboardWPM.length != 0}
    <Card title="easy (wpm)">
      {#each easyLeaderboardWPM as userObject, i}
        <LeaderboardBlock user={userObject.user} score={userObject.score} date={userObject.date} place={i+1}/>
      {/each}
    </Card>
    {/if}
    {#if mediumLeaderboardWPM.length != 0}
    <Card title="medium (wpm)">
      {#each mediumLeaderboardWPM as userObject, i}
        <LeaderboardBlock user={userObject.user} score={userObject.score} date={userObject.date} place={i+1}/>
      {/each}
    </Card>
    {/if}
    {#if hardLeaderboardWPM.length != 0}
    <Card title="hard (wpm)">
      {#each hardLeaderboardWPM as userObject, i}
        <LeaderboardBlock user={userObject.user} score={userObject.score} date={userObject.date} place={i+1}/>
      {/each}
    </Card>
    {/if}
  </div>

</main>