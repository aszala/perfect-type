<script>
  import LeaderboardCard from "../components/LeaderboardCard.svelte";
  import LeaderboardCardCollection from "../components/LeaderboardCardCollection.svelte";
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
    console.log("HI")
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
  

</style>

<main>
  <h1>leaderboard</h1>
  <LeaderboardCardCollection>
    {#if easyLeaderboardWPM.length != 0}
    <LeaderboardCard title="easy (wpm)">
      {#each easyLeaderboardWPM as userObject, i}
        <LeaderboardBlock user={userObject.user} score={userObject.score} date={userObject.date} place={i+1}/>
      {/each}
    </LeaderboardCard>
    {/if}
    {#if mediumLeaderboardWPM.length != 0}
    <LeaderboardCard title="medium (wpm)">
      {#each mediumLeaderboardWPM as userObject, i}
        <LeaderboardBlock user={userObject.user} score={userObject.score} date={userObject.date} place={i+1}/>
      {/each}
    </LeaderboardCard>
    {/if}
    {#if hardLeaderboardWPM.length != 0}
    <LeaderboardCard title="hard (wpm)">
      {#each hardLeaderboardWPM as userObject, i}
        <LeaderboardBlock user={userObject.user} score={userObject.score} date={userObject.date} place={i+1}/>
      {/each}
    </LeaderboardCard>
    {/if}
  </LeaderboardCardCollection>

</main>