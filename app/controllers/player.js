const { Player } = require('../models/player-SQL');
const Sequelize = require('sequelize');


class PlayerController {
    
    async newPlayer(req, res){
        try { 
            const { name } = req.body;
            name ? true : name = 'Anonymous';
            const addPlayer = await Player.create({name});
            res.status(201).json({player: addPlayer})
        } catch(err) {
            res.status(400).json({ error: err })
        }
    }

}

module.exports = PlayerController;



