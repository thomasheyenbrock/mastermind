<script>
  import Game from "./Game.svelte";
  import Menu from "./Menu.svelte";
</script>

<style>
  .container {
    display: flex;
    justify-content: center;
    padding: 32px;
    min-height: calc(100vh - 64px);
  }
</style>

<div class="container">
  <Menu />
  <Game />
</div>
