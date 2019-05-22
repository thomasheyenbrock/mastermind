import { pawnMove } from "../pawnMove";

describe("pawnMove", () => {
  describe("when it's whites turn", () => {
    const piece = { color: "White", piece: "Pawn" };
    const opponentPiece = { color: "Black", piece: "Pawn" };
    describe("when there is no piece in front", () => {
      it("should only be able to move forward one tile", () => {
        const state = {
          board: [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, piece, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null]
          ],
          selectedPiece: { row: 5, column: 3 },
          turn: "White",
          moves: []
        };
        expect(pawnMove(state, { row: 4, column: 3 })).toEqual({
          board: [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, piece, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null]
          ],
          selectedPiece: null,
          turn: "Black",
          moves: [
            {
              piece,
              from: { row: 5, column: 3 },
              to: { row: 4, column: 3 }
            }
          ],
          promotion: null
        });
        Array.from({ length: 8 }).forEach((_, row) => {
          Array.from({ length: 8 }).forEach((__, column) => {
            if (row !== 4 && column !== 3) {
              expect(pawnMove(state, { row, column })).toEqual(state);
            }
          });
        });
      });
      describe("when reaching the last row", () => {
        it("should promote", () => {
          const state = {
            board: [
              [null, null, null, null, null, null, null, null],
              [null, null, null, piece, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null]
            ],
            selectedPiece: { row: 1, column: 3 },
            turn: "White",
            moves: []
          };
          expect(pawnMove(state, { row: 0, column: 3 })).toEqual({
            board: [
              [null, null, null, piece, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null]
            ],
            selectedPiece: null,
            turn: "White",
            moves: [
              {
                piece,
                from: { row: 1, column: 3 },
                to: { row: 0, column: 3 }
              }
            ],
            promotion: { row: 0, column: 3 }
          });
        });
      });
    });
    describe("when there is a piece in front of the pawn", () => {
      it("should not be able to make any move", () => {
        const state = {
          board: [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, opponentPiece, null, null, null, null],
            [null, null, null, piece, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null]
          ],
          selectedPiece: { row: 5, column: 3 },
          turn: "White",
          moves: []
        };
        Array.from({ length: 8 }).forEach((_, row) => {
          Array.from({ length: 8 }).forEach((__, column) => {
            expect(pawnMove(state, { row, column })).toEqual(state);
          });
        });
      });
    });
    describe("when the pawn is moving for the first time", () => {
      describe("when there is no piece in front", () => {
        it("should be able to move forward two tiles", () => {
          const state = {
            board: [
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, piece, null, null, null, null],
              [null, null, null, null, null, null, null, null]
            ],
            selectedPiece: { row: 6, column: 3 },
            turn: "White",
            moves: []
          };
          expect(pawnMove(state, { row: 4, column: 3 })).toEqual({
            board: [
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, piece, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null]
            ],
            selectedPiece: null,
            turn: "Black",
            moves: [
              {
                piece,
                from: { row: 6, column: 3 },
                to: { row: 4, column: 3 }
              }
            ]
          });
          Array.from({ length: 8 }).forEach((_, row) => {
            Array.from({ length: 8 }).forEach((__, column) => {
              if (
                !(row === 4 && column === 3) &&
                !(row === 5 && column === 3)
              ) {
                expect(pawnMove(state, { row, column })).toEqual(state);
              }
            });
          });
        });
      });
      describe("when there is a piece two tiles in front of the pawn", () => {
        it("should not be able to move forward two tiles", () => {
          const state = {
            board: [
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, opponentPiece, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, piece, null, null, null, null],
              [null, null, null, null, null, null, null, null]
            ],
            selectedPiece: { row: 6, column: 3 },
            turn: "White",
            moves: []
          };
          Array.from({ length: 8 }).forEach((_, row) => {
            Array.from({ length: 8 }).forEach((__, column) => {
              if (!(row === 5 && column === 3)) {
                expect(pawnMove(state, { row, column })).toEqual(state);
              }
            });
          });
        });
      });
    });
    describe("when there is an opposite peace on the left front", () => {
      it("should be able to take to the piece", () => {
        const state = {
          board: [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, opponentPiece, null, null, null, null, null],
            [null, null, null, piece, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null]
          ],
          selectedPiece: { row: 5, column: 3 },
          turn: "White",
          moves: []
        };
        expect(pawnMove(state, { row: 4, column: 2 })).toEqual({
          board: [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, piece, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null]
          ],
          selectedPiece: null,
          turn: "Black",
          moves: [
            {
              piece,
              from: { row: 5, column: 3 },
              to: { row: 4, column: 2 }
            }
          ],
          promotion: null
        });
      });
      describe("when reaching the last row", () => {
        it("should promote", () => {
          const state = {
            board: [
              [null, null, opponentPiece, null, null, null, null, null],
              [null, null, null, piece, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null]
            ],
            selectedPiece: { row: 1, column: 3 },
            turn: "White",
            moves: []
          };
          expect(pawnMove(state, { row: 0, column: 2 })).toEqual({
            board: [
              [null, null, piece, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null]
            ],
            selectedPiece: null,
            turn: "White",
            moves: [
              {
                piece,
                from: { row: 1, column: 3 },
                to: { row: 0, column: 2 }
              }
            ],
            promotion: { row: 0, column: 2 }
          });
        });
      });
    });
    describe("when there is an opposite peace on the right front", () => {
      it("should be able to take to the piece", () => {
        const state = {
          board: [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, opponentPiece, null, null, null],
            [null, null, null, piece, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null]
          ],
          selectedPiece: { row: 5, column: 3 },
          turn: "White",
          moves: []
        };
        expect(pawnMove(state, { row: 4, column: 4 })).toEqual({
          board: [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, piece, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null]
          ],
          selectedPiece: null,
          turn: "Black",
          moves: [
            {
              piece,
              from: { row: 5, column: 3 },
              to: { row: 4, column: 4 }
            }
          ],
          promotion: null
        });
      });
      describe("when reaching the last row", () => {
        it("should promote", () => {
          const state = {
            board: [
              [null, null, null, null, opponentPiece, null, null, null],
              [null, null, null, piece, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null]
            ],
            selectedPiece: { row: 1, column: 3 },
            turn: "White",
            moves: []
          };
          expect(pawnMove(state, { row: 0, column: 4 })).toEqual({
            board: [
              [null, null, null, null, piece, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null]
            ],
            selectedPiece: null,
            turn: "White",
            moves: [
              {
                piece,
                from: { row: 1, column: 3 },
                to: { row: 0, column: 4 }
              }
            ],
            promotion: { row: 0, column: 4 }
          });
        });
      });
    });
    describe("en passant", () => {
      describe("to the left", () => {
        it("should be able to take", () => {
          const state = {
            board: [
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, opponentPiece, piece, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null]
            ],
            selectedPiece: { row: 3, column: 3 },
            turn: "White",
            moves: [
              {
                piece: opponentPiece,
                from: { row: 1, column: 2 },
                to: { row: 3, column: 2 }
              }
            ]
          };
          expect(pawnMove(state, { row: 2, column: 2 })).toEqual({
            board: [
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, piece, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null]
            ],
            selectedPiece: null,
            turn: "Black",
            moves: [
              {
                piece: opponentPiece,
                from: { row: 1, column: 2 },
                to: { row: 3, column: 2 }
              },
              {
                piece,
                from: { row: 3, column: 3 },
                to: { row: 2, column: 2 }
              }
            ],
            promotion: null
          });
        });
        describe("when the last move was not two tiles forward", () => {
          it("should not be able to take", () => {
            const state = {
              board: [
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                [null, null, opponentPiece, piece, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null]
              ],
              selectedPiece: { row: 3, column: 3 },
              turn: "White",
              moves: [
                {
                  piece: opponentPiece,
                  from: { row: 2, column: 2 },
                  to: { row: 3, column: 2 }
                }
              ]
            };
            expect(pawnMove(state, { row: 2, column: 2 })).toEqual(state);
          });
        });
      });
      describe("to the right", () => {
        it("should be able to take", () => {
          const state = {
            board: [
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, piece, opponentPiece, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null]
            ],
            selectedPiece: { row: 3, column: 3 },
            turn: "White",
            moves: [
              {
                piece: opponentPiece,
                from: { row: 1, column: 4 },
                to: { row: 3, column: 4 }
              }
            ]
          };
          expect(pawnMove(state, { row: 2, column: 4 })).toEqual({
            board: [
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, piece, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null]
            ],
            selectedPiece: null,
            turn: "Black",
            moves: [
              {
                piece: opponentPiece,
                from: { row: 1, column: 4 },
                to: { row: 3, column: 4 }
              },
              {
                piece,
                from: { row: 3, column: 3 },
                to: { row: 2, column: 4 }
              }
            ],
            promotion: null
          });
        });
        describe("if the last move was not two tiles forward", () => {
          it("should not be able to take", () => {
            const state = {
              board: [
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                [null, null, null, piece, opponentPiece, null, null, null],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null]
              ],
              selectedPiece: { row: 3, column: 3 },
              turn: "White",
              moves: [
                {
                  piece: opponentPiece,
                  from: { row: 2, column: 4 },
                  to: { row: 3, column: 4 }
                }
              ]
            };
            expect(pawnMove(state, { row: 2, column: 4 })).toEqual(state);
          });
        });
      });
    });
  });
  describe("when it's blacks turn", () => {
    const piece = { color: "Black", piece: "Pawn" };
    const opponentPiece = { color: "White", piece: "Pawn" };
    describe("when there is no piece in front", () => {
      it("should only be able to move forward one tile", () => {
        const state = {
          board: [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, piece, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null]
          ],
          selectedPiece: { row: 4, column: 6 },
          turn: "Black",
          moves: []
        };
        expect(pawnMove(state, { row: 5, column: 6 })).toEqual({
          board: [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, piece, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null]
          ],
          selectedPiece: null,
          turn: "White",
          moves: [
            {
              piece,
              from: { row: 4, column: 6 },
              to: { row: 5, column: 6 }
            }
          ],
          promotion: null
        });
        Array.from({ length: 8 }).forEach((_, row) => {
          Array.from({ length: 8 }).forEach((__, column) => {
            if (row !== 5 && column !== 6) {
              expect(pawnMove(state, { row, column })).toEqual(state);
            }
          });
        });
      });
      describe("when reaching the last row", () => {
        it("should promote", () => {
          const state = {
            board: [
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, piece, null],
              [null, null, null, null, null, null, null, null]
            ],
            selectedPiece: { row: 6, column: 6 },
            turn: "Black",
            moves: []
          };
          expect(pawnMove(state, { row: 7, column: 6 })).toEqual({
            board: [
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, piece, null]
            ],
            selectedPiece: null,
            turn: "Black",
            moves: [
              {
                piece,
                from: { row: 6, column: 6 },
                to: { row: 7, column: 6 }
              }
            ],
            promotion: { row: 7, column: 6 }
          });
        });
      });
    });
    describe("when there is a piece in front of the pawn", () => {
      it("should not be able to make any move", () => {
        const state = {
          board: [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, piece, null],
            [null, null, null, null, null, null, opponentPiece, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null]
          ],
          selectedPiece: { row: 4, column: 6 },
          turn: "Black",
          moves: []
        };
        Array.from({ length: 8 }).forEach((_, row) => {
          Array.from({ length: 8 }).forEach((__, column) => {
            expect(pawnMove(state, { row, column })).toEqual(state);
          });
        });
      });
    });
    describe("when the pawn is moving for the first time", () => {
      describe("when there is no piece in front", () => {
        it("should be able to move forward two tiles", () => {
          const state = {
            board: [
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, piece, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null]
            ],
            selectedPiece: { row: 1, column: 6 },
            turn: "Black",
            moves: []
          };
          expect(pawnMove(state, { row: 3, column: 6 })).toEqual({
            board: [
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, piece, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null]
            ],
            selectedPiece: null,
            turn: "White",
            moves: [
              {
                piece,
                from: { row: 1, column: 6 },
                to: { row: 3, column: 6 }
              }
            ]
          });
          Array.from({ length: 8 }).forEach((_, row) => {
            Array.from({ length: 8 }).forEach((__, column) => {
              if (
                !(row === 3 && column === 6) &&
                !(row === 2 && column === 6)
              ) {
                expect(pawnMove(state, { row, column })).toEqual(state);
              }
            });
          });
        });
      });
      describe("when there is a piece two tiles in front of the pawn", () => {
        it("should not be able to move forward two tiles", () => {
          const state = {
            board: [
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, piece, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, opponentPiece, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null]
            ],
            selectedPiece: { row: 1, column: 6 },
            turn: "Black",
            moves: []
          };
          Array.from({ length: 8 }).forEach((_, row) => {
            Array.from({ length: 8 }).forEach((__, column) => {
              if (!(row === 2 && column === 6)) {
                expect(pawnMove(state, { row, column })).toEqual(state);
              }
            });
          });
        });
      });
    });
    describe("when there is an opposite peace on the left front", () => {
      it("should be able to take to the piece", () => {
        const state = {
          board: [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, piece, null],
            [null, null, null, null, null, opponentPiece, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null]
          ],
          selectedPiece: { row: 4, column: 6 },
          turn: "Black",
          moves: []
        };
        expect(pawnMove(state, { row: 5, column: 5 })).toEqual({
          board: [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, piece, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null]
          ],
          selectedPiece: null,
          turn: "White",
          moves: [
            {
              piece,
              from: { row: 4, column: 6 },
              to: { row: 5, column: 5 }
            }
          ],
          promotion: null
        });
      });
      describe("when reaching the last row", () => {
        it("should promote", () => {
          const state = {
            board: [
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, piece, null],
              [null, null, null, null, null, opponentPiece, null, null]
            ],
            selectedPiece: { row: 6, column: 6 },
            turn: "Black",
            moves: []
          };
          expect(pawnMove(state, { row: 7, column: 5 })).toEqual({
            board: [
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, piece, null, null]
            ],
            selectedPiece: null,
            turn: "Black",
            moves: [
              {
                piece,
                from: { row: 6, column: 6 },
                to: { row: 7, column: 5 }
              }
            ],
            promotion: { row: 7, column: 5 }
          });
        });
      });
    });
    describe("when there is an opposite peace on the right front", () => {
      it("should be able to take to the piece", () => {
        const state = {
          board: [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, piece, null],
            [null, null, null, null, null, null, null, opponentPiece],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null]
          ],
          selectedPiece: { row: 4, column: 6 },
          turn: "Black",
          moves: []
        };
        expect(pawnMove(state, { row: 5, column: 7 })).toEqual({
          board: [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, piece],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null]
          ],
          selectedPiece: null,
          turn: "White",
          moves: [
            {
              piece,
              from: { row: 4, column: 6 },
              to: { row: 5, column: 7 }
            }
          ],
          promotion: null
        });
      });
      describe("when reaching the last row", () => {
        it("should promote", () => {
          const state = {
            board: [
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, piece, null],
              [null, null, null, null, null, null, null, opponentPiece]
            ],
            selectedPiece: { row: 6, column: 6 },
            turn: "Black",
            moves: []
          };
          expect(pawnMove(state, { row: 7, column: 7 })).toEqual({
            board: [
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, piece]
            ],
            selectedPiece: null,
            turn: "Black",
            moves: [
              {
                piece,
                from: { row: 6, column: 6 },
                to: { row: 7, column: 7 }
              }
            ],
            promotion: { row: 7, column: 7 }
          });
        });
      });
    });
    describe("en passant", () => {
      describe("to the left", () => {
        it("should be able to take", () => {
          const state = {
            board: [
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, opponentPiece, piece, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null]
            ],
            selectedPiece: { row: 4, column: 6 },
            turn: "Black",
            moves: [
              {
                piece: opponentPiece,
                from: { row: 6, column: 5 },
                to: { row: 4, column: 5 }
              }
            ]
          };
          expect(pawnMove(state, { row: 5, column: 5 })).toEqual({
            board: [
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, piece, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null]
            ],
            selectedPiece: null,
            turn: "White",
            moves: [
              {
                piece: opponentPiece,
                from: { row: 6, column: 5 },
                to: { row: 4, column: 5 }
              },
              {
                piece,
                from: { row: 4, column: 6 },
                to: { row: 5, column: 5 }
              }
            ],
            promotion: null
          });
        });
        describe("when the last move was not two tiles forward", () => {
          it("should not be able to take", () => {
            const state = {
              board: [
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, opponentPiece, piece, null],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null]
              ],
              selectedPiece: { row: 4, column: 6 },
              turn: "Black",
              moves: [
                {
                  piece: opponentPiece,
                  from: { row: 5, column: 5 },
                  to: { row: 4, column: 5 }
                }
              ]
            };
            expect(pawnMove(state, { row: 5, column: 5 })).toEqual(state);
          });
        });
      });
      describe("to the right", () => {
        it("should be able to take", () => {
          const state = {
            board: [
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, piece, opponentPiece],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null]
            ],
            selectedPiece: { row: 4, column: 6 },
            turn: "Black",
            moves: [
              {
                piece: opponentPiece,
                from: { row: 6, column: 7 },
                to: { row: 4, column: 7 }
              }
            ]
          };
          expect(pawnMove(state, { row: 5, column: 7 })).toEqual({
            board: [
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, piece],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null]
            ],
            selectedPiece: null,
            turn: "White",
            moves: [
              {
                piece: opponentPiece,
                from: { row: 6, column: 7 },
                to: { row: 4, column: 7 }
              },
              {
                piece,
                from: { row: 4, column: 6 },
                to: { row: 5, column: 7 }
              }
            ],
            promotion: null
          });
        });
        describe("when the last move was not two tiles forward", () => {
          it("should not be able to take", () => {
            const state = {
              board: [
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, piece, opponentPiece],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null]
              ],
              selectedPiece: { row: 4, column: 6 },
              turn: "Black",
              moves: [
                {
                  piece: opponentPiece,
                  from: { row: 5, column: 7 },
                  to: { row: 4, column: 7 }
                }
              ]
            };
            expect(pawnMove(state, { row: 5, column: 7 })).toEqual(state);
          });
        });
      });
    });
  });
});
