export const pawnMove = (state, { row, column }) => {
  if (state.selectedPiece.column === column) {
    if (state.turn === "White") {
      if (state.selectedPiece.row === row + 1) {
        // The white player wants to move forward one tile.
        // This move is legal only if the tile is empty.
        if (state.board[row][column] === null) {
          const movingPiece = { color: "White", piece: "Pawn" };
          return {
            ...state,
            board: state.board.map((r, rowIndex) => {
              if (rowIndex === row) {
                return r.map((c, columnIndex) => {
                  if (columnIndex === column) {
                    return movingPiece;
                  }
                  return c;
                });
              } else if (rowIndex === row + 1) {
                return r.map((c, columnIndex) => {
                  if (columnIndex === column) {
                    return null;
                  }
                  return c;
                });
              }
              return r;
            }),
            selectedPiece: null,
            turn: row === 0 ? "White" : "Black",
            moves: [
              ...state.moves,
              {
                piece: movingPiece,
                from: state.selectedPiece,
                to: { row, column }
              }
            ],
            promotion: row === 0 ? { row, column } : null
          };
        }
      } else if (
        state.selectedPiece.row === row + 2 &&
        state.selectedPiece.row === 6
      ) {
        // The white player wants to move forward two tiles on the first move of this pawn.
        // This move is legal only if both tiles in front of the pawn are empty.
        if (
          state.board[row + 1][column] === null &&
          state.board[row][column] === null
        ) {
          const movingPiece = { color: "White", piece: "Pawn" };
          return {
            ...state,
            board: state.board.map((r, rowIndex) => {
              if (rowIndex === row) {
                return r.map((c, columnIndex) => {
                  if (columnIndex === column) {
                    return movingPiece;
                  }
                  return c;
                });
              } else if (rowIndex === row + 2) {
                return r.map((c, columnIndex) => {
                  if (columnIndex === column) {
                    return null;
                  }
                  return c;
                });
              }
              return r;
            }),
            selectedPiece: null,
            turn: "Black",
            moves: [
              ...state.moves,
              {
                piece: movingPiece,
                from: state.selectedPiece,
                to: { row, column }
              }
            ]
          };
        }
      }
    } else {
      if (state.selectedPiece.row === row - 1) {
        // The black player wants to move forward one tile.
        // This move is legal only if the tile is empty.
        if (state.board[row][column] === null) {
          const movingPiece = { color: "Black", piece: "Pawn" };
          return {
            ...state,
            board: state.board.map((r, rowIndex) => {
              if (rowIndex === row) {
                return r.map((c, columnIndex) => {
                  if (columnIndex === column) {
                    return movingPiece;
                  }
                  return c;
                });
              } else if (rowIndex === row - 1) {
                return r.map((c, columnIndex) => {
                  if (columnIndex === column) {
                    return null;
                  }
                  return c;
                });
              }
              return r;
            }),
            selectedPiece: null,
            turn: row === 7 ? "Black" : "White",
            moves: [
              ...state.moves,
              {
                piece: movingPiece,
                from: state.selectedPiece,
                to: { row, column }
              }
            ],
            promotion: row === 7 ? { row, column } : null
          };
        }
      } else if (
        state.selectedPiece.row === row - 2 &&
        state.selectedPiece.row === 1
      ) {
        // The black player wants to move forward two tiles on the first move of this pawn.
        // This move is legal only if both tiles in front of the pawn are empty.
        if (
          state.board[row - 1][column] === null &&
          state.board[row][column] === null
        ) {
          const movingPiece = { color: "Black", piece: "Pawn" };
          return {
            ...state,
            board: state.board.map((r, rowIndex) => {
              if (rowIndex === row) {
                return r.map((c, columnIndex) => {
                  if (columnIndex === column) {
                    return movingPiece;
                  }
                  return c;
                });
              } else if (rowIndex === row - 2) {
                return r.map((c, columnIndex) => {
                  if (columnIndex === column) {
                    return null;
                  }
                  return c;
                });
              }
              return r;
            }),
            selectedPiece: null,
            turn: "White",
            moves: [
              ...state.moves,
              {
                piece: movingPiece,
                from: state.selectedPiece,
                to: { row, column }
              }
            ]
          };
        }
      }
    }
  } else if (state.selectedPiece.column === column + 1) {
    if (state.turn === "White") {
      if (state.selectedPiece.row === row + 1) {
        // The white player wants to take diagonally to the left.
        // This move is legal only if there is a black piece on that tile.
        if (
          state.board[row][column] &&
          state.board[row][column].color === "Black"
        ) {
          const movingPiece = { color: "White", piece: "Pawn" };
          return {
            ...state,
            board: state.board.map((r, rowIndex) => {
              if (rowIndex === row) {
                return r.map((c, columnIndex) => {
                  if (columnIndex === column) {
                    return movingPiece;
                  }
                  return c;
                });
              } else if (rowIndex === row + 1) {
                return r.map((c, columnIndex) => {
                  if (columnIndex === column + 1) {
                    return null;
                  }
                  return c;
                });
              }
              return r;
            }),
            selectedPiece: null,
            turn: row === 0 ? "White" : "Black",
            moves: [
              ...state.moves,
              {
                piece: movingPiece,
                from: state.selectedPiece,
                to: { row, column }
              }
            ],
            promotion: row === 0 ? { row, column } : null
          };
        }
        // The move is also legal en-passant.
        const pieceToTheLeft = state.board[row + 1][column];
        if (
          pieceToTheLeft &&
          pieceToTheLeft.color === "Black" &&
          pieceToTheLeft.piece === "Pawn"
        ) {
          const lastMove = state.moves[state.moves.length - 1];
          if (
            lastMove &&
            lastMove.piece.color === "Black" &&
            lastMove.piece.piece === "Pawn" &&
            lastMove.from.row === 1 &&
            lastMove.from.column === column &&
            lastMove.to.row === 3 &&
            lastMove.to.column === column
          ) {
            const movingPiece = { color: "White", piece: "Pawn" };
            return {
              ...state,
              board: state.board.map((r, rowIndex) => {
                if (rowIndex === row) {
                  return r.map((c, columnIndex) => {
                    if (columnIndex === column) {
                      return movingPiece;
                    }
                    return c;
                  });
                } else if (rowIndex === row + 1) {
                  return r.map((c, columnIndex) => {
                    if (column === columnIndex || column === columnIndex - 1) {
                      return null;
                    }
                    return c;
                  });
                }
                return r;
              }),
              selectedPiece: null,
              turn: "Black",
              moves: [
                ...state.moves,
                {
                  piece: movingPiece,
                  from: state.selectedPiece,
                  to: { row, column }
                }
              ],
              promotion: null
            };
          }
        }
      }
    } else {
      if (state.selectedPiece.row === row - 1) {
        // The black player wants to take diagonally to the left.
        // This move is legal only if there is a white piece on that tile.
        if (
          state.board[row][column] &&
          state.board[row][column].color === "White"
        ) {
          const movingPiece = { color: "Black", piece: "Pawn" };
          return {
            ...state,
            board: state.board.map((r, rowIndex) => {
              if (rowIndex === row) {
                return r.map((c, columnIndex) => {
                  if (columnIndex === column) {
                    return movingPiece;
                  }
                  return c;
                });
              } else if (rowIndex === row - 1) {
                return r.map((c, columnIndex) => {
                  if (columnIndex === column + 1) {
                    return null;
                  }
                  return c;
                });
              }
              return r;
            }),
            selectedPiece: null,
            turn: row === 7 ? "Black" : "White",
            moves: [
              ...state.moves,
              {
                piece: movingPiece,
                from: state.selectedPiece,
                to: { row, column }
              }
            ],
            promotion: row === 7 ? { row, column } : null
          };
        }
        // The move is also legal en-passant.
        const pieceToTheLeft = state.board[row - 1][column];
        if (
          pieceToTheLeft &&
          pieceToTheLeft.color === "White" &&
          pieceToTheLeft.piece === "Pawn"
        ) {
          const lastMove = state.moves[state.moves.length - 1];
          if (
            lastMove &&
            lastMove.piece.color === "White" &&
            lastMove.piece.piece === "Pawn" &&
            lastMove.from.row === 6 &&
            lastMove.from.column === column &&
            lastMove.to.row === 4 &&
            lastMove.to.column === column
          ) {
            const movingPiece = { color: "Black", piece: "Pawn" };
            return {
              ...state,
              board: state.board.map((r, rowIndex) => {
                if (rowIndex === row) {
                  return r.map((c, columnIndex) => {
                    if (columnIndex === column) {
                      return movingPiece;
                    }
                    return c;
                  });
                } else if (rowIndex === row - 1) {
                  return r.map((c, columnIndex) => {
                    if (column === columnIndex || column === columnIndex - 1) {
                      return null;
                    }
                    return c;
                  });
                }
                return r;
              }),
              selectedPiece: null,
              turn: "White",
              moves: [
                ...state.moves,
                {
                  piece: movingPiece,
                  from: state.selectedPiece,
                  to: { row, column }
                }
              ],
              promotion: null
            };
          }
        }
      }
    }
  } else if (state.selectedPiece.column === column - 1) {
    if (state.turn === "White") {
      if (state.selectedPiece.row === row + 1) {
        // The white player wants to take diagonally to the right.
        // This move is legal only if there is a black piece on that tile.
        if (
          state.board[row][column] &&
          state.board[row][column].color === "Black"
        ) {
          const movingPiece = { color: "White", piece: "Pawn" };
          return {
            ...state,
            board: state.board.map((r, rowIndex) => {
              if (rowIndex === row) {
                return r.map((c, columnIndex) => {
                  if (columnIndex === column) {
                    return movingPiece;
                  }
                  return c;
                });
              } else if (rowIndex === row + 1) {
                return r.map((c, columnIndex) => {
                  if (columnIndex === column - 1) {
                    return null;
                  }
                  return c;
                });
              }
              return r;
            }),
            selectedPiece: null,
            turn: row === 0 ? "White" : "Black",
            moves: [
              ...state.moves,
              {
                piece: movingPiece,
                from: state.selectedPiece,
                to: { row, column }
              }
            ],
            promotion: row === 0 ? { row, column } : null
          };
        }
        // The move is also legal en-passant.
        const pieceToTheRight = state.board[row + 1][column];
        if (
          pieceToTheRight &&
          pieceToTheRight.color === "Black" &&
          pieceToTheRight.piece === "Pawn"
        ) {
          const lastMove = state.moves[state.moves.length - 1];
          if (
            lastMove &&
            lastMove.piece.color === "Black" &&
            lastMove.piece.piece === "Pawn" &&
            lastMove.from.row === 1 &&
            lastMove.from.column === column &&
            lastMove.to.row === 3 &&
            lastMove.to.column === column
          ) {
            const movingPiece = { color: "White", piece: "Pawn" };
            return {
              ...state,
              board: state.board.map((r, rowIndex) => {
                if (rowIndex === row) {
                  return r.map((c, columnIndex) => {
                    if (columnIndex === column) {
                      return movingPiece;
                    }
                    return c;
                  });
                } else if (rowIndex === row + 1) {
                  return r.map((c, columnIndex) => {
                    if (column === columnIndex || column === columnIndex + 1) {
                      return null;
                    }
                    return c;
                  });
                }
                return r;
              }),
              selectedPiece: null,
              turn: "Black",
              moves: [
                ...state.moves,
                {
                  piece: movingPiece,
                  from: state.selectedPiece,
                  to: { row, column }
                }
              ],
              promotion: null
            };
          }
        }
      }
    } else {
      if (state.selectedPiece.row === row - 1) {
        // The black player wants to take diagonally to the right.
        // This move is legal only if there is a white piece on that tile.
        if (
          state.board[row][column] &&
          state.board[row][column].color === "White"
        ) {
          const movingPiece = { color: "Black", piece: "Pawn" };
          return {
            ...state,
            board: state.board.map((r, rowIndex) => {
              if (rowIndex === row) {
                return r.map((c, columnIndex) => {
                  if (columnIndex === column) {
                    return movingPiece;
                  }
                  return c;
                });
              } else if (rowIndex === row - 1) {
                return r.map((c, columnIndex) => {
                  if (columnIndex === column - 1) {
                    return null;
                  }
                  return c;
                });
              }
              return r;
            }),
            selectedPiece: null,
            turn: row === 7 ? "Black" : "White",
            moves: [
              ...state.moves,
              {
                piece: movingPiece,
                from: state.selectedPiece,
                to: { row, column }
              }
            ],
            promotion: row === 7 ? { row, column } : null
          };
        }
        // The move is also legal en-passant.
        const pieceToTheRight = state.board[row - 1][column];
        if (
          pieceToTheRight &&
          pieceToTheRight.color === "White" &&
          pieceToTheRight.piece === "Pawn"
        ) {
          const lastMove = state.moves[state.moves.length - 1];
          if (
            lastMove &&
            lastMove.piece.color === "White" &&
            lastMove.piece.piece === "Pawn" &&
            lastMove.from.row === 6 &&
            lastMove.from.column === column &&
            lastMove.to.row === 4 &&
            lastMove.to.column === column
          ) {
            const movingPiece = { color: "Black", piece: "Pawn" };
            return {
              ...state,
              board: state.board.map((r, rowIndex) => {
                if (rowIndex === row) {
                  return r.map((c, columnIndex) => {
                    if (columnIndex === column) {
                      return movingPiece;
                    }
                    return c;
                  });
                } else if (rowIndex === row - 1) {
                  return r.map((c, columnIndex) => {
                    if (column === columnIndex || column === columnIndex + 1) {
                      return null;
                    }
                    return c;
                  });
                }
                return r;
              }),
              selectedPiece: null,
              turn: "White",
              moves: [
                ...state.moves,
                {
                  piece: movingPiece,
                  from: state.selectedPiece,
                  to: { row, column }
                }
              ],
              promotion: null
            };
          }
        }
      }
    }
  }
  return state;
};
