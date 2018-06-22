class FieldAlreadyPlayedException extends Error {
    constructor(message){
        super(message);
    }
}

module.exports = FieldAlreadyPlayedException;