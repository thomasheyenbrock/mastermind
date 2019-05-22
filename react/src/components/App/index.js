import React, { useReducer } from "react";

import {
  bishopMove,
  kingMove,
  knightMove,
  pawnMove,
  queenMove,
  rockMove
} from "../../logic";
import "./style.css";
import { Piece } from "../Piece";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "CLICK":
      const { row, column } = payload;
      const piece = state.board[row][column];
      if (!state.selectedPiece && (!piece || piece.color !== state.turn)) {
        // There is no selected piece and the user has not clicked any of his pieces.
        return state;
      }
      if (!state.selectedPiece) {
        // The user selected one of his pieces.
        return { ...state, selectedPiece: { row, column } };
      }
      const selectedPiece =
        state.board[state.selectedPiece.row][state.selectedPiece.column];
      if (
        state.selectedPiece.row === row &&
        state.selectedPiece.column === column
      ) {
        // The user clicked on the selected piece again, so un-select it.
        return { ...state, selectedPiece: null };
      }
      if (piece && selectedPiece.color === piece.color) {
        // The user has already selected a piece and clicked on another, so select the new one instead.
        return { ...state, selectedPiece: { row, column } };
      }
      switch (selectedPiece.piece) {
        case "Pawn":
          return pawnMove(state, { row, column });
        case "Knight":
          return knightMove(state, { row, column });
        case "Bishop":
          return bishopMove(state, { row, column });
        case "Rock":
          return rockMove(state, { row, column });
        case "Queen":
          return queenMove(state, { row, column });
        case "King":
          return kingMove(state, { row, column });
        default:
          return state;
      }
    case "PROMOTE":
      return state;
    case "NEW_GAME":
      return { ...initialState };
    default:
      return state;
  }
};

const initialState = {
  turn: "White",
  selectedPiece: null,
  moves: [],
  promotion: null,
  board: [
    [
      { color: "Black", piece: "Rock" },
      { color: "Black", piece: "Knight" },
      { color: "Black", piece: "Bishop" },
      { color: "Black", piece: "Queen" },
      { color: "Black", piece: "King" },
      { color: "Black", piece: "Bishop" },
      { color: "Black", piece: "Knight" },
      { color: "Black", piece: "Rock" }
    ],
    [
      { color: "Black", piece: "Pawn" },
      { color: "Black", piece: "Pawn" },
      { color: "Black", piece: "Pawn" },
      { color: "Black", piece: "Pawn" },
      { color: "Black", piece: "Pawn" },
      { color: "Black", piece: "Pawn" },
      { color: "Black", piece: "Pawn" },
      { color: "Black", piece: "Pawn" }
    ],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [
      { color: "White", piece: "Pawn" },
      { color: "White", piece: "Pawn" },
      { color: "White", piece: "Pawn" },
      { color: "White", piece: "Pawn" },
      { color: "White", piece: "Pawn" },
      { color: "White", piece: "Pawn" },
      { color: "White", piece: "Pawn" },
      { color: "White", piece: "Pawn" }
    ],
    [
      { color: "White", piece: "Rock" },
      { color: "White", piece: "Knight" },
      { color: "White", piece: "Bishop" },
      { color: "White", piece: "Queen" },
      { color: "White", piece: "King" },
      { color: "White", piece: "Bishop" },
      { color: "White", piece: "Knight" },
      { color: "White", piece: "Rock" }
    ]
  ]
};

export const App = () => {
  const [{ board: rows, selectedPiece, turn }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <div className="container">
      <div className="side">
        <button
          className="button"
          onClick={() => dispatch({ type: "NEW_GAME" })}
        >
          Start new game
        </button>
      </div>
      <div className="board">
        <p className="header">
          It's {turn.substr(0, 1).toLowerCase()}
          {turn.substr(1)}'s turn.
        </p>
        {rows.map((tiles, rowIndex) => (
          <div className="row" key={rowIndex}>
            <div className="number">{8 - rowIndex}</div>
            {tiles.map((piece, tileIndex) => {
              const PieceComponent = piece && Piece[piece.color][piece.piece];
              const isSelected =
                selectedPiece &&
                selectedPiece.row === rowIndex &&
                selectedPiece.column === tileIndex;
              return (
                <div
                  key={tileIndex}
                  className={`tile ${
                    (rowIndex + tileIndex) % 2 === 0 ? "light" : "dark"
                  }`}
                  onClick={() =>
                    dispatch({
                      type: "CLICK",
                      payload: { row: rowIndex, column: tileIndex }
                    })
                  }
                >
                  {piece && (
                    <PieceComponent
                      className={isSelected ? "selected-piece" : ""}
                    />
                  )}
                </div>
              );
            })}
          </div>
        ))}
        <div className="letter-row">
          <div className="corner" />
          <div className="letter">A</div>
          <div className="letter">B</div>
          <div className="letter">C</div>
          <div className="letter">D</div>
          <div className="letter">E</div>
          <div className="letter">F</div>
          <div className="letter">G</div>
          <div className="letter">H</div>
        </div>
      </div>
      <div className="side" />
    </div>
  );
};
