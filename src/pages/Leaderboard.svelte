<script>
  import LeaderboardCard from "../components/LeaderboardCard.svelte";
  import LeaderboardCardCollection from "../components/LeaderboardCardCollection.svelte";
  import LeaderboardBlock from "../components/LeaderboardBlock.svelte";
  import { getLeaderboard } from "../firebase";
  
  let easyLeaderboardWPM = [];
  getLeaderboard("easy_wpm").then( res => {
    res.data.forEach(item => easyLeaderboardWPM.push(JSON.parse(item)))
    easyLeaderboardWPM = easyLeaderboardWPM
  })
  let mediumLeaderboardWPM = [];
  getLeaderboard("medium_wpm").then( res => {
    res.data.forEach(item => mediumLeaderboardWPM.push(JSON.parse(item)))
    mediumLeaderboardWPM = mediumLeaderboardWPM
  })
  let hardLeaderboardWPM = [];
  getLeaderboard("hard_wpm").then( res => {
    res.data.forEach(item => hardLeaderboardWPM.push(JSON.parse(item)))
    hardLeaderboardWPM = hardLeaderboardWPM
  })
  
</script>

<style>
  

</style>

<main>
  <h1>leaderboard</h1>
  <LeaderboardCardCollection>
    <LeaderboardCard title="easy (wpm)">
      {#each easyLeaderboardWPM as userObject, i}
        <LeaderboardBlock user={userObject.user} score={userObject.score} date={userObject.date} place={i+1}/>
      {/each}
    </LeaderboardCard>
    <LeaderboardCard title="medium (wpm)">
      {#each mediumLeaderboardWPM as userObject, i}
        <LeaderboardBlock user={userObject.user} score={userObject.score} date={userObject.date} place={i+1}/>
      {/each}
    </LeaderboardCard>
    <LeaderboardCard title="hard (wpm)">
      {#each hardLeaderboardWPM as userObject, i}
        <LeaderboardBlock user={userObject.user} score={userObject.score} date={userObject.date} place={i+1}/>
      {/each}
    </LeaderboardCard>
  </LeaderboardCardCollection>

</main>