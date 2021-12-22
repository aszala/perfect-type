<script>
    import { logoutUser } from "../firebase";
    import { fade } from "svelte/transition"

    logoutUser();
</script>

<main>
    <h1 in:fade>Logging you out</h1>
</main>