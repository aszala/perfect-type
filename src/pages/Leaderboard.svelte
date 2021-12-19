<script>
  import LeaderboardCard from "../components/LeaderboardCard.svelte";
  import LeaderboardCardCollection from "../components/LeaderboardCardCollection.svelte";
  import LeaderboardBlock from "../components/LeaderboardBlock.svelte";
  
  
  let easyLeaderboardWPM = [{user: "abhayrocks", score: 122, date:"12/04/22"}, {user: "davidawesome", score: 121, date:"12/04/22"}, {user: "maximus69", score: 109, date:"12/04/22"}, {user: "fartman3", score: 108, date:"12/04/22"}, {user: "gamer65", score: 55, date:"12/04/22"}];
  // let easyLeaderboardLPM = [{user: "abhay", score: 122}, {user: "abhay", score: 20}, {user: "abhay", score: 20}, {user: "abhay", score: 20}, {user: "abhay", score: 20}];

  let mediumLeaderboardWPM = [{user: "abhayrocks", score: 111, date:"12/04/22"}, {user: "davidawesome", score: 110, date:"12/04/22"}, {user: "horseradish2", score: 90, date:"12/04/22"}, {user: "abhay", score: 87, date:"12/04/22"}, {user: "poofar2", score: 33, date:"12/04/22"}];
  // let mediumLeaderboardLPM = [{user: "abhay", score: 122}, {user: "abhay", score: 20}, {user: "abhay", score: 20}, {user: "abhay", score: 20}, {user: "abhay", score: 20}];

  let hardLeaderboardWPM = [{user: "abhayrocks", score: 99, date:"12/04/22"}, {user: "davidawesome", score: 98, date:"12/04/22"}, {user: "pencilandpaper1", score: 88, date:"12/04/22"}, {user: "abhay", score: 87, date:"12/04/22"}, {user: "throw1", score: 22, date:"12/04/22"}];
  // let hardLeaderboardLPM = [{user: "abhay", score: 20}, {user: "abhay", score: 20}, {user: "abhay", score: 20}, {user: "abhay", score: 20}, {user: "abhay", score: 20}];

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