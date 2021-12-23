<script>
import { Router } from 'svelte-router-spa'
import { routes } from './routes'
import Header from "./components/Header.svelte"
import { initFirebase } from "./firebase"

initFirebase();

</script>

<svelte:head>
	<title>Perfect Type</title>
	<meta charset="utf-8">
</svelte:head>

<Header />
<Router {routes} />

<style>
	:global(:root) {
		--main-bg-color: #F4F1E2;
		--main-accent-color: rgb(0, 0, 0, .85);
		--game-font-color: rgb(100, 100, 100, .85);
		--font-color: rgb(51, 51, 51, .85);

	}

	:global(body) {
		font-family: 'Times New Roman', Times, serif;
		padding: 0px;
		background-color: var(--main-bg-color);
		color: var(--font-color);
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
		border-bottom: solid var(--main-accent-color) 2px;
		outline: none;
		font-size: 1.5em;
		text-align: center;
	}

	:global(label) {
		font-size: 1.5em;
		text-align: center;
		position: absolute;
		top: 10px;
		width: 100%;
		text-align: center;
		transition: font-size 100ms, top 100ms;
	}

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

	:global(a) {
		color: var(--font-color) !important;
		text-align: center;
		font-size: 1.3em;
		transition: color 200ms;
		display: block;
		text-decoration: underline;
	}

	:global(a:hover) {
		color: var(--main-accent-color) !important;
	}

	@media (min-width: 640px) {
		:global(main) {
			max-width: none;
		}
	}
</style>