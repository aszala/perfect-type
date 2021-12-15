<script>
  import { promptIndex, wordsToDisplay } from '../stores.js';
  import GameOverDisplay from "../components/GameOverDisplay.svelte"
  import GameModeDisplay from "../components/GameModeDisplay.svelte"
  import randomWords from 'random-words';
import { typedLetterColor, unTypedLetterColor} from '../utils.js';

  //  - PROMPT PROCESSING -
  Array.prototype.random = function() {
    return this[Math.floor((Math.random()*this.length))];
  }

  let randomPrompt = generateRandomString();
  let randomPromptWordSep = randomPrompt.split(" ");
  let promptWordLengths = [] // Used to update HTML divs with the correct id (index is stored as the id so we can get value by id)
  for (let i=0; i < randomPromptWordSep.length; i++) promptWordLengths.push((i-1 < 0) ? randomPromptWordSep[i].length + 1 : randomPromptWordSep[i].length + promptWordLengths[i-1] + 1);
  let promptIndexValue;
  promptIndex.subscribe(value => {
    promptIndexValue = value;
  });

  function generateRandomString() {
    let promptLength = 10;
    wordsToDisplay.subscribe(value => {
      promptLength = value;
    })
    return randomWords(promptLength).join(" ");
  }

  function gameListener() {
    const handleClick = (event) => {
      console.log(randomPrompt  )
      event.preventDefault();
      if (!gameOver) {
        
        // initialize wpm calculation
        if (startTime == 0) startTime = new Date();

        // losing game
        if (randomPrompt.charAt(promptIndexValue) !== event.key) {
          gameOver = true;
        } else {
          // updates letter if typed ccorrectly
          updateLetterColor(event)
          promptIndex.update(n => n + 1);
        }

        // winning game - all letters are typed correctly
        if (promptIndexValue == randomPrompt.length) {
          let endTime = new Date();
          let totalMinutes = (endTime - startTime) / 60000; 
          wpm = Math.round(randomPromptWordSep.length / totalMinutes * 1000) / 1000;
          gameOver = true;
          winGame = true;
          // TODO: write "wpm" to database

        }
      }
    };
    document.addEventListener("keypress", handleClick);
    return {
      destroy() {
        document.removeEventListener("keypress", handleClick);
      }
    };
  }

  function updateLetterColor(event) {
    let letterToChange = document.getElementById(promptIndexValue);
    letterToChange.style.color = typedLetterColor;
    if (event.key == " ") fade(prevLetter.parentElement); // change this to a css "fade" class and append it to the original class
    if (letterToChange.offsetLeft < prevXLocation) {
      letterToChange.parentElement.scrollIntoView(true);
    }

    
    prevLetter = letterToChange;
    prevXLocation = letterToChange.offsetLeft;
    // let gameEnvironmentDOM = document.getElementById("game-env");
  }
  
  // fades out an html element
  function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= (op * 0.2 + .05);
    }, 100);
}

  // - GAME VARIABLES  - 
  let gameOver = false;
  let winGame = false;
  let startTime = 0;
  let prevXLocation = 0;
  let prevLetter = 0;
  let wpm = 0;

  function tryAgain() {
    startTime = 0;
    prevXLocation = 0;
    prevLetter = 0;
    promptIndex.update(() => 0);
    gameOver = false;
    winGame = false;
    randomPrompt = generateRandomString();
    randomPromptWordSep = randomPrompt.split(" ");
    promptWordLengths = [] // Used to update HTML divs with the correct id (index is stored as the id so we can get value by id)
    for (let i=0; i < randomPromptWordSep.length; i++) promptWordLengths.push((i-1 < 0) ? randomPromptWordSep[i].length + 1 : randomPromptWordSep[i].length + promptWordLengths[i-1] + 1);
  }

</script>

<style>


  .game-environment {
    position: absolute;
    margin: auto;
    top: 0;
    right: 100px;
    bottom: 0;
    left: 100px;
    width: auto;
    height: 190px;
    overflow: scroll;
    font-size: 10mm;
    overflow: hidden;

  }
  .game-word {
    display:inline-block;
  }

  .game-letter {
    display:inline-block;
    padding: 1px;
  }
</style>


<main>
  {#if !gameOver} 
    <GameModeDisplay refreshGame={tryAgain}/>
    <div class="game-environment" id="game-env" use:gameListener>
      {#each randomPromptWordSep as word, i}
        <div class="game-word" style={`color: ${unTypedLetterColor}`}>
          {#if i != 0}
            <div class="game-letter" id={`${promptWordLengths[i-1] - 1}`}>
              {" "}
            </div>
          {/if}
          {#each word as letter, j}
            <div class="game-letter" id={ (i-1) < 0 ? `${j}` : `${promptWordLengths[i-1] + j}`}>
              {letter}
            </div>
          {/each}
        </div>
      {/each}
    </div>
  {:else}
    <GameOverDisplay winGame={winGame} wpm={wpm} tryAgain={tryAgain}/>
  {/if}

</main>