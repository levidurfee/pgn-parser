export class Notation {
    notation: string;

    col?: string;
    row?: string;

    check?: boolean;
    fig?: string;
    promotion?: string;
    strike?: string;

    constructor(notation: string, col?: string, row?: string) {
        this.col = col;
        this.row = row;
        this.notation = notation;
    }
}

export class Move {
    moveNumber: number;
    notation: Notation;
    turn: string;

    commentAfter?: string;
    commentBefore?: string;
    commentMove?: string;
    nag?: string;

    constructor(moveNumber: number, notation: Notation, turn: string) {
        this.moveNumber = moveNumber;
        this.notation = notation;
        this.turn = turn;
    }
}

export class PGN {
    history: Array<Move>;

    header?: string;

    constructor(history: Array<Move>) {
        this.history = history;
    }
}
