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
