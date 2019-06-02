<script>
  import ResultColor from "./ResultColor.svelte";

  export let result;
  export let hideResults = false;
</script>

<style>
  .guess-row-result {
    padding: 8px;
    display: flex;
    flex-direction: column;
  }

  .guess-row-result-row {
    display: flex;
  }

  .placeholder {
    width: 20px;
  }
</style>

<div class="guess-row-result">
  <div class="guess-row-result-row">
    {#each result.slice(0, (result.length + 1) / 2) as result}
      {#if hideResults}
        <div class="placeholder" />
      {:else}
        <ResultColor color={result} />
      {/if}
    {/each}
  </div>
  <div class="guess-row-result-row">
    {#each result.slice((result.length + 1) / 2) as result}
      {#if hideResults}
        <div class="placeholder" />
      {:else}
        <ResultColor color={result} />
      {/if}
    {/each}
  </div>
</div>
