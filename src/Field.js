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

module.exports = Field;
