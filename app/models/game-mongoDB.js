const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = Schema({
    playerId: { type: Number, default: 0},
    dice1: { type: String, unique: true },
    dice2: { type: Date, default: Date.now},
    result: { type: Number, default: 0},
    winLose: { type: Boolean }
});


module.exports = mongoose.model('Player', PlayerSchema)