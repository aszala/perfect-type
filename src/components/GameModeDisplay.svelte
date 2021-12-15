<script>
  import { wordsToDisplay, promptIndex }  from "../stores"
import { unTypedLetterColor } from "../utils";
  export let refreshGame;
  function updateGameWords(length) {
    let promptIndexValue;
    promptIndex.subscribe(value => {
      promptIndexValue = value;
    });

    wordsToDisplay.update(() => length);
    for (let i = 0; i < promptIndexValue; i++) {
      let letterToChange = document.getElementById(i);
      letterToChange.style.color = unTypedLetterColor
    }
    refreshGame();
    
  }

</script>

<style>
  .game-mode-environment {
    display: flex;                  /* establish flex container */
    flex-direction: row;            /* default value; can be omitted */
    flex-wrap: nowrap;              /* default value; can be omitted */
    justify-content: center; /* switched from default (flex-start, see below) */
  }
  .game-type-btn {
    width: 30px;
    height: 20px;
    border: 1px solid black;

  }
</style>

<main>
  <div class="game-mode-environment">
    <div class="game-type-btn" on:click={(e) => updateGameWords(5)}>5</div>
    <div class="game-type-btn" on:click={(e) => updateGameWords(10)}>10</div>
    <div class="game-type-btn" on:click={(e) => updateGameWords(50)}>50</div>
  </div>

</main>