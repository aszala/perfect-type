<script>
	import Play from "./pages/Play.svelte";
</script>

<Play />

<style>
	:global(:root) {
		--main-bg-color: #F4F1E2;
	}

	:global(body) {
		font-family: 'Times New Roman', Times, serif;
		padding: 0px;
		background-color: var(--main-bg-color);
		overflow: hidden;
	}

	:global(main) {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		:global(main) {
			max-width: none;
		}
	}

	:global(button) {
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
	:global(button:hover) {
		background-color: #acacac;
		color: var(--main-bg-color);
	}
</style>