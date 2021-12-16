<script>
import { signUserIn } from "../firebase";
import { redirectHome } from "../utils";

// svelte-ignore unused-export-let
export let currentRoute;
// svelte-ignore unused-export-let
export let params;

function login() {
    signUserIn(thisUser, thisPass).then((user) => {
        if (user != null) {
            successLog = true;
            redirectHome(1000);
        }
    });
}

</script>