<script>
  export let title;
  export let overall;
  export let easy;
  export let medium;
  export let hard;
  export let units;

</script>

<style>
  .center-table {
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
  }

  td {
    padding: 5px;
    min-width: 50px
  }

  .heading{
    border-bottom: .25mm solid rgb(175, 175, 175, .5);
  }



</style>


<main>
  <h2>{title}</h2>
  {#if (overall == null)}
    <slot></slot>
  {:else}
    <p>{`overall: ${Math.round(overall * 100) / 100}${units}`}</p>
    <table class="center-table">
      <tr>
        <td class="heading">easy</td>
        <td class="heading">medium</td>
        <td class="heading">hard</td>
      </tr>
      <tr>
        <td>{`${Math.round(easy * 100) / 100}${units}`}</td>
        <td>{`${Math.round(medium * 100) / 100}${units}`}</td>
        <td>{`${Math.round(hard * 100) / 100}${units}`}</td>
      </tr>
    </table>
  {/if}
</main>