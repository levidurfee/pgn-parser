"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pgn_1 = require("./pgn");
var rules = require('./rules.js');
function pgn(pgnString) {
    var lastHeaderElement = pgnString.lastIndexOf("]\n\n") + 1;
    var headerString = pgnString.substr(0, lastHeaderElement);
    var historyString = pgnString.substr(lastHeaderElement);
    var strippedPGN = historyString.replace((/  |\t|\r\n|\n|\r/gm), '');
    var parsedPGN = rules.parse(strippedPGN)[0];
    var moves = [];
    parsedPGN.map(function (mo, i) {
        if ((typeof mo) != "string") {
            var notation = new pgn_1.Notation(mo.notation.notation, mo.notation.col, mo.notation.row);
            var move = new pgn_1.Move(mo.moveNumber, notation, mo.turn);
            move.commentAfter = mo.commentAfter;
            move.commentBefore = mo.commentBefore;
            move.commentMove = mo.commentMove;
            moves.push(move);
        }
    });
    var pgn = new pgn_1.PGN(moves);
    pgn.header = headerString;
    return pgn;
}
exports.pgn = pgn;
