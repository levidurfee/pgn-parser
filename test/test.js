const parsePGN = require('../src/index.js');

var assert = require('assert');

var pgn1 = require('./game-1.js');
var pgn2 = require('./game-2.js');

describe('pgn1', function() {
  let result = parsePGN(pgn1);
  it('White makes the first move', function() {
    assert(result.history[0].turn == "w");
  });
  it('First move is e4', function() {
    assert(result.history[0].notation.notation == "e4");
    assert(result.history[0].notation.col == "e");
    assert(result.history[0].notation.row == "4");
  });
});

describe('pgn2', function() {
  let result = parsePGN(pgn2);
  it('White makes the first move', function() {
    assert(result.history[0].turn == "w");
  });
  it('Has annotation', function() {
    assert(result.history[3].commentAfter == "Not so good because d5 is weak here.");
  })
});
