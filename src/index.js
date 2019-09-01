"use strict";

const rules = require('./rules');

module.exports = function parsePGN(pgnString) {
    const lastHeaderElement = pgnString.lastIndexOf("]\n\n") + 1;
    const headerString = pgnString.substr(0, lastHeaderElement);
    const historyString = pgnString.substr(lastHeaderElement);

    //console.log(headerString, historyString);

    let strippedPGN = historyString.replace((/  |\t|\r\n|\n|\r/gm), " ");
    //console.log(strippedPGN);
    let parsedPGN = rules.parse(strippedPGN);

    return parsedPGN;
}
