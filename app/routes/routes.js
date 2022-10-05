const {Router} = require('express');
const { getPlayers, createPlayer, updatePlayer, playerRoll, deleteGames, getGames, getRanking, getLoser, getWinner } = require('../controllers/controllersMysql')
const router =  Router();

//GET /players: retorna el llistat de tots els jugadors/es del sistema amb el seu percentatge d’èxits.
router.get('/players', getPlayers);

//POST /players: crea un jugador/a.
router.post('/players', createPlayer);

//PUT /players/{id}: modifica el nom del jugador/a.
router.put('/players/:id', updatePlayer);

//POST /games/{id}: un jugador/a específic realitza una tirada.
router.post('/games/:id', playerRoll);

//DELETE /games/{id}: elimina les tirades del jugador/a.
router.delete('/games/:id', deleteGames);

// GET /games/{id}: retorna el llistat de jugades per un jugador/a. 
router.get('/games/:id', getGames);

// GET /ranking: retorna un ranking de jugadors/es ordenat per percentatge d'èxits i el percentatge d’èxits mig del conjunt de tots els jugadors/es.
router.get('/ranking', getRanking); //TODO percentatge mig conjunt jugadors

// GET /ranking/loser: retorna el jugador/a amb pitjor percentatge d’èxit.
router.get('/ranking/loser', getLoser);

// GET /ranking/winner: retorna el jugador/a amb millor percentatge d’èxit.
router.get('/ranking/winner', getWinner);


//TODO dar nombre anonimo a los anonimos
//TODO create data base if not exist

module.exports = router;