<script>
import PerfectButton from "../components/PerfectButton.svelte";
import { redirectHome } from "../utils";

</script>

<main>

    <h2>oops, looks like that page doesn't exist</h2>
    <PerfectButton text="return home" onClickFn=redirectHome />
</main>