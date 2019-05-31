import React from "react";

import { createGame } from "../../utils/createGame";
import { Button } from "../Button";
import { Counter } from "../Counter";
import "./style.css";

export const Menu = props => (
  <div className="menu">
    <p>Length of combination:</p>
    <Counter
      min={2}
      max={8}
      current={props.lengthOfCombination}
      increment={() => {
        if (props.lengthOfCombination + 1 > props.numberOfColors) {
          props.setNumberOfColors(props.lengthOfCombination + 1);
        }
        props.setLengthOfCombination(props.lengthOfCombination + 1);
      }}
      decrement={() => {
        props.setLengthOfCombination(props.lengthOfCombination - 1);
      }}
    />
    <div className="divider" />
    <p>Number of colors:</p>
    <Counter
      min={props.lengthOfCombination}
      max={8}
      current={props.numberOfColors}
      increment={() => props.setNumberOfColors(c => c + 1)}
      decrement={() => props.setNumberOfColors(c => c - 1)}
    />
    <div className="divider" />
    <p>Number of guesses:</p>
    <Counter
      min={1}
      max={20}
      current={props.numberOfGuesses}
      increment={() => props.setNumberOfGuesses(c => c + 1)}
      decrement={() => props.setNumberOfGuesses(c => c - 1)}
    />
    <div className="divider" />
    <Button
      onClick={() => {
        if (props.hasStartedPlaying) {
          const shouldContinue = window.confirm(
            "Do you really want to reset and start a new game? The current game will be lost."
          );
          if (!shouldContinue) {
            return;
          }
        }
        props.dispatch({
          type: "NEW_GAME",
          payload: createGame(
            props.lengthOfCombination,
            props.numberOfColors,
            props.numberOfGuesses
          )
        });
      }}
    >
      Start new game
    </Button>
  </div>
);
