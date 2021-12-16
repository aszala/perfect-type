<script>
import { createUser } from "../firebase";
import { validateEmail, redirectHome } from "../utils";
import PerfectButton from "../components/PerfectButton.svelte";
import Input from "../components/Input.svelte";

// svelte-ignore unused-export-let
export let currentRoute;
// svelte-ignore unused-export-let
export let params;

let success = false;
let email, password, confirmPassword;

function signup(e) {
    if (e) {
        e.preventDefault();
    }

    if (!validateEmail(email)) {
      alert("Invalid email!")
      return
    }

    if (confirmPassword !== password) {
      alert("Passwords do not match!")
      return
    } 

    if (password.length < 8) {
      alert("Passwords too short!") // make better
      return
    }

    createUser(email, password).then((user) => {
        if (user != null) {
            success = true;
            redirectHome(1000);
        }
    });
}

</script>

<main>
    <h1>sign up</h1>
    {#if success}
        <p>signed up and logged in! redirecting to main...</p>
    {:else}
        <form on:submit={signup}>
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
    {/if}
</main>