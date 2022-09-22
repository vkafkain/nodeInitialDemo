const {Router} = require('express');
const router =  Router();
const { newPlayer } = require('../controllers/controllers_SQL')

//POST /players: crea un jugador/a.
router.post('/players', newPlayer);

module.exports = router;