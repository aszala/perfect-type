<script>
  let { label, id, hint = '', value = $bindable(''), type = 'text', ...rest } = $props();
</script>

<div class="field">
  <label for={id}>{label}</label>
  <input {id} name={id} {type} bind:value aria-describedby={hint ? `${id}-hint` : undefined} {...rest} />
  {#if hint}<p id="{id}-hint" class="hint">{hint}</p>{/if}
</div>

<style>
  .field {
    display: grid;
    gap: 6px;
    margin-bottom: 18px;
    text-align: left;
  }

  label {
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--ink);
  }

  input {
    width: 100%;
    padding: 0.6em 0.8em;
    font: inherit;
    font-size: 1.05rem;
    color: var(--ink);
    background: rgb(255 255 255 / 0.55);
    border: 1px solid var(--rule-strong);
    border-radius: 8px;
    outline: none;
    transition:
      border-color 150ms,
      box-shadow 150ms;
  }

  input:focus {
    border-color: var(--ink);
    box-shadow: 0 0 0 3px var(--accent-soft);
  }

  .hint {
    margin: 0;
    font-size: 0.85rem;
    color: var(--muted);
  }
</style>
