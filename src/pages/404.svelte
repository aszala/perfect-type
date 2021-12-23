<script>
import PerfectButton from "../components/PerfectButton.svelte";
import { redirectHome } from "../utils";

// svelte-ignore unused-export-let
export let currentRoute;
// svelte-ignore unused-export-let
export let params;
</script>

<main>

    <h2>oops, looks like that page doesn't exist</h2>
    <PerfectButton text="return home" onClickFn={redirectHome} />
</main>