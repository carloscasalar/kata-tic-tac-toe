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
        this.fields
            .find(field => field.row === row && field.column === column)
            .play(player)
    }

    hasFieldBeenPlayed(row, column){
        return this.fields
            .find(field => field.row === row && field.column === column)
            .played;
    }
}

module.exports = Game;