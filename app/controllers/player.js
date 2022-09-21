const player = require('../services/player');


class playerController {
    
    async newPlayer(req, res){
        try { 
            const { name } = req.body;
            const findPlayer = await player.checkName(name);
            if (findPlayer.length === 0) {
                const playerCreated = await player.addPlayer(name);
                res.status(200).json({
                    message: `${name} has added to DB with ID ${playerCreated._id} `
                })
            } else {
                res.status(400).json({
                    message: `That name is already in use`})
            }
        }catch(err) {
            res.status(400).json({ error: err })
        }
    }
}





