const Player = require('../models/player-mongoDB');

class playerService {
   async checkName(name) {
    let result = await Player.find({name: {$eq: name}})
    return result;
   }
   async addPlayer(name) {
    let newPlayer = new Player({
        name: Player.anonimous(name)
    })
    await newPlayer.save()
    return newPlayer;
   }

}


module.exports = new playerService;

