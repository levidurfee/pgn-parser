const pgn = require('../lib/index.js');

var assert = require('assert');

var pgn1 = require('./game-1.js');
var pgn2 = require('./game-2.js');

describe('pgn1', function() {
  let result = pgn.pgn(pgn1);
  it('White makes the first move', function() {
    assert(result.moves[0].turn == "w");
  });
  it('First move is e4', function() {
    assert(result.moves[0].notation.notation == "e4");
    assert(result.moves[0].notation.col == "e");
    assert(result.moves[0].notation.row == "4");
  });
});

describe('pgn2', function() {
  let result = pgn.pgn(pgn2);
  it('White makes the first move', function() {
    assert(result.moves[0].turn == "w");
  });
  it('Has annotation', function() {
    assert(result.moves[3].commentAfter == "Not so good because d5 is weak here.");
  })
});
