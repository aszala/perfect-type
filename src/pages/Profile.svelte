<script>
  import AnalyticsCard from "../components/AnalyticsCard.svelte";
  import AnalyticsCardCollection from "../components/AnalyticsCardCollection.svelte";
  import StatisticsBlock from "../components/StatisticsBlock.svelte"

  // get from api
  let gamesPlayed = 10; 
  let easyGamesPlayed = 3;
  let mediumGamesPlayed = 4;
  let hardGamesPlayed = 5;
  
  let userName = "davidlurocks69"; 

  let avgWPM = 69;
  let avgEasyWPM = 60;
  let avgMediumWPM = 50;
  let avgHardWPM = 40;

  let avgLPM = 69;
  let avgEasyLPM = 60;
  let avgMediumLPM = 50;
  let avgHardLPM = 40;
  

  let passRate = 30;
  let easyPassRate = 50;
  let mediumPassRate = 40;
  let hardPassRate = 30;

  let src = '../../fart.png';

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