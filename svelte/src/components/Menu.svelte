<script>
  import Button from "./Button.svelte";
  import Counter from "./Counter.svelte";
  import { dispatch, game } from "./store";
  import { createGame } from "../utils/createGame";

  export let lengthOfCombination;
  export let numberOfColors;
  export let numberOfGuesses;
</script>

<style>
  .menu {
    border: 2px solid #424240;
    background-color: #c2c1bb;
    padding: 16px;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .menu > :not(:first-child) {
    margin-top: 16px;
  }

  .divider {
    border-top: 1px solid #424240;
  }
</style>

<div class="menu">
  <p>Length of combination:</p>
  <Counter
    min={2}
    max={8}
    current={lengthOfCombination}
    increment={() => {
      if (lengthOfCombination + 1 > numberOfColors) {
        numberOfColors = lengthOfCombination + 1;
      }
      lengthOfCombination += 1;
    }}
    decrement={() => {
      lengthOfCombination -= 1;
    }} />
  <div class="divider" />
  <p>Number of colors:</p>
  <Counter
    min={lengthOfCombination}
    max={8}
    current={numberOfColors}
    increment={() => (numberOfColors += 1)}
    decrement={() => (numberOfColors -= 1)} />
  <div class="divider" />
  <p>Number of guesses:</p>
  <Counter
    min={1}
    max={20}
    current={numberOfGuesses}
    increment={() => (numberOfGuesses += 1)}
    decrement={() => (numberOfGuesses -= 1)} />
  <div class="divider" />
  <Button
    on:click={() => {
      if ($game.hasStartedPlaying) {
        const shouldContinue = window.confirm('Do you really want to reset and start a new game? The current game will be lost.');
        if (!shouldContinue) {
          return;
        }
      }
      dispatch($game, {
        type: 'NEW_GAME',
        payload: createGame(
          lengthOfCombination,
          numberOfColors,
          numberOfGuesses
        )
      });
    }}>
    Start new game
  </Button>
</div>
