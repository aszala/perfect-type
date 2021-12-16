<script>
import { Router } from 'svelte-router-spa'
import { routes } from './routes'

</script>

<svelte:head>
	<title>Perfect Type</title>
	<meta charset="utf-8">
</svelte:head>

<Router {routes} />

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

	:global(#form-container) {
		display: flex;
		justify-content: space-between;
		width: 100%;
		max-width: 650px;
		margin: auto;
	}

	:global(.input-container) {
		position: relative;
	}

	:global(input) {
		width: 300px;
		background: transparent;
		border: none;
		border-bottom: solid black 2px;
		outline: none;
		font-size: 1.5em;
		text-align: center;
	}

	:global(label) {
		color: gray;
		font-size: 1.5em;
		text-align: center;
		position: absolute;
		top: 10px;
		width: 100%;
		text-align: center;
		transition: font-size 100ms, top 100ms;
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