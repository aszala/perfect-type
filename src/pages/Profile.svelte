<script>
  import AnalyticsCard from "../components/AnalyticsCard.svelte";
  import AnalyticsCardCollection from "../components/AnalyticsCardCollection.svelte";

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
    height: 100px;
    width: auto;
  }

</style>

<main>
  <h1>profile</h1>
  <AnalyticsCardCollection>
    <AnalyticsCard>
      <h2>user information</h2>
      <img {src} alt="Avatar" />
      <br>
      {`username: ${userName}`}
    </AnalyticsCard>
    <AnalyticsCard>

      <h2>total games</h2>
      {"overall: " + gamesPlayed}
      <br>
      {"easy: " + easyGamesPlayed}
      {" - medium: " + mediumGamesPlayed}
      {" - hard: " + hardGamesPlayed}

      <h2>avg words per minute</h2>
      {"overall: " + avgWPM}
      <br>
      {"easy: " + avgEasyWPM}
      {" - medium: " + avgMediumWPM}
      {" - hard: " + avgHardWPM}

      <h2>avg letters per minute</h2>
      {"overall: " + avgLPM}
      <br>
      {"easy: " + avgEasyLPM}
      {" - medium: " + avgMediumLPM}
      {" - hard: " + avgHardLPM}
    </AnalyticsCard>
    <AnalyticsCard>
      <h2>success rate</h2>
      use pie charts here
    </AnalyticsCard>
  </AnalyticsCardCollection>
  
</main>