<script>
  import { profilePhotoLocation } from "../utils";
  export let currentAvatar;
  export let switchAvatar;
  export let applyChanges;
  export let cancelChanges;
  export let closeModal;

  const numberOfImages = 10;
</script>

<style>
  .photo-div-container {
    display: flex;
    background-color: var(--main-bg-color);
    flex-wrap: wrap;
  }

  .photo-div {
    display: flex;
    padding: 10px;
  }

  .selected-avatar {
    outline: 2mm solid var(--main-accent-color);
  }

  .nonselected-avatar:hover {
    outline: 1mm dashed var(--font-color);
  }

</style>


<div class="photo-div-container">
  {#each Array(numberOfImages) as _, i}
    {#if i != currentAvatar}
      <div on:click={switchAvatar} class="photo-div"><img id={`profile-photo-${i}`} class="nonselected-avatar" src={`${profilePhotoLocation}photo${i}.png`} alt="Avatar" /></div>
    {:else}
      <div on:click={switchAvatar} class="photo-div"><img id={`profile-photo-${i}`} class="selected-avatar" src={`${profilePhotoLocation}photo${i}.png`} alt="Avatar" /></div>
    {/if}
  {/each}
  <main>
    <button on:click={() => {applyChanges(); closeModal();}}>Apply</button>
    <button on:click={() => {cancelChanges(); closeModal();}}>Cancel</button>
  </main>
</div>