const {Sequelize} = require("sequelize");
const { Player }= require('../models/player-SQL');
const { connectDB } = require('../config/connectionSQL');
const player = require("../services/player");

class playerController {

    async newPlayer(req, res){
    try {
      const { name } = req.body.new;
      const playerFound = await player.checkName(name);
      if (playerFound.length === 0) {
        const playerCreated = await player.addPlayer(name)
      }
    } catch (err){
      res.status(500).json({error: err.message})
    }
  }
}
  module.exports = new playerController;