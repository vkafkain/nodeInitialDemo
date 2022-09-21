const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqid = require('uniqid');

const PlayerSchema = Schema({
    name: { type: String, unique: true },
    date: { type: Date, default: Date.now},
    rounds: { type: Number, default: 0},
    wins: { type: Number, default: 0},
    winRate: { type: Number, default: 0},
    games : [ {
        dice1: { type: Number},
        dice2: { type: Number},
        score: { type: Boolean},
        result: { type: String} 
    }]
});

PlayerSchema.statics.anonimous = function (name) {
    if (name == null || name == '') {
        return uniqid('ANONIM-');
    } else {
        return name;
    }
}


module.exports = mongoose.model('Player', PlayerSchema);