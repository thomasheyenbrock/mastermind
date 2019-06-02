import React, { useReducer, useState } from "react";

import { compareCombinations } from "../../utils/compareCombinations";
import { createGame } from "../../utils/createGame";
import { Game } from "../Game";
import { Menu } from "../Menu";
import "./style.css";

const arrayEqual = (array1, array2) =>
  array1.every((element, index) => element === array2[index]);

const reducer = (state, action) => {
  switch (action.type) {
    case "NEW_GAME":
      return action.payload;
    case "SELECT_COLOR":
      return {
        ...state,
        hasStartedPlaying: true,
        selectedColor:
          state.selectedColor === action.payload ? null : action.payload
      };
    case "EDIT_GUESS":
      return {
        ...state,
        hasStartedPlaying: true,
        nextGuess: state.nextGuess.map((guess, index) =>
          index === action.payload ? state.selectedColor : guess
        )
      };
    case "GUESS":
      if (state.nextGuess.some(guess => !guess)) {
        alert("Please use a color for each place in the combination.");
        return state;
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
      return {
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
      };
    default:
      return state;
  }
};

export const App = () => {
  const [lengthOfCombination, setLengthOfCombination] = useState(4);
  const [numberOfColors, setNumberOfColors] = useState(6);
  const [numberOfGuesses, setNumberOfGuesses] = useState(10);
  const [game, dispatch] = useReducer(
    reducer,
    createGame(lengthOfCombination, numberOfColors, numberOfGuesses)
  );
  return (
    <div className="container">
      <Menu
        lengthOfCombination={lengthOfCombination}
        setLengthOfCombination={setLengthOfCombination}
        numberOfColors={numberOfColors}
        setNumberOfColors={setNumberOfColors}
        numberOfGuesses={numberOfGuesses}
        setNumberOfGuesses={setNumberOfGuesses}
        hasStartedPlaying={game.hasStartedPlaying}
        dispatch={dispatch}
      />
      <Game {...game} dispatch={dispatch} />
    </div>
  );
};
