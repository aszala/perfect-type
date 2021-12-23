<script>
import { isLoggedIn } from "../firebase";

let loggedIn = isLoggedIn();

</script>

<style>
.header {
  background-color: rgb(0, 0, 0, 0);
  overflow: hidden;
  padding: 20px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
}

#links {
  display: flex;
  align-items: center;
  justify-content: right;
}

a {
  text-decoration: none;
  padding-left: 15px;
  font-weight: 600;
	font-size: 1.3em;
}

#title {
  font-size: 3em;
  font-weight: bold;
}

</style>

<div class="header">
  <a id="title" href="/">perfect type</a>
  <div id="links">
    <a href="/">play</a>
    <a href="/leaderboard">leaderboard</a>
    {#if loggedIn}
      <a href="/profile">profile</a>
      <a href="/logout">logout</a>
    {:else}
      <a href="/login">login</a>
      <a href="/signup">signup</a>
    {/if}
  </div>
</div>