<script>
	export let text;
	export let onClickFn = () => {};
</script>

<style>
	:global(button) {
		background-color: transparent;
		border: 2px solid  var(--main-accent-color);
		display: inline-block;
		cursor: pointer;
		color: var(--font-color);
		font-size: 1.2em;
		padding: 16px 32px;
		text-decoration: none;
		transition: color 200ms, background-color 200ms;
	}

	:global(button:hover) {
		background-color: var(--main-accent-color);
		color: var(--main-bg-color);
	}
</style>

<button on:click={onClickFn}>
  {text}
</button>