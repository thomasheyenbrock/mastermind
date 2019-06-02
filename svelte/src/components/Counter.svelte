<script>
  import Button from "./Button.svelte";

  export let current;
  export let min;
  export let max;
  export let decrement;
  export let increment;

  function handleDecrement() {
    if (current > min) {
      decrement();
    }
  }
  function handleIncrement() {
    if (current < max) {
      increment();
    }
  }
</script>

<style>
  .counter-container {
    display: flex;
  }

  .counter-value {
    border-top: 1px solid #6d6c69;
    border-bottom: 1px solid #6d6c69;
    background-color: #ecebe4;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<div class="counter-container">
  <Button on:click={handleDecrement}>-</Button>
  <div class="counter-value">{current}</div>
  <Button on:click={handleIncrement}>+</Button>
</div>
