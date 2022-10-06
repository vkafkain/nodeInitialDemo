const {Router} = require('express');
const { getPlayers, createPlayer, updatePlayer } = require('../controllers/controllersMysql')
const router =  Router();

//GET /players: retorna el llistat de tots els jugadors/es del sistema amb el seu percentatge d’èxits.
router.get('/', getPlayers);

//POST /players: crea un jugador/a.
router.post('/', createPlayer);

//PUT /players/{id}: modifica el nom del jugador/a.
router.put('/:id', updatePlayer);

module.exports = router;