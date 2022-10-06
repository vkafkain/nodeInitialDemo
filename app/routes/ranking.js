const {Router} = require('express');
const { getRanking, getLoser, getWinner } = require('../controllers/controllersMysql')
const router =  Router();

// GET /ranking: retorna un ranking de jugadors/es ordenat per percentatge d'èxits i el percentatge d’èxits mig del conjunt de tots els jugadors/es.
router.get('/', getRanking);

// GET /ranking/loser: retorna el jugador/a amb pitjor percentatge d’èxit.
router.get('/loser', getLoser);

// GET /ranking/winner: retorna el jugador/a amb millor percentatge d’èxit.
router.get('/winner', getWinner);

module.exports = router;