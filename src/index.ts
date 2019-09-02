import { Move, Notation, PGN } from './pgn';

interface IPEGParser {
  parse(input: string): any;
}

const rules: IPEGParser = require('./rules.js');

export function pgn(pgnString: string): PGN {
  const lastHeaderElement = pgnString.lastIndexOf(']\n\n') + 1;
  const headerString = pgnString.substr(0, lastHeaderElement);
  const historyString = pgnString.substr(lastHeaderElement);

  const strippedPGN = historyString.replace(/  |\t|\r\n|\n|\r/gm, '');
  const parsedPGN = rules.parse(strippedPGN)[0];

  const moves: Array<Move> = [];
  parsedPGN.map((mo: any, i: number) => {
    if (typeof mo !== 'string') {
      const notation = new Notation(mo.notation.notation, mo.notation.col, mo.notation.row);
      const move = new Move(mo.moveNumber, notation, mo.turn);
      move.commentAfter = mo.commentAfter;
      move.commentBefore = mo.commentBefore;
      move.commentMove = mo.commentMove;
      moves.push(move);
    }
  });

  let pgn = new PGN(moves);
  pgn.header = headerString;

  return pgn;
}
