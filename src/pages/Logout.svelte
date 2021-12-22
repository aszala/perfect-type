<script>
    import { logoutUser } from "../firebase";
    import { fade } from "svelte/transition"

    logoutUser();
</script>

<main>
    <h1 in:fade>logging you out</h1>
</main>