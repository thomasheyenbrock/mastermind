import { writable } from "svelte/store";

import { createGame } from "../utils/createGame";
import { compareCombinations } from "../utils/compareCombinations";
import {
  lengthOfCombination,
  numberOfColors,
  numberOfGuesses
} from "../utils/initialState";

export const game = writable(
  createGame(lengthOfCombination, numberOfColors, numberOfGuesses)
);

const arrayEqual = (array1, array2) =>
  array1.every((element, index) => element === array2[index]);

export const dispatch = (state, action) => {
  switch (action.type) {
    case "NEW_GAME":
      game.set(action.payload);
      break;
    case "SELECT_COLOR":
      game.set({
        ...state,
        hasStartedPlaying: true,
        selectedColor:
          state.selectedColor === action.payload ? null : action.payload
      });
      break;
    case "EDIT_GUESS":
      game.set({
        ...state,
        hasStartedPlaying: true,
        nextGuess: state.nextGuess.map((guess, index) =>
          index === action.payload ? state.selectedColor : guess
        )
      });
      break;
    case "GUESS":
      if (state.nextGuess.some(guess => !guess)) {
        alert("Please use a color for each place in the combination.");
        return;
      }
      const hasWon = state.nextGuess.every(
        (guess, index) => guess === state.combination[index]
      );
      if (hasWon) {
        alert("You did it! You found the combination!");
      }
      const hasLost =
        !hasWon && state.guesses.length + 1 === state.numberOfGuesses;
      if (hasLost) {
        alert("Oh no! You couldn't find the correct combination.");
      }
      const result = compareCombinations(state.nextGuess, state.combination);
      const guesses = [
        ...state.guesses,
        {
          colors: state.nextGuess,
          result
        }
      ];
      game.set({
        ...state,
        hasStartedPlaying: true,
        nextGuess: state.nextGuess.map(() => null),
        guesses,
        validCombinations: state.validCombinations.filter(combination =>
          guesses.every(guess =>
            arrayEqual(
              guess.result,
              compareCombinations(guess.colors, combination)
            )
          )
        ),
        isFinished: hasWon || hasLost
      });
      break;
    default:
      break;
  }
};
