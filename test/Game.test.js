'use strict';

const Game = require('../src/Game');

const ROW_ONE = 1;
const COLUMN_ONE = 1;
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

test('all fields should have not be played after init', () => {
  expect(game.fields.some(field => field.played)).toBe(false);
});

test('a player should be able to mark a field', () => {
    game.play('X', ROW_ONE, COLUMN_ONE);
    expect(game.hasFieldBeenPlayed(ROW_ONE, COLUMN_ONE)).toBe(true);
});