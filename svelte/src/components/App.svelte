<script>
  import Game from "./Game.svelte";
  import Menu from "./Menu.svelte";
  import { compareCombination } from "../utils/compareCombinations";
  import {
    lengthOfCombination as initialLengthOfCombination,
    numberOfColors as initialNumberOfColors,
    numberOfGuesses as initialNumberOfGuesses
  } from "../utils/initialState";

  let lengthOfCombination = initialLengthOfCombination;
  let numberOfColors = initialNumberOfColors;
  let numberOfGuesses = initialNumberOfGuesses;
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
  <Menu {lengthOfCombination} {numberOfColors} {numberOfGuesses} />
  <Game />
</div>
