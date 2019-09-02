import {PGN, Move, Notation} from './pgn';

interface PEGParser {
    parse(input: string): any;
}

const rules: PEGParser = require('./rules.js');

export function pgn(pgnString: string) {
    const lastHeaderElement = pgnString.lastIndexOf("]\n\n") + 1;
    const headerString = pgnString.substr(0, lastHeaderElement);
    const historyString = pgnString.substr(lastHeaderElement);

    const strippedPGN = historyString.replace((/  |\t|\r\n|\n|\r/gm), '');
    const parsedPGN = rules.parse(strippedPGN)[0];

    let moves: Array<Move>;
    parsedPGN.map((mo: any, i: number) => {
        if((typeof mo) != "string") {
            let notation = new Notation(mo.notation.notation, mo.notation.col, mo.notation.row);
            let move = new Move(mo.moveNumber, notation, mo.turn);
            console.log(move);
        }
    });

    return {
        history: parsedPGN[0],
        header: headerString
    };
}
