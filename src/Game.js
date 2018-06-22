'use strict';
const FieldAlreadyPlayedException = require('./FieldAlreadyPlayedException');

class Field {
    constructor(row, column){
        this.row = row;
        this.column = column;
    }

    play(player){
        this.player = player;
    }

    get played () {
        return !!this.player;
    }
}

class Game {
    constructor() {
        this.players = ['X', 'O'];
        this.fields = this.makeFields();
    }

    makeFields() {
        let positions = [
            [1, 1],
            [1, 2],
            [1, 3],
            [2, 1],
            [2, 2],
            [2, 3],
            [3, 1],
            [3, 2],
            [3, 3],
        ];

        return positions.map(([row, column]) => new Field(row, column));
    }

    play(player, row, column){
        const field = this.fields
            .find(field => field.row === row && field.column === column);

        if(field.played){
            throw new FieldAlreadyPlayedException("Field already played");
        }

        field.play(player);
    }

    hasFieldBeenPlayed(row, column){
        return this.fields
            .find(field => field.row === row && field.column === column)
            .played;
    }

    playerWhoPlaysField(row, column) {
        return this.fields
            .find(field => field.row === row && field.column === column)
            .player;
    }

    get isFinished() {
        return this.fields.every(field => field.played);
    }
}

module.exports = Game;