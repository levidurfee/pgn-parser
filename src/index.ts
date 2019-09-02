import { IPEGParser } from './ipegparser';
import { Move } from './move';
import { Notation } from './notation';
import { PGN } from './pgn';

const rules: IPEGParser = import('./rules.js');

export function pgn(pgnString: string): PGN {
  const lastHeaderElement = pgnString.lastIndexOf(']\n\n') + 1;
  const headerString = pgnString.substr(0, lastHeaderElement);
  const historyString = pgnString.substr(lastHeaderElement);

  const strippedPGN = historyString.replace(/  |\t|\r\n|\n|\r/gm, '');
  const parsedPGN = rules.parse(strippedPGN)[0];

  const moves: Moves[];
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

  const pgnObject = new PGN(moves);
  pgnObject.header = headerString;

  return pgnObject;
}
