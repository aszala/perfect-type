<script>
import { Router } from 'svelte-router-spa'
import { routes } from './routes'
import Header from "./components/Header.svelte"
import { initFirebase } from "./firebase"

initFirebase();

function shouldShowCreator() {
	console.log("adkalw");
	return !window.location.href.includes("creators");
}

</script>

<svelte:head>
	<title>Perfect Type</title>
	<meta charset="utf-8">
</svelte:head>

<Header />
<Router {routes} />
<a id="see-devs" href="/creators">see the site devs</a>

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
		width: 100%;
		height: 100%;
	}

	:global(main) {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	:global(#form-container) {
		display: flex;
		justify-content: space-between;
		width: 100%;
		max-width: 650px;
		margin: auto;
	}

	:global(a) {
		color: var(--font-color) !important;
		text-align: center;
		transition: color 200ms;
		display: block;
		text-decoration: underline;
	}

	:global(a:hover) {
		color: var(--main-accent-color) !important;
	}
	
	#see-devs {
		position: absolute;
		bottom: 50px;
		left: 50%;
		transform: translateX(-50%);
		font-size: 1.3em;
	}
</style>