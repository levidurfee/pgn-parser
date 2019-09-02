export class PGN {
  public moves: Moves[];

  public header?: string;

  constructor(moves: Moves[]) {
    this.moves = moves;
  }
}
