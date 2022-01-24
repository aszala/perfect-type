<script>
  export let mode;
  export let changeMode;
  import randomWords from 'random-words'


  let botScrambler = randomWords(4);
</script>

<style>
  .mode-container {
    width:100%;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    font-size: 1.3em;
    position: relative;
    top: 50px;
  }
  .mode-div {
    float:left;
    width:100px;
    height: 30px;
    padding: 2px;
    cursor: pointer;
  }

  .inactive-mode:hover {
    border-bottom: .25mm solid rgba(68, 68, 68, 0.5);
  }

  .active-mode {
    border-bottom: .5mm solid var(--font-color);
  }

</style>

<div class="mode-container">
  <div class={`mode-div ${mode === 'easy' ? 'active-mode' : "inactive-mode"}`} id={botScrambler[0]} on:click={(e) => { changeMode(e, botScrambler[0]); }}>easy</div>
  <div class={`mode-div ${mode === 'medium' ? 'active-mode' : "inactive-mode"}`} id={botScrambler[1]} on:click={(e) => { changeMode(e, botScrambler[1]); }}>medium</div>
  <div class={`mode-div ${mode === 'hard' ? 'active-mode' : "inactive-mode"}`} id={botScrambler[2]} on:click={(e) => { changeMode(e, botScrambler[2]); }}>hard</div>
  <div class={`mode-div ${mode === 'impossible' ? 'active-mode' : "inactive-mode"}`} id={botScrambler[3]} on:click={(e) => { changeMode(e, botScrambler[3]); }}>impossible</div>
</div>