<script>
  export let mode;
  export let changeMode;

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
  <div class={`mode-div ${mode === 'easy' ? 'active-mode' : "inactive-mode"}`} id="easy" on:click={changeMode}>easy</div>
  <div class={`mode-div ${mode === 'medium' ? 'active-mode' : "inactive-mode"}`} id="medium" on:click={changeMode}>medium</div>
  <div class={`mode-div ${mode === 'hard' ? 'active-mode' : "inactive-mode"}`} id="hard" on:click={changeMode}>hard</div>
</div>