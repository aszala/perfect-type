<script>
  import { promptIndex } from '../stores.js';


  //  - PROMPT PROCESSING -
  Array.prototype.random = function() {
    return this[Math.floor((Math.random()*this.length))];
  }
  let prompts = [
    "oij oij oij oij oij oij oij oij oij.",
    "I like to eat waffles and I like to eat french fries and I like to eat potatoes."
  ];
  let randomPrompt = prompts.random();
  let randomPromptWordSep = randomPrompt.split(" ");
  let promptWordLengths = [] // Used to update HTML divs with the correct id (index is stored as the id so we can get value by id)
  for (let i=0; i < randomPromptWordSep.length; i++) promptWordLengths.push((i-1 < 0) ? randomPromptWordSep[i].length + 1 : randomPromptWordSep[i].length + promptWordLengths[i-1] + 1);
  let promptIndexValue;
  promptIndex.subscribe(value => {
    promptIndexValue = value;
  });

  function gameListener() {
    const handleClick = (event) => {
      if (startTime == 0) startTime = new Date();
      if (randomPrompt.charAt(promptIndexValue) !== event.key) {
        gameOver = true;
      } else {
        updateLetterColor()
        promptIndex.update(n => n + 1);
      }
      if (promptIndexValue == randomPrompt.length) {
        let endTime = new Date();
        let totalMinutes = (endTime - startTime) / 60000; 
        wpm = Math.round(randomPrompt.length / totalMinutes * 100) / 100;
        gameOver = true;
        winGame = true;
        // TODO: write to database
        // wpm
      }
    };
    document.addEventListener("keypress", handleClick);
    return {
      destroy() {
        document.removeEventListener("keypress", handleClick);
      }
    };
  }

  function updateLetterColor() {
    let letterToChange = document.getElementById(promptIndexValue);
    letterToChange.style.color = "rgba(100, 100, 100, 0.5)";
  }

  // - GAME VARIABLES  - 
  let gameOver = false;
  let winGame = false;
  let startTime = 0;
  let wpm = 0;

  function tryAgain() {
    promptIndex.update(n => 0);
    gameOver = false;
    winGame = false;
    randomPrompt = prompts.random();
    randomPromptWordSep = randomPrompt.split(" ");
    promptWordLengths = [] // Used to update HTML divs with the correct id (index is stored as the id so we can get value by id)
    for (let i=0; i < randomPromptWordSep.length; i++) promptWordLengths.push((i-1 < 0) ? randomPromptWordSep[i].length + 1 : randomPromptWordSep[i].length + promptWordLengths[i-1] + 1);
  }

</script>

<style>
  .game-environment {
    text-align: center;

  }
  .game-word {
    display:inline-block;
  }

  .game-letter {
    display:inline-block;
    padding: 2px;
  }

  .game-over-environment {
    /* todo */
  }

  .game-over-div {
    /* todo  */
  }

</style>


<main>
  {#if !gameOver} 
    <div class="game-environment" use:gameListener>
      {#each randomPromptWordSep as word, i}
        <div class="game-word">
          {#each word as letter, j}
            <div class="game-letter" id={ (i-1) < 0 ? `${j}` : `${promptWordLengths[i-1] + j}`}>
              {letter}
            </div>
          {/each}
          <div class="game-letter" id={`${promptWordLengths[i]-1}`}>
            {" "}
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <div class="game-over-environment">
      <div class="game-over-div">{winGame ? `you typed ${wpm} words per minute` : "you lost :("} </div>
      <button on:click={tryAgain}>{winGame ? "play again" : "try again"} </button>
    </div>
  {/if}


</main>