<script>
  import { getContext } from 'svelte';
  import ProfilePhotoEditor from './ProfilePhotoEditor.svelte';
  import Fa from 'svelte-fa'
  import { faEdit } from '@fortawesome/free-solid-svg-icons'

  const { open, close } = getContext('simple-modal');
  const modalSettings = {
    styleBg: { 
      backgroundColor: 'rgb(0,0,0,.85)' 
    },
    styleWindow: { backgroundColor: 'var(--main-bg-color)' },
    closeButton: false,
  }

  export let currentAvatar;
  export let switchAvatar;
  export let applyChanges;
  export let cancelChanges;
  function closeModal() {
    close();
  }
  
  const openProfileSelector = () => {
    open(ProfilePhotoEditor, { currentAvatar, switchAvatar, applyChanges, cancelChanges, closeModal}, modalSettings);
  };

</script>

<style>
  .profile-editor-btn {
    width: auto;
    display: inline-block;
  }
  .profile-editor-btn:hover {
    cursor:pointer;
  }
</style>

<p class="profile-editor-btn" on:click={openProfileSelector}><Fa icon={faEdit} /></p>
