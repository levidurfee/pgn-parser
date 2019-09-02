# pgn-parser

[![Build Status](https://travis-ci.org/levidurfee/pgn-parser.svg?branch=master)](https://travis-ci.org/levidurfee/pgn-parser)

Simple PGN parser built using [PEG.js](https://github.com/pegjs/pegjs). Grammar
file is from [PgnViewerJS](https://github.com/mliebelt/PgnViewerJS).

## install

```sh
npm i @levidurfee/pgn-parser
```

## usage

### basic

```js
import { pgn } from '@levidurfee/pgn-parser';

let po = pgn("1. e4 e5 2. Nf3 Nc6 3. Bb5");

console.log(po);

// PGN {moves: Array(5), header: ""}
// header: ""
// moves: Array(5)
// 0: Move {moveNumber: 1, notation: Notation, turn: "w", commentAfter: null, commentBefore: null, …}
// 1: Move {moveNumber: null, notation: Notation, turn: "b", commentAfter: null, commentBefore: null, …}
// 2: Move {moveNumber: 2, notation: Notation, turn: "w", commentAfter: null, commentBefore: null, …}
// 3: Move {moveNumber: null, notation: Notation, turn: "b", commentAfter: null, commentBefore: null, …}
// 4: Move {moveNumber: 3, notation: Notation, turn: "w", commentAfter: null, commentBefore: null, …}
// length: 5
```

### import alias

```js
import { pgn as pgnParser } from '@levidurfee/pgn-parser';

let pgn = pgnParser("1. e4 e5 2. Nf3 Nc6 3. Bb5");

console.log(pgn);

// PGN {moves: Array(5), header: ""}
// header: ""
// moves: Array(5)
// 0: Move {moveNumber: 1, notation: Notation, turn: "w", commentAfter: null, commentBefore: null, …}
// 1: Move {moveNumber: null, notation: Notation, turn: "b", commentAfter: null, commentBefore: null, …}
// 2: Move {moveNumber: 2, notation: Notation, turn: "w", commentAfter: null, commentBefore: null, …}
// 3: Move {moveNumber: null, notation: Notation, turn: "b", commentAfter: null, commentBefore: null, …}
// 4: Move {moveNumber: 3, notation: Notation, turn: "w", commentAfter: null, commentBefore: null, …}
// length: 5
```
