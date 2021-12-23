<script>
  import Card from "../components/Card.svelte";
  import StatisticsBlock from "../components/StatisticsBlock.svelte";
  import { getUser, getUserProfile } from "../firebase";
  import { onMount } from "svelte";

  // svelte-ignore unused-export-let
  export let currentRoute;
  // svelte-ignore unused-export-let
  export let params;

  let gamesPlayed, easyGamesPlayed, mediumGamesPlayed, hardGamesPlayed;
  let userName = getUser().email.substr(0, getUser().email.indexOf("@"))
  let avgWPM, avgEasyWPM, avgMediumWPM, avgHardWPM;
  let avgLPM, avgEasyLPM, avgMediumLPM, avgHardLPM;
  let passRate, easyPassRate, mediumPassRate, hardPassRate;
  let src = ' /default_avatar.png';

  onMount(() => {
    getUserProfile(getUser().uid).then(res => {
      easyGamesPlayed = res.easyGamesFailed + res.easyGamesWon;
      mediumGamesPlayed = res.mediumGamesFailed + res.mediumGamesWon;
      hardGamesPlayed = res.hardGamesFailed + res.hardGamesWon;
      gamesPlayed = easyGamesPlayed + mediumGamesPlayed + hardGamesPlayed;
      let gamesWon = res.easyGamesWon + res.mediumGamesWon + res.hardGamesWon;
      avgEasyWPM = res.easyWPM;
      avgEasyLPM = res.easyLPM;
      avgMediumWPM = res.mediumWPM;
      avgMediumLPM = res.mediumLPM;
      avgHardWPM = res.hardWPM;
      avgHardLPM = res.hardLPM;
      avgWPM = gamesPlayed != 0 ? (avgEasyWPM*res.easyGamesWon + avgMediumWPM*res.mediumGamesWon + avgHardWPM*res.hardGamesWon) / gamesWon : 0;
      avgLPM = gamesPlayed != 0 ? (avgEasyLPM *res.easyGamesWon + avgMediumLPM*res.mediumGamesWon + avgHardLPM*res.hardGamesWon) / gamesWon : 0;
      easyPassRate = easyGamesPlayed != 0 ? Math.round(res.easyGamesWon / easyGamesPlayed * 100) / 100 : 0;
      mediumPassRate = mediumGamesPlayed != 0 ?  Math.round(res.mediumGamesWon / mediumGamesPlayed * 100) / 100 : 0;
      hardPassRate = hardGamesPlayed != 0 ? Math.round(res.hardGamesWon / hardGamesPlayed * 100) / 100 : 0;
      passRate = gamesPlayed != 0 ? Math.round((gamesWon ) / gamesPlayed * 100) / 100: 0;
    });
  });

</script>

<style>
  img {
    border-radius: 50%;
    height: 50px;
    width: auto;
  }

  .card-collection {
    justify-content: center;
    display:inline-flex;
    flex-wrap:wrap;
    padding: 5px;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
</style>

<main>
  <h1>profile</h1>
  {#if gamesPlayed != null}
    <Card title={userName}>
      <StatisticsBlock>
        <img {src} alt="Avatar" />
      </StatisticsBlock>
    </Card>
    <br>
    <div class="card-collection">
      <Card title="total games">
        <StatisticsBlock overall={gamesPlayed} easy={easyGamesPlayed} medium={mediumGamesPlayed} hard={hardGamesPlayed} units=""/>
      </Card>
      <Card title="pass rate">
        <StatisticsBlock overall={passRate*100} easy={easyPassRate*100} medium={mediumPassRate*100} hard={hardPassRate*100} units="%"/>
      </Card>
      <Card title="avg words per minute">
        <StatisticsBlock overall={avgWPM} easy={avgEasyWPM} medium={avgMediumWPM} hard={avgHardWPM} units=""/>
      </Card>
      <Card title="avg letters per minute">
        <StatisticsBlock overall={avgLPM} easy={avgEasyLPM} medium={avgMediumLPM} hard={avgHardLPM} units=""/>
      </Card>
    </div>
  {/if}
    
</main>