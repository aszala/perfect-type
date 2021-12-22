<script>
import { signUserIn, sendVerifcationEmailAsync, getUser } from "../firebase";
import { redirectHome } from "../utils";
import PerfectButton from "../components/PerfectButton.svelte";
import Input from "../components/Input.svelte";

// svelte-ignore unused-export-let
export let currentRoute;
// svelte-ignore unused-export-let
export let params;

let success = false;
let email, password;
let error_message = "";

function login(e) {
    if (e) {
        e.preventDefault();
    }

    signUserIn(email, password).then((user) => {
        if (user.success) {
            error_message = "";
            success = true;
            redirectHome(1000);
        } else {
            error_message = user.message;
        }
    });
}

// Keep this function, it says unused, but it is
function resendVerificationEmail() {
    sendVerifcationEmailAsync(getUser());
}

</script>

<style>
    #error-indicator {
        color: red;
        font-size: 1.2em;
    }
</style>

<main>
    <h1>login</h1>
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
            <PerfectButton text="login"/>
        </form>
        <p id="error-indicator">{@html error_message}</p>
    {/if}
</main>