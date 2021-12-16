<script>
import { createUser } from "../firebase";
import { validateEmail, redirectHome } from "../utils";
import Input from "../components/Input.svelte";

// svelte-ignore unused-export-let
export let currentRoute;
// svelte-ignore unused-export-let
export let params;

let success = false;
let email, password, confirmPassword;

function signup() {
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
        <p>
            signed up and logged in! redirecting to main...
        </p>
    {:else}
        <form>
            <Input text="email" id="email" type="email" autocomplete="email" handler={signup} bind:value={email} />
            <br>
            <br>  
            <div id="form-container">
                <Input text="password" id="password" type="password" autocomplete="new-password" handler={signup} bind:value={password} />
                <Input text="confirm password" id="con-password" type="password" autocomplete="new-password" handler={signup} bind:value={confirmPassword} />
            </div>
            <br>
            <br>
            <button on:click={signup}>sign up</button>     
        </form>
        {/if}
</main>