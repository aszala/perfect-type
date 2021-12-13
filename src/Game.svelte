<script>
  import { gameListener } from "../scripts/gameListener"

  // Choose Random Prompts
  Array.prototype.random = function() {
    return this[Math.floor((Math.random()*this.length))];
  }
  let prompts = [
    "I like to eat waffles and I like to eat french fries and I like to eat potatoes."
  ];
  let randomPrompt = prompts.random().split(" ");

  



</script>

<style>
  .game-environment {
    text-align: center;

  }
  .game-word {
    display:inline-block;
    padding: 3px;
  }

  .game-letter {
    display:inline-block
  }

</style>

<main>
  <div class="game-environment" use:gameListener>
    {#each randomPrompt as word}
      <div class="game-word">
        {#each word as letter}
          <div class="game-letter">
            {letter}
          </div>
        {/each}
      </div>
    {/each}
  </div>
</main>