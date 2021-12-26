<script>
import { signUserIn, sendVerifcationEmailAsync } from "../firebase";
import { redirectHome } from "../utils";
import PerfectButton from "../components/PerfectButton.svelte";
import Input from "../components/Input.svelte";
import { fade } from "svelte/transition"

// svelte-ignore unused-export-let
export let currentRoute;
// svelte-ignore unused-export-let
export let params;

let success = false;
let email, password;
let error_message = "";

let resendError = false;
let userData;

function login(e) {
    if (e) {
        e.preventDefault();
    }

    signUserIn(email, password).then((user) => {

        resendError = false;
        if (user.success) {
            error_message = "";
            success = true;
            redirectHome(1000);
        } else {
            userData = user.data;

            if (user.data) {
                error_message = "";
                resendError = true;
            } else {
                error_message = user.message;
            }
        }
    });
}

function resend() {
    sendVerifcationEmailAsync(userData);
    resendError = false;
}

</script>

<style>
    #error-indicator {
        color: red;
        font-size: 1.2em;
    }

    #error-indicator>span {
        text-decoration: underline;
        cursor: pointer;
    }
</style>

<main>
    <h1>login</h1>
    {#if success}
        <p in:fade>logged in! redirecting to main...</p>
    {:else}
        <form in:fade on:submit={login}>
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
        {#if resendError}
            <p in:fade id="error-indicator">
                please verify your email! click <span on:click={resend}>here</span> to send another link.
            </p>
        {:else}
            <p in:fade id="error-indicator">{@html error_message}</p>
        {/if}
    {/if}
</main>