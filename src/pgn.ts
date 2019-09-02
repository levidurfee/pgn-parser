export class Notation {
  public notation: string;

  public col?: string;
  public row?: string;

  public check?: boolean;
  public fig?: string;
  public promotion?: string;
  public strike?: string;

  constructor(notation: string, col?: string, row?: string) {
    this.col = col;
    this.row = row;
    this.notation = notation;
  }
}

export class Move {
  public moveNumber: number;
  public notation: Notation;
  public turn: string;

  public commentAfter?: string;
  public commentBefore?: string;
  public commentMove?: string;
  public nag?: string;

  constructor(moveNumber: number, notation: Notation, turn: string) {
    this.moveNumber = moveNumber;
    this.notation = notation;
    this.turn = turn;
  }
}

export class PGN {
  public moves: Array<Move>;

  public header?: string;

  constructor(moves: Array<Move>) {
    this.moves = moves;
  }
}
