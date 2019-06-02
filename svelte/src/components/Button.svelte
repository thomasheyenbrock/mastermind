<script>
  export let isDisabled = false;
</script>

<style>
  .button {
    padding: 12px 16px;
    border: 1px solid #6d6c69;
    background-color: #ecebe4;
    font-size: 18px;
    cursor: pointer;
  }
</style>

<button class="button" on:click {isDisabled}>
  <slot />
</button>
