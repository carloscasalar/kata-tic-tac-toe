class Field {
    constructor(row, column){
        this.row = row;
        this.column = column;
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

}

module.exports = Game;