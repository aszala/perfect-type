<script>
import { createUser } from "../firebase";
import { validateEmail, redirectHome, inputType } from "../utils";

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
            <div class="input-container">
                <label for="email">email</label>
                <input id="email" type="email" name="email" autocomplete="email" bind:value={email} on:input="{(e) => inputType(e, signup)}"/>
            </div>
            <br>
            <br>  
            <div id="form-container">
                <div class="input-container">
                    <label for="password">password</label>
                    <input id="password" type="password" autocomplete="new-password" name="password" bind:value={password} on:input="{(e) => inputType(e, signup)}"/>
                </div>
                <div class="input-container">
                    <label for="con-password">confirm password</label>
                    <input id="con-password" type="password" autocomplete="new-password" name="con-password" bind:value={confirmPassword} on:input="{(e) => inputType(e, signup)}"/>
                </div>
            </div>
            <br>
            <br>
            <button on:click={signup}>sign up</button>     
        </form>
        {/if}
</main>