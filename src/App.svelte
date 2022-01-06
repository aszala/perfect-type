<script>
import { Router } from 'svelte-router-spa'
import { routes } from './routes'
import Header from "./components/Header.svelte"
import { initFirebase } from "./firebase"
import DeviceDetector from "svelte-device-detector";

initFirebase();

</script>

<svelte:head>
	<meta charset="utf-8">

	<!-- if you change this change it also in index.html -->
	<title>perfect type</title>
	<meta name="description" content="perfect type is a typing game that requires you to type perfectly. are you up for the challenge?">
	<meta name="keywords" content="typing, typing game, keyboard, words per minute, wpm, typing speed, typer, online game, game, play, internet games, online games, internet game, typing games, type speed, typing speed, games to play on the internet, typing games to play, typing games to play online">
	<meta name="author" content="perfect type devs">

	<link rel="canonical" href="https://perfect-type.com/" />
	<meta name="robots" content="index, follow">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="google" content="nositelinkssearchbox" />
</svelte:head>

<DeviceDetector showInDevice="desktop">
	<Header />
	<Router {routes} />
	<a id="see-devs" href="/creators">see the site devs</a>
</DeviceDetector>

<DeviceDetector showInDevice="mobile">
	<div id="desktop-notifier">
		<a href="/">perfect type</a>
		<div>mobile is not supported yet :(
			<br><br>
			please use a laptop or desktop device
			<br><br>
			mobile support is coming soon.
		</div>
	</div>
</DeviceDetector>

<style>
	#desktop-notifier {
		width: 100%;
		height: 100%;
	}

	#desktop-notifier>a {
		font-size: 3em;
  		font-weight: bold;
		text-decoration: none;
	}

	#desktop-notifier>div {
		font-size: 1.5em;
		width: 100%;
		height: 70vh;
		margin: 0px;
		display: table-cell;
		vertical-align: middle;
		padding: 10px;
		text-align: center;
	}

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
		bottom: 10px;
		left: 50%;
		color: rgb(0,0,0,0) !important;
		transform: translateX(-50%);
		font-size: .2em;
	}

	#see-devs:hover {
		color: var(--font-color) !important;
	}
</style>