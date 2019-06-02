<script>
  import Button from "./Button.svelte";
  import Color from "./Color.svelte";
  import Result from "./Result.svelte";
  import { dispatch, game } from "./store";
</script>

<style>
  .game {
    margin-left: 32px;
    border: 2px solid #424240;
    background-color: #c2c1bb;
    height: 100%;
  }

  .game > * + * {
    border-top: 2px solid #424240;
  }

  .valid-combinations {
    color: #ecebe4;
  }

  .guess-row {
    display: flex;
  }

  .guess-row.fixed-height {
    height: 52px;
  }

  .guess-row-colors {
    padding: 8px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    border-right: 2px solid #424240;
    justify-content: space-around;
  }

  .guess-row-colors.current {
    background-color: #979792;
  }

  .guess-row-colors.hidden {
    background-color: #424240;
  }

  .select-colors {
    display: flex;
    padding: 8px;
  }

  .select-colors :not(:first-child) {
    margin-left: 16px;
  }

  .guess-button {
    padding: 8px;
    display: flex;
    justify-content: center;
  }
</style>

<div class="game">
  <div class="guess-row fixed-height">
    <div class={`guess-row-colors ${$game.isFinished ? '' : 'hidden'}`}>
      {#if $game.isFinished}
        {#each $game.combination as color (color)}
          <Color {color} />
        {/each}
      {:else}
        <span class="valid-combinations">
           {$game.validCombinations.length} possible combination{$game.validCombinations.length > 1 ? 's' : ''}

        </span>
      {/if}
    </div>
    <Result hideResults result={$game.nextGuess.map(() => null)} />
  </div>
  {#each Array.from({
    length: $game.numberOfGuesses - $game.guesses.length
  }) as _, index}
    <div class="guess-row">
      <div
        class={`guess-row-colors ${!$game.isFinished && index === $game.numberOfGuesses - $game.guesses.length - 1 ? 'current' : ''}`}>
        {#if index === $game.numberOfGuesses - $game.guesses.length - 1}
          {#each $game.nextGuess as color, index}
            <Color
              on:click={$game.isFinished ? undefined : () => {
                    dispatch($game, { type: 'EDIT_GUESS', payload: index });
                  }}
              isClickable={!$game.isFinished}
              {color} />
          {/each}
        {:else}
          {#each $game.nextGuess as _}
            <Color />
          {/each}
        {/if}
      </div>
      <Result result={$game.nextGuess.map(() => null)} />
    </div>
  {/each}
  {#each [...$game.guesses].reverse() as guess, index (guess)}
    <div class="guess-row">
      <div class="guess-row-colors">
        {#each guess.colors as color}
          <Color {color} />
        {/each}
      </div>
      <Result result={guess.result} />
    </div>
  {/each}
  <div class="select-colors">
    {#each $game.colors as color}
      <Color
        {color}
        on:click={() => dispatch($game, {
            type: 'SELECT_COLOR',
            payload: color
          })}
        isClickable
        isSelected={$game.selectedColor === color} />
    {/each}
  </div>
  <div class="guess-button">
    <Button
      isDisabled={$game.isFinished}
      on:click={() => {
        dispatch($game, { type: 'GUESS' });
      }}>
      Make guess
    </Button>
  </div>
</div>
