import React from "react";

import { Button } from "../Button";
import { Color } from "../Color";
import { Result } from "../Result";
import "./style.css";

export const Game = props => (
  <div className="game">
    <div className="guess-row fixed-height">
      <div className={`guess-row-colors ${props.isFinished ? "" : "hidden"}`}>
        {props.isFinished ? (
          props.combination.map((color, index) => (
            <Color key={index} color={color} />
          ))
        ) : (
          <span className="valid-combinations">
            {props.validCombinations.length} possible combination
            {props.validCombinations.length > 1 ? "s" : ""}
          </span>
        )}
      </div>
      <div className="guess-row-result">
        <div className="guess-row-result-row">
          {props.nextGuess
            .slice((props.nextGuess.length + 1) / 2)
            .map((_, index) => (
              <div key={index} className="placeholder" />
            ))}
        </div>
      </div>
    </div>
    {Array.from({ length: props.numberOfGuesses - props.guesses.length }).map(
      (_, index) => {
        const isCurrent =
          index === props.numberOfGuesses - props.guesses.length - 1;
        return (
          <div key={index} className="guess-row">
            <div
              className={`guess-row-colors ${
                !props.isFinished && isCurrent ? "current" : ""
              }`}
            >
              {isCurrent
                ? props.nextGuess.map((color, index) => (
                    <Color
                      key={index}
                      onClick={
                        props.isFinished
                          ? undefined
                          : () => {
                              props.dispatch({
                                type: "EDIT_GUESS",
                                payload: index
                              });
                            }
                      }
                      color={color}
                    />
                  ))
                : props.nextGuess.map((_, index) => <Color key={index} />)}
            </div>
            <Result result={props.nextGuess.map(() => null)} />
          </div>
        );
      }
    )}
    {[...props.guesses].reverse().map((guess, index) => (
      <div key={index} className="guess-row">
        <div className="guess-row-colors">
          {guess.colors.map((color, index) => (
            <Color key={index} color={color} />
          ))}
        </div>
        <Result result={guess.result} />
      </div>
    ))}
    <div className="select-colors">
      {props.colors.map((color, index) => (
        <Color
          key={index}
          color={color}
          onClick={() =>
            props.dispatch({ type: "SELECT_COLOR", payload: color })
          }
          selected={props.selectedColor === color}
        />
      ))}
    </div>
    <div className="guess-button">
      <Button
        disabled={props.isFinished}
        onClick={() => {
          props.dispatch({ type: "GUESS" });
        }}
      >
        Make guess
      </Button>
    </div>
  </div>
);
