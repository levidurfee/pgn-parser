"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Notation = /** @class */ (function () {
    function Notation(notation, col, row) {
        this.col = col;
        this.row = row;
        this.notation = notation;
    }
    return Notation;
}());
exports.Notation = Notation;
var Move = /** @class */ (function () {
    function Move(moveNumber, notation, turn) {
        this.moveNumber = moveNumber;
        this.notation = notation;
        this.turn = turn;
    }
    return Move;
}());
exports.Move = Move;
var PGN = /** @class */ (function () {
    function PGN(moves) {
        this.moves = moves;
    }
    return PGN;
}());
exports.PGN = PGN;
