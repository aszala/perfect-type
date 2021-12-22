<script>
import { isLoggedIn } from "../firebase";

let loggedIn = isLoggedIn();

</script>

<style>
.header {
  background-color: rgb(0, 0, 0, 0);
  overflow: hidden;
}

a {
  float: right;
  color: var(--font-color);
  text-align: center;
  padding: 15px;
  font-size: 1.3em;
  transition: color 200ms;
}

a:hover {
  color: var(--main-accent-color);
  text-decoration: none;
}

</style>

<main>
  <div class="header">
    {#if loggedIn}
      <a href="/logout">logout</a>
      <a href="/profile">profile</a>
    {:else}
      <a href="/signup">signup</a>
      <a href="/login">login</a>
    {/if}
    <a href="/leaderboard">leaderboard</a>
    <a href="/">play</a>
  </div>

</main>