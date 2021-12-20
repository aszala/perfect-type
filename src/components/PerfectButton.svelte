<script>
  export let text;
  export let onClickFn;
</script>

<button on:click={onClickFn}>
  {text}
</button>