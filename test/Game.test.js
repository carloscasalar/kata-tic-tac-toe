'use strict';

const Game = require('../src/Game');
const FieldAlreadyPlayedException = require('../src/FieldAlreadyPlayedException');

const ROW_ONE = 1;
const COLUMN_ONE = 1;
const FIRST_PLAYER = 'X';
const SECOND_PLAYER = 'O';
let game;

beforeEach(() => {
    game = new Game(FIRST_PLAYER);
});

test('initialized game should have two players', () => {
    expect(game.players).toEqual(['X', 'O']);
});

test('before any turn has been taken, next player should be first player', () => {
    expect(game.nextPlayer).toEqual(FIRST_PLAYER);
});

test('after take first turn, next player should be second player', () => {
   game.playTurn(ROW_ONE, COLUMN_ONE);
   expect(game.nextPlayer).toEqual(SECOND_PLAYER);
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

test('if all field has been played game should be finished', () => {
    game.fields.forEach(field => game.play('X', field.row, field.column));
    expect(game.isFinished).toBe(true);
});

test('if a field has already been played it should not be able to be played again', () => {
    game.play('X', ROW_ONE, COLUMN_ONE);

    expect(() => game.play('O', ROW_ONE, COLUMN_ONE)).toThrowError(FieldAlreadyPlayedException);
    expect(game.playerWhoPlaysField(ROW_ONE, COLUMN_ONE)).toEqual('X');
});
