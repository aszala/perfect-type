<script>
    import { logoutUser } from "../firebase";
    import { fade } from "svelte/transition"

    logoutUser();

    // svelte-ignore unused-export-let
    export let currentRoute;
    // svelte-ignore unused-export-let
export let params;
</script>

<main>
    <h1 in:fade>logging you out</h1>
</main>