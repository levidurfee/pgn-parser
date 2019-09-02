import { Move } from './move';

export class PGN {
  public moves: Move[];

  public header?: string;

  constructor(moves: Move[]) {
    this.moves = moves;
  }
}
