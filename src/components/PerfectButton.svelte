<script>
  // variant: 'primary' (filled) or 'secondary' (outlined). full: stretch to the container width.
  let { children, type = 'button', variant = 'primary', full = false, ...rest } = $props();
</script>

<button {type} class="button" class:secondary={variant === 'secondary'} class:full {...rest}>
  {@render children()}
</button>
