import { Move } from './move';
export declare class PGN {
    moves: Move[];
    header?: string;
    constructor(moves: Move[]);
}
