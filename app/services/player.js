const Player = require('../models/player-mongoDB');
const {Sequelize} = require('sequelize');

class playerService {
   async checkName(name) {
    let result = await Player.findAll({ where: { name } })
        return result;
   }
   async addPlayer(name) {
    let newPlayer = new Player({
        name: Player.anonimous(name)
    })
    await newPlayer.create({ name })
    return newPlayer;
   }

}


module.exports = new playerService;

