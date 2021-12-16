<script>
import { signUserIn } from "../firebase";
import { redirectHome } from "../utils";
import Input from "../components/Input.svelte";

// svelte-ignore unused-export-let
export let currentRoute;
// svelte-ignore unused-export-let
export let params;

let success = false;

let email, password;

function login(e) {
    if (e) {
        e.preventDefault();
    }

    signUserIn(email, password).then((user) => {
        if (user != null) {
            success = true;
            redirectHome(1000);
        }
    });
}

</script>

<main>
    <h1>log in</h1>
    {#if success}
        <p>logged in! redirecting to main...</p>
    {:else}
        <form on:submit={login}>
            <br>
            <br>  
            <div id="form-container">
                <Input text="email" id="email" type="email" autocomplete="email" bind:value={email} />
                <Input text="password" id="password" type="password" autocomplete="current-password" bind:value={password} />
            </div>
            <br>
            <br>
            <button>log in</button>     
        </form>
    {/if}
</main>