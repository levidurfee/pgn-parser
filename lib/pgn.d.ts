export declare class Notation {
    notation: string;
    col?: string;
    row?: string;
    check?: boolean;
    fig?: string;
    promotion?: string;
    strike?: string;
    constructor(notation: string, col?: string, row?: string);
}
export declare class Move {
    moveNumber: number;
    notation: Notation;
    turn: string;
    commentAfter?: string;
    commentBefore?: string;
    commentMove?: string;
    nag?: string;
    constructor(moveNumber: number, notation: Notation, turn: string);
}
export declare class PGN {
    moves: Array<Move>;
    header?: string;
    constructor(moves: Array<Move>);
}
