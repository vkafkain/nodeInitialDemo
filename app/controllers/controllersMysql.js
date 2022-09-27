const Player = require('../models/Player-SQL');
const Games = require('../models/game-SQL');
const roll = require('../models/letsRoll');


const getPlayers = async (req, res) => {
    try{
        const players = await Player.findAll()
        res.json(players);
    }catch(error) {
        return res.status(500).json({ message: error.message })
    }
}

const getPlayer = async (req, res) => {
    try {
        const { id } = req.params;
        const player = await Player.findOne({
            where: {
                id,
            }
        });
        if(!player) return res.status(404).json( {message: "Player does not exist in db" } )

        res.json(player);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

const createPlayer = async (req, res) => {
    try {
        const {name} = req.body
        name ? true : name = 'ANONYMOUS';
        const newPlayer = await Player.create({
            name,
        });
        res.json(newPlayer);
    } catch (error) {
    return res.status(500).json({ message: error.message })
    }
}

const updatePlayer = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
    
        const player = await Player.findByPk(id);
        player.name = name;
        await player.save();
    
        res.json(player)
        
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


module.exports = { getPlayers, createPlayer, updatePlayer, getPlayer };