# pgn-parser

[![Build Status](https://travis-ci.org/levidurfee/pgn-parser.svg?branch=master)](https://travis-ci.org/levidurfee/pgn-parser)

Simple PGN parser built using [PEG.js](https://github.com/pegjs/pegjs). Grammar
file is from [PgnViewerJS](https://github.com/mliebelt/PgnViewerJS).

The function `parsePGN` returns an object with `history` and `header` properties.
It is up to you to handle everything it returns. There are no dependencies.
