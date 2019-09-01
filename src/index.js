"use strict";

const rules = require('./rules');

module.exports = function parsePGN(pgnString) {
    const lastHeaderElement = pgnString.lastIndexOf("]\n\n") + 1;
    const headerString = pgnString.substr(0, lastHeaderElement);
    const historyString = pgnString.substr(lastHeaderElement);

    const strippedPGN = historyString.replace((/  |\t|\r\n|\n|\r/gm), '');
    const parsedPGN = rules.parse(strippedPGN);

    return {
        history: parsedPGN[0],
        header: headerString
    };
}
