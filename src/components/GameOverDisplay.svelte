<script>
	import PerfectButton from "./PerfectButton.svelte"
  export let winGame;
  export let wpm;
	export let tryAgain;
</script>

<style>
	.game-over-environment {
    position: absolute;
    margin: auto;
    top: 0;
    right: 100px;
    bottom: 0;
    left: 100px;
    width: auto;
    height: 500px;
    overflow: scroll;
    font-size: 2em;
    overflow: hidden;
  }

  .game-over-div {
		padding: 20px;
  }

</style>

<div class="game-over-environment">
	<div class="game-over-div">{winGame ? `you won :) and typed ${wpm} words per minute` : "you lost :("}</div>
  <br><br>
	<PerfectButton onClickFn={tryAgain} text={winGame ? "play again" : "try again"}/>
</div>