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
