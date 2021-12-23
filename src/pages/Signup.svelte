<script>
import { createUser } from "../firebase";
import { validateEmail } from "../utils";
import PerfectButton from "../components/PerfectButton.svelte";
import Input from "../components/Input.svelte";
import { fade } from "svelte/transition"

// svelte-ignore unused-export-let
export let currentRoute;
// svelte-ignore unused-export-let
export let params;

let success = false;
let email, password, confirmPassword;
let error_message = "";

function signup(e) {
    if (e) {
        e.preventDefault();
    }

    if (!validateEmail(email)) {
        error_message = "Invalid email!";
        return;
    }

    if (confirmPassword !== password) {
        error_message = "Passwords do not match!";
        return;
    } 

    if (password.length < 8) {
        error_message = "Passwords too short!";
        return;
    }

    createUser(email, password).then((user) => {
        if (user.success) {
            success = true;
            error_message = "";
        } else {
            error_message = user.message;
        }
    });
}

</script>

<style>
    #error-indicator {
        color: red;
        font-size: 1.2em;
    }
</style>

<main>
    <h1>sign up</h1>
    {#if success}
        <h1 in:fade>signed up! now just verify your email.</h1>
        <h3 in:fade>once you've done that, login <a href="/login">here</a>.</h3>
    {:else}
        <form in:fade on:submit={signup}>
            <Input text="email" id="email" type="email" autocomplete="email" bind:value={email} />
            <br>
            <br>  
            <div id="form-container">
                <Input text="password" id="password" type="password" autocomplete="new-password" bind:value={password} />
                <Input text="confirm password" id="con-password" type="password" autocomplete="new-password" bind:value={confirmPassword} />
            </div>
            <br>
            <br>
            <PerfectButton text="signup" />     
        </form>
        <p id="error-indicator">{@html error_message}</p>
    {/if}
</main>