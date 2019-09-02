import { Notation } from './notation';
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
