<script>
  export let text;
  export let onClickFn;
</script>

<style>
  button {
		background-color: transparent;
		border: 2px solid #472100;
		display: inline-block;
		cursor: pointer;
		color: gray;
		font-size: 1.2em;
		padding: 16px 32px;
		text-decoration: none;
		transition: color 200ms, background-color 200ms;
	}
	button:hover {
		background-color: #acacac;
		color: var(--main-bg-color);
	}

</style>

<button on:click={onClickFn}>
  {text}
</button>