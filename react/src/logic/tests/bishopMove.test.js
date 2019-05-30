import { bishopMove } from "../bishopMove";

describe("bishopMove", () => {
  describe("when it's whites turn", () => {
    const piece = { color: "White", piece: "Bishop" };
    const otherPiece = { color: "White", piece: "Pawn" };
    const opponentPiece = { color: "Black", piece: "Pawn" };
    it("should be able to move diagonally in all directions", () => {
      const state = {
        board: [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, piece, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ],
        selectedPiece: { row: 3, column: 4 },
        turn: "White",
        moves: []
      };
      expect(bishopMove(state, { row: 0, column: 0 })).toEqual(state);
      expect(bishopMove(state, { row: 0, column: 1 })).toEqual({
        board: [
          [null, piece, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ],
        selectedPiece: null,
        turn: "Black",
        moves: [
          { piece, from: { row: 3, column: 4 }, to: { row: 0, column: 1 } }
        ]
      });
      expect(bishopMove(state, { row: 0, column: 2 })).toEqual(state);
      expect(bishopMove(state, { row: 0, column: 3 })).toEqual(state);
      expect(bishopMove(state, { row: 0, column: 4 })).toEqual(state);
      expect(bishopMove(state, { row: 0, column: 5 })).toEqual(state);
      expect(bishopMove(state, { row: 0, column: 6 })).toEqual(state);
      expect(bishopMove(state, { row: 0, column: 7 })).toEqual({
        board: [
          [null, null, null, null, null, null, null, piece],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ],
        selectedPiece: null,
        turn: "Black",
        moves: [
          { piece, from: { row: 3, column: 4 }, to: { row: 0, column: 7 } }
        ]
      });
      expect(bishopMove(state, { row: 1, column: 0 })).toEqual(state);
      expect(bishopMove(state, { row: 1, column: 1 })).toEqual(state);
      expect(bishopMove(state, { row: 1, column: 2 })).toEqual({
        board: [
          [null, null, null, null, null, null, null, null],
          [null, null, piece, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ],
        selectedPiece: null,
        turn: "Black",
        moves: [
          { piece, from: { row: 3, column: 4 }, to: { row: 1, column: 2 } }
        ]
      });
      expect(bishopMove(state, { row: 1, column: 3 })).toEqual(state);
      expect(bishopMove(state, { row: 1, column: 4 })).toEqual(state);
      expect(bishopMove(state, { row: 1, column: 5 })).toEqual(state);
      expect(bishopMove(state, { row: 1, column: 6 })).toEqual({
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
        selectedPiece: null,
        turn: "Black",
        moves: [
          { piece, from: { row: 3, column: 4 }, to: { row: 1, column: 6 } }
        ]
      });
      expect(bishopMove(state, { row: 1, column: 7 })).toEqual(state);
      expect(bishopMove(state, { row: 2, column: 0 })).toEqual(state);
      expect(bishopMove(state, { row: 2, column: 1 })).toEqual(state);
      expect(bishopMove(state, { row: 2, column: 2 })).toEqual(state);
      expect(bishopMove(state, { row: 2, column: 3 })).toEqual({
        board: [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, piece, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ],
        selectedPiece: null,
        turn: "Black",
        moves: [
          { piece, from: { row: 3, column: 4 }, to: { row: 2, column: 3 } }
        ]
      });
      expect(bishopMove(state, { row: 2, column: 4 })).toEqual(state);
      expect(bishopMove(state, { row: 2, column: 5 })).toEqual({
        board: [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, piece, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ],
        selectedPiece: null,
        turn: "Black",
        moves: [
          { piece, from: { row: 3, column: 4 }, to: { row: 2, column: 5 } }
        ]
      });
      expect(bishopMove(state, { row: 2, column: 6 })).toEqual(state);
      expect(bishopMove(state, { row: 2, column: 7 })).toEqual(state);
      expect(bishopMove(state, { row: 3, column: 0 })).toEqual(state);
      expect(bishopMove(state, { row: 3, column: 1 })).toEqual(state);
      expect(bishopMove(state, { row: 3, column: 2 })).toEqual(state);
      expect(bishopMove(state, { row: 3, column: 3 })).toEqual(state);
      expect(bishopMove(state, { row: 3, column: 5 })).toEqual(state);
      expect(bishopMove(state, { row: 3, column: 6 })).toEqual(state);
      expect(bishopMove(state, { row: 3, column: 7 })).toEqual(state);
      expect(bishopMove(state, { row: 4, column: 0 })).toEqual(state);
      expect(bishopMove(state, { row: 4, column: 1 })).toEqual(state);
      expect(bishopMove(state, { row: 4, column: 2 })).toEqual(state);
      expect(bishopMove(state, { row: 4, column: 3 })).toEqual({
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
          { piece, from: { row: 3, column: 4 }, to: { row: 4, column: 3 } }
        ]
      });
      expect(bishopMove(state, { row: 4, column: 4 })).toEqual(state);
      expect(bishopMove(state, { row: 4, column: 5 })).toEqual({
        board: [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, piece, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ],
        selectedPiece: null,
        turn: "Black",
        moves: [
          { piece, from: { row: 3, column: 4 }, to: { row: 4, column: 5 } }
        ]
      });
      expect(bishopMove(state, { row: 4, column: 6 })).toEqual(state);
      expect(bishopMove(state, { row: 4, column: 7 })).toEqual(state);
      expect(bishopMove(state, { row: 5, column: 0 })).toEqual(state);
      expect(bishopMove(state, { row: 5, column: 1 })).toEqual(state);
      expect(bishopMove(state, { row: 5, column: 2 })).toEqual({
        board: [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, piece, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ],
        selectedPiece: null,
        turn: "Black",
        moves: [
          { piece, from: { row: 3, column: 4 }, to: { row: 5, column: 2 } }
        ]
      });
      expect(bishopMove(state, { row: 5, column: 3 })).toEqual(state);
      expect(bishopMove(state, { row: 5, column: 4 })).toEqual(state);
      expect(bishopMove(state, { row: 5, column: 5 })).toEqual(state);
      expect(bishopMove(state, { row: 5, column: 6 })).toEqual({
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
        turn: "Black",
        moves: [
          { piece, from: { row: 3, column: 4 }, to: { row: 5, column: 6 } }
        ]
      });
      expect(bishopMove(state, { row: 5, column: 7 })).toEqual(state);
      expect(bishopMove(state, { row: 6, column: 0 })).toEqual(state);
      expect(bishopMove(state, { row: 6, column: 1 })).toEqual({
        board: [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, piece, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ],
        selectedPiece: null,
        turn: "Black",
        moves: [
          { piece, from: { row: 3, column: 4 }, to: { row: 6, column: 1 } }
        ]
      });
      expect(bishopMove(state, { row: 6, column: 2 })).toEqual(state);
      expect(bishopMove(state, { row: 6, column: 3 })).toEqual(state);
      expect(bishopMove(state, { row: 6, column: 4 })).toEqual(state);
      expect(bishopMove(state, { row: 6, column: 5 })).toEqual(state);
      expect(bishopMove(state, { row: 6, column: 6 })).toEqual(state);
      expect(bishopMove(state, { row: 6, column: 7 })).toEqual({
        board: [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, piece],
          [null, null, null, null, null, null, null, null]
        ],
        selectedPiece: null,
        turn: "Black",
        moves: [
          { piece, from: { row: 3, column: 4 }, to: { row: 6, column: 7 } }
        ]
      });
      expect(bishopMove(state, { row: 7, column: 0 })).toEqual({
        board: [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [piece, null, null, null, null, null, null, null]
        ],
        selectedPiece: null,
        turn: "Black",
        moves: [
          { piece, from: { row: 3, column: 4 }, to: { row: 7, column: 0 } }
        ]
      });
      expect(bishopMove(state, { row: 7, column: 1 })).toEqual(state);
      expect(bishopMove(state, { row: 7, column: 2 })).toEqual(state);
      expect(bishopMove(state, { row: 7, column: 3 })).toEqual(state);
      expect(bishopMove(state, { row: 7, column: 4 })).toEqual(state);
      expect(bishopMove(state, { row: 7, column: 5 })).toEqual(state);
      expect(bishopMove(state, { row: 7, column: 6 })).toEqual(state);
      expect(bishopMove(state, { row: 7, column: 7 })).toEqual(state);
    });
    it("should not be able to move past other pieces", () => {
      const state = {
        board: [
          [null, null, null, null, null, null, null, otherPiece],
          [null, null, opponentPiece, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, piece, null, null, null],
          [null, null, null, null, null, otherPiece, null, null],
          [null, null, null, null, null, null, null, null],
          [null, opponentPiece, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ],
        selectedPiece: { row: 3, column: 4 },
        turn: "White",
        moves: []
      };
      expect(bishopMove(state, { row: 0, column: 1 })).toEqual(state);
      expect(bishopMove(state, { row: 0, column: 7 })).toEqual(state);
      expect(bishopMove(state, { row: 4, column: 5 })).toEqual(state);
      expect(bishopMove(state, { row: 5, column: 6 })).toEqual(state);
      expect(bishopMove(state, { row: 6, column: 7 })).toEqual(state);
      expect(bishopMove(state, { row: 7, column: 0 })).toEqual(state);
    });
    it("should be able to take opponent pieces", () => {
      const state = {
        board: [
          [null, null, null, null, null, null, null, opponentPiece],
          [null, null, opponentPiece, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, piece, null, null, null],
          [null, null, null, null, null, opponentPiece, null, null],
          [null, null, null, null, null, null, null, null],
          [null, opponentPiece, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ],
        selectedPiece: { row: 3, column: 4 },
        turn: "White",
        moves: []
      };
      expect(bishopMove(state, { row: 0, column: 7 })).toEqual({
        board: [
          [null, null, null, null, null, null, null, piece],
          [null, null, opponentPiece, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, opponentPiece, null, null],
          [null, null, null, null, null, null, null, null],
          [null, opponentPiece, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ],
        selectedPiece: null,
        turn: "Black",
        moves: [
          { piece, from: { row: 3, column: 4 }, to: { row: 0, column: 7 } }
        ]
      });
      expect(bishopMove(state, { row: 1, column: 2 })).toEqual({
        board: [
          [null, null, null, null, null, null, null, opponentPiece],
          [null, null, piece, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, opponentPiece, null, null],
          [null, null, null, null, null, null, null, null],
          [null, opponentPiece, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ],
        selectedPiece: null,
        turn: "Black",
        moves: [
          { piece, from: { row: 3, column: 4 }, to: { row: 1, column: 2 } }
        ]
      });
      expect(bishopMove(state, { row: 4, column: 5 })).toEqual({
        board: [
          [null, null, null, null, null, null, null, opponentPiece],
          [null, null, opponentPiece, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, piece, null, null],
          [null, null, null, null, null, null, null, null],
          [null, opponentPiece, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ],
        selectedPiece: null,
        turn: "Black",
        moves: [
          { piece, from: { row: 3, column: 4 }, to: { row: 4, column: 5 } }
        ]
      });
      expect(bishopMove(state, { row: 6, column: 1 })).toEqual({
        board: [
          [null, null, null, null, null, null, null, opponentPiece],
          [null, null, opponentPiece, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, opponentPiece, null, null],
          [null, null, null, null, null, null, null, null],
          [null, piece, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ],
        selectedPiece: null,
        turn: "Black",
        moves: [
          { piece, from: { row: 3, column: 4 }, to: { row: 5, column: 1 } }
        ]
      });
    });
  });
  describe("when it's black turn", () => {
    const piece = { color: "Black", piece: "Bishop" };
    const otherPiece = { color: "Black", piece: "Pawn" };
    const opponentPiece = { color: "White", piece: "Pawn" };
    it("should be able to move diagonally in all directions", () => {
      const state = {
        board: [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, piece, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ],
        selectedPiece: { row: 3, column: 4 },
        turn: "Black",
        moves: []
      };
      expect(bishopMove(state, { row: 0, column: 0 })).toEqual(state);
      expect(bishopMove(state, { row: 0, column: 1 })).toEqual({
        board: [
          [null, piece, null, null, null, null, null, null],
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
          { piece, from: { row: 3, column: 4 }, to: { row: 0, column: 1 } }
        ]
      });
      expect(bishopMove(state, { row: 0, column: 2 })).toEqual(state);
      expect(bishopMove(state, { row: 0, column: 3 })).toEqual(state);
      expect(bishopMove(state, { row: 0, column: 4 })).toEqual(state);
      expect(bishopMove(state, { row: 0, column: 5 })).toEqual(state);
      expect(bishopMove(state, { row: 0, column: 6 })).toEqual(state);
      expect(bishopMove(state, { row: 0, column: 7 })).toEqual({
        board: [
          [null, null, null, null, null, null, null, piece],
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
          { piece, from: { row: 3, column: 4 }, to: { row: 0, column: 7 } }
        ]
      });
      expect(bishopMove(state, { row: 1, column: 0 })).toEqual(state);
      expect(bishopMove(state, { row: 1, column: 1 })).toEqual(state);
      expect(bishopMove(state, { row: 1, column: 2 })).toEqual({
        board: [
          [null, null, null, null, null, null, null, null],
          [null, null, piece, null, null, null, null, null],
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
          { piece, from: { row: 3, column: 4 }, to: { row: 1, column: 2 } }
        ]
      });
      expect(bishopMove(state, { row: 1, column: 3 })).toEqual(state);
      expect(bishopMove(state, { row: 1, column: 4 })).toEqual(state);
      expect(bishopMove(state, { row: 1, column: 5 })).toEqual(state);
      expect(bishopMove(state, { row: 1, column: 6 })).toEqual({
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
        selectedPiece: null,
        turn: "White",
        moves: [
          { piece, from: { row: 3, column: 4 }, to: { row: 1, column: 6 } }
        ]
      });
      expect(bishopMove(state, { row: 1, column: 7 })).toEqual(state);
      expect(bishopMove(state, { row: 2, column: 0 })).toEqual(state);
      expect(bishopMove(state, { row: 2, column: 1 })).toEqual(state);
      expect(bishopMove(state, { row: 2, column: 2 })).toEqual(state);
      expect(bishopMove(state, { row: 2, column: 3 })).toEqual({
        board: [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, piece, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ],
        selectedPiece: null,
        turn: "White",
        moves: [
          { piece, from: { row: 3, column: 4 }, to: { row: 2, column: 3 } }
        ]
      });
      expect(bishopMove(state, { row: 2, column: 4 })).toEqual(state);
      expect(bishopMove(state, { row: 2, column: 5 })).toEqual({
        board: [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, piece, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ],
        selectedPiece: null,
        turn: "White",
        moves: [
          { piece, from: { row: 3, column: 4 }, to: { row: 2, column: 5 } }
        ]
      });
      expect(bishopMove(state, { row: 2, column: 6 })).toEqual(state);
      expect(bishopMove(state, { row: 2, column: 7 })).toEqual(state);
      expect(bishopMove(state, { row: 3, column: 0 })).toEqual(state);
      expect(bishopMove(state, { row: 3, column: 1 })).toEqual(state);
      expect(bishopMove(state, { row: 3, column: 2 })).toEqual(state);
      expect(bishopMove(state, { row: 3, column: 3 })).toEqual(state);
      expect(bishopMove(state, { row: 3, column: 5 })).toEqual(state);
      expect(bishopMove(state, { row: 3, column: 6 })).toEqual(state);
      expect(bishopMove(state, { row: 3, column: 7 })).toEqual(state);
      expect(bishopMove(state, { row: 4, column: 0 })).toEqual(state);
      expect(bishopMove(state, { row: 4, column: 1 })).toEqual(state);
      expect(bishopMove(state, { row: 4, column: 2 })).toEqual(state);
      expect(bishopMove(state, { row: 4, column: 3 })).toEqual({
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
        turn: "White",
        moves: [
          { piece, from: { row: 3, column: 4 }, to: { row: 4, column: 3 } }
        ]
      });
      expect(bishopMove(state, { row: 4, column: 4 })).toEqual(state);
      expect(bishopMove(state, { row: 4, column: 5 })).toEqual({
        board: [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, piece, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ],
        selectedPiece: null,
        turn: "White",
        moves: [
          { piece, from: { row: 3, column: 4 }, to: { row: 4, column: 5 } }
        ]
      });
      expect(bishopMove(state, { row: 4, column: 6 })).toEqual(state);
      expect(bishopMove(state, { row: 4, column: 7 })).toEqual(state);
      expect(bishopMove(state, { row: 5, column: 0 })).toEqual(state);
      expect(bishopMove(state, { row: 5, column: 1 })).toEqual(state);
      expect(bishopMove(state, { row: 5, column: 2 })).toEqual({
        board: [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, piece, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ],
        selectedPiece: null,
        turn: "White",
        moves: [
          { piece, from: { row: 3, column: 4 }, to: { row: 5, column: 2 } }
        ]
      });
      expect(bishopMove(state, { row: 5, column: 3 })).toEqual(state);
      expect(bishopMove(state, { row: 5, column: 4 })).toEqual(state);
      expect(bishopMove(state, { row: 5, column: 5 })).toEqual(state);
      expect(bishopMove(state, { row: 5, column: 6 })).toEqual({
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
          { piece, from: { row: 3, column: 4 }, to: { row: 5, column: 6 } }
        ]
      });
      expect(bishopMove(state, { row: 5, column: 7 })).toEqual(state);
      expect(bishopMove(state, { row: 6, column: 0 })).toEqual(state);
      expect(bishopMove(state, { row: 6, column: 1 })).toEqual({
        board: [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, piece, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ],
        selectedPiece: null,
        turn: "White",
        moves: [
          { piece, from: { row: 3, column: 4 }, to: { row: 6, column: 1 } }
        ]
      });
      expect(bishopMove(state, { row: 6, column: 2 })).toEqual(state);
      expect(bishopMove(state, { row: 6, column: 3 })).toEqual(state);
      expect(bishopMove(state, { row: 6, column: 4 })).toEqual(state);
      expect(bishopMove(state, { row: 6, column: 5 })).toEqual(state);
      expect(bishopMove(state, { row: 6, column: 6 })).toEqual(state);
      expect(bishopMove(state, { row: 6, column: 7 })).toEqual({
        board: [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, piece],
          [null, null, null, null, null, null, null, null]
        ],
        selectedPiece: null,
        turn: "White",
        moves: [
          { piece, from: { row: 3, column: 4 }, to: { row: 6, column: 7 } }
        ]
      });
      expect(bishopMove(state, { row: 7, column: 0 })).toEqual({
        board: [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [piece, null, null, null, null, null, null, null]
        ],
        selectedPiece: null,
        turn: "White",
        moves: [
          { piece, from: { row: 3, column: 4 }, to: { row: 7, column: 0 } }
        ]
      });
      expect(bishopMove(state, { row: 7, column: 1 })).toEqual(state);
      expect(bishopMove(state, { row: 7, column: 2 })).toEqual(state);
      expect(bishopMove(state, { row: 7, column: 3 })).toEqual(state);
      expect(bishopMove(state, { row: 7, column: 4 })).toEqual(state);
      expect(bishopMove(state, { row: 7, column: 5 })).toEqual(state);
      expect(bishopMove(state, { row: 7, column: 6 })).toEqual(state);
      expect(bishopMove(state, { row: 7, column: 7 })).toEqual(state);
    });
    it("should not be able to move past other pieces", () => {
      const state = {
        board: [
          [null, null, null, null, null, null, null, otherPiece],
          [null, null, opponentPiece, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, piece, null, null, null],
          [null, null, null, null, null, otherPiece, null, null],
          [null, null, null, null, null, null, null, null],
          [null, opponentPiece, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ],
        selectedPiece: { row: 3, column: 4 },
        turn: "Black",
        moves: []
      };
      expect(bishopMove(state, { row: 0, column: 1 })).toEqual(state);
      expect(bishopMove(state, { row: 0, column: 7 })).toEqual(state);
      expect(bishopMove(state, { row: 4, column: 5 })).toEqual(state);
      expect(bishopMove(state, { row: 5, column: 6 })).toEqual(state);
      expect(bishopMove(state, { row: 6, column: 7 })).toEqual(state);
      expect(bishopMove(state, { row: 7, column: 0 })).toEqual(state);
    });
    it("should be able to take opponent pieces", () => {
      const state = {
        board: [
          [null, null, null, null, null, null, null, opponentPiece],
          [null, null, opponentPiece, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, piece, null, null, null],
          [null, null, null, null, null, opponentPiece, null, null],
          [null, null, null, null, null, null, null, null],
          [null, opponentPiece, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ],
        selectedPiece: { row: 3, column: 4 },
        turn: "Black",
        moves: []
      };
      expect(bishopMove(state, { row: 0, column: 7 })).toEqual({
        board: [
          [null, null, null, null, null, null, null, piece],
          [null, null, opponentPiece, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, opponentPiece, null, null],
          [null, null, null, null, null, null, null, null],
          [null, opponentPiece, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ],
        selectedPiece: null,
        turn: "White",
        moves: [
          { piece, from: { row: 3, column: 4 }, to: { row: 0, column: 7 } }
        ]
      });
      expect(bishopMove(state, { row: 1, column: 2 })).toEqual({
        board: [
          [null, null, null, null, null, null, null, opponentPiece],
          [null, null, piece, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, opponentPiece, null, null],
          [null, null, null, null, null, null, null, null],
          [null, opponentPiece, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ],
        selectedPiece: null,
        turn: "White",
        moves: [
          { piece, from: { row: 3, column: 4 }, to: { row: 1, column: 2 } }
        ]
      });
      expect(bishopMove(state, { row: 4, column: 5 })).toEqual({
        board: [
          [null, null, null, null, null, null, null, opponentPiece],
          [null, null, opponentPiece, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, piece, null, null],
          [null, null, null, null, null, null, null, null],
          [null, opponentPiece, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ],
        selectedPiece: null,
        turn: "White",
        moves: [
          { piece, from: { row: 3, column: 4 }, to: { row: 4, column: 5 } }
        ]
      });
      expect(bishopMove(state, { row: 6, column: 1 })).toEqual({
        board: [
          [null, null, null, null, null, null, null, opponentPiece],
          [null, null, opponentPiece, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, opponentPiece, null, null],
          [null, null, null, null, null, null, null, null],
          [null, piece, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null]
        ],
        selectedPiece: null,
        turn: "White",
        moves: [
          { piece, from: { row: 3, column: 4 }, to: { row: 5, column: 1 } }
        ]
      });
    });
  });
});
