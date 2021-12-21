<script>
  import AnalyticsCard from "../components/AnalyticsCard.svelte";
  import AnalyticsCardCollection from "../components/AnalyticsCardCollection.svelte";
  import StatisticsBlock from "../components/StatisticsBlock.svelte"
  import { getUser, getUserProfile } from "../firebase";

  let gamesPlayed, easyGamesPlayed, mediumGamesPlayed, hardGamesPlayed;
  let userName = getUser().email.substr(0, getUser().email.indexOf("@"))
  let avgWPM, avgEasyWPM, avgMediumWPM, avgHardWPM;
  let avgLPM, avgEasyLPM, avgMediumLPM, avgHardLPM;
  let passRate, easyPassRate, mediumPassRate, hardPassRate;
  let src = '../../fart.png';

  getUserProfile(getUser().uid).then( res => {
    easyGamesPlayed = res.easyGamesFailed + res.easyGamesWon;
    mediumGamesPlayed = res.mediumGamesFailed + res.mediumGamesWon;
    hardGamesPlayed = res.hardGamesFailed + res.hardGamesWon;
    gamesPlayed = easyGamesPlayed + mediumGamesPlayed + hardGamesPlayed;
    avgEasyWPM = res.easyWPM;
    avgEasyLPM = res.easyLPM;
    avgMediumWPM = res.mediumWPM;
    avgMediumLPM = res.mediumLPM;
    avgHardWPM = res.hardWPM;
    avgHardLPM = res.hardLPM;
    avgWPM = gamesPlayed != 0 ? (avgEasyWPM*easyGamesPlayed + avgMediumWPM*mediumGamesPlayed + avgHardWPM*hardGamesPlayed) / gamesPlayed : 0;
    avgLPM = gamesPlayed != 0 ? (avgEasyLPM *easyGamesPlayed + avgMediumLPM*mediumGamesPlayed + avgHardLPM*hardGamesPlayed) / gamesPlayed : 0;
    easyPassRate = easyGamesPlayed != 0 ? Math.round(res.easyGamesWon / easyGamesPlayed * 100) / 100 : 0;
    mediumPassRate = mediumGamesPlayed != 0 ?  Math.round(res.mediumGamesWon / mediumGamesPlayed * 100) / 100 : 0;
    hardPassRate = hardGamesPlayed != 0 ? Math.round(res.hardGamesWon / hardGamesPlayed * 100) / 100 : 0;
    passRate = gamesPlayed != 0 ? Math.round((res.easyGamesWon + res.mediumGamesWon + res.hardGamesWon ) / gamesPlayed * 100) / 100: 0;
  })

</script>

<style>
  img {
    border-radius: 50%;
    height: 50px;
    width: auto;
  }

</style>

<main>
  <h1>profile</h1>
  <AnalyticsCardCollection>
    <AnalyticsCard>
      <StatisticsBlock title={userName}> <img {src} alt="Avatar" /></StatisticsBlock>
    </AnalyticsCard>
    <AnalyticsCard>
      <StatisticsBlock title="total games" overall={gamesPlayed} easy={easyGamesPlayed} medium={mediumGamesPlayed} hard={hardGamesPlayed} units=""/>
    </AnalyticsCard>
  </AnalyticsCardCollection>
  <AnalyticsCardCollection>
    <AnalyticsCard>
      <StatisticsBlock title="avg words per minute " overall={avgWPM} easy={avgEasyWPM} medium={avgMediumWPM} hard={avgHardWPM} units=""/>
    </AnalyticsCard>
    <AnalyticsCard>
      <StatisticsBlock title="avg letters per minute" overall={avgLPM} easy={avgEasyLPM} medium={avgMediumLPM} hard={avgHardLPM} units=""/>
    </AnalyticsCard>
    <AnalyticsCard>
      <StatisticsBlock title="pass rate" overall={passRate} easy={easyPassRate} medium={mediumPassRate} hard={hardPassRate} units="%"/>
    </AnalyticsCard>
  </AnalyticsCardCollection>
  
</main>