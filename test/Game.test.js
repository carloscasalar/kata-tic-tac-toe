'use strict';

const Game = require('../src/Game');

let game;
beforeEach(() => {
  game = new Game();
});

test('initialized game should have two players', () => {
  expect(game.players).toEqual(['X', 'O']);
});

test('a game should have nine fields in a 3x3 grid', () => {
  expect(game.fields.length).toEqual(9)
});