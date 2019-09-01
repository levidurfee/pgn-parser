"use strict";

const rules = require('./rules');

module.exports = function parsePGN(pgn) {
    let strippedPGN = pgn.replace((/  |\t|\r\n|\n|\r/gm),"");
    let parsedPGN = rules.parse(strippedPGN);

    return parsedPGN;
}
