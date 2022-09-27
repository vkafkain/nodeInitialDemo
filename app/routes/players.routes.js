const {Router} = require('express');
const { getPlayers, createPlayer, updatePlayer } = require('../controllers/players.controllers')
const router =  Router();

//GET /players: retorna el llistat de tots els jugadors/es del sistema amb el seu percentatge d’èxits.
router.get('/players', getPlayers);
//POST /players: crea un jugador/a.
router.post('/players', createPlayer);
//PUT /players/{id}: modifica el nom del jugador/a.
router.put('/players/:id', updatePlayer);





module.exports = router;