<script>
  import { promptIndex, wordsToDisplay } from '../stores.js';
  import GameOverDisplay from "../components/GameOverDisplay.svelte"
  import GameModes from "../components/GameModes.svelte"
  import randomWords from 'random-words';

  // svelte-ignore unused-export-let
  export let currentRoute;
  // svelte-ignore unused-export-let
  export let params;

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
    let promptLength = 5;
    wordsToDisplay.subscribe(value => {
      promptLength = value;
    })
    return randomWords(promptLength).join(" ");
  }

  function gameListener() {
    const handleClick = (event) => {
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
          // TODO: write "wpm" to database with respective "mode"

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
    letterToChange.classList.add("typed-letter");

    //if (event.key == " ") fade(prevLetter.parentElement); // change this to a css "fade" class and append it to the original class
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
    mode = mode;
  }

  // - GAME MODE VARIABLES - 
  let mode = "easy";
  const gameModeWordAmount = {'easy': 5, 'medium': 20, 'hard': 50 };
  function changeMode(e) {
    let currentModeDiv = document.getElementById(mode);
    currentModeDiv.className = currentModeDiv.className.replace(' active-mode', '');
    let newModeDiv = document.getElementById(e.target.innerHTML);
    newModeDiv.className += ' active-mode';
    mode = e.target.innerHTML
    wordsToDisplay.update(() => gameModeWordAmount[mode]);
    for (let i = 0; i < promptIndexValue; i++) {
      let letterToChange = document.getElementById(i);
      letterToChange.classList.remove("typed-letter");
    }
    tryAgain();
  }
  

</script>

<style>

  :global(.typed-letter) {
    color: var(--main-accent-color);
    /* border-bottom: solid var(--main-accent-color) 1px; */
  }

  .game-environment {
    position: absolute;
    margin: auto;
    top: 0;
    right: 100px;
    bottom: 0;
    left: 100px;
    width: 80%;
    height: 190px;
    overflow: hidden;
    font-size: 10mm;
    overflow: hidden;
    line-height: 50px;
    transition: color 200ms;
    scroll-behavior: smooth;
  }

  #occlusion {
    margin: auto;
    top: 0;
    right: 100px;
    bottom: 0;
    left: 100px;
    width: 80%;
    height: 190px;
    background: linear-gradient(transparent, var(--main-bg-color));
    position: absolute;
    
  }

  .game-word {
    display:inline-block;
    color: #272727;
  }
 
  .game-letter {
    display:inline-block;
    padding: 1px;
  }

  /* this is to help with autoscrolling */
  .invisible-letter {
    color: rgb(0, 0, 0, 0);
  }
</style>


<main>
  {#if !gameOver} 
  <GameModes mode={mode} changeMode={changeMode}/>
  <!-- game components : start -->
    <div class="game-environment noselect" id="game-env" use:gameListener>
      {#each randomPromptWordSep as word, i}
        <div class="game-word" >
          {#if i != 0}
            <div class="game-letter" id={`${promptWordLengths[i-1] - 1}`}>&nbsp;</div>
          {/if}
          {#each word as letter, j}
            <div class="game-letter" id={ (i-1) < 0 ? `${j}` : `${promptWordLengths[i-1] + j}`}>{letter}</div>
          {/each}
        </div>
      {/each}
      {#each [...Array(10).keys()] as num, i}
        <div>
          <div class="game-letter invisible-letter">if you see this sentence, you're awesome</div>
        </div>
      {/each}
    </div>
    <div id="occlusion"></div>
    <!-- game components : end -->
  {:else}
    <GameOverDisplay winGame={winGame} wpm={wpm} tryAgain={tryAgain}/>
  {/if}

</main>