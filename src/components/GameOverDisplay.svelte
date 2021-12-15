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
    height: 300px;
    overflow: scroll;
    font-size: 10mm;
    overflow: hidden;
  }

  .game-over-div {
    /* todo  */
		padding: 20px;
		font-size: 20mm;
  }

</style>

<div class="game-over-environment">
	<div class="game-over-div">{winGame ? `you typed ${wpm} words per minute` : "you lost :("} </div>
	<PerfectButton onClickFn={tryAgain} text={winGame ? "play again" : "try again"}/>
</div>