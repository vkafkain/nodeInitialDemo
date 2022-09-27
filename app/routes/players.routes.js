const {Router} = require('express');
const { getPlayers, createPlayer, updatePlayer, getPlayer } = require('../controllers/players.controllers')
const router =  Router();

router.get('/players', getPlayers);
router.post('/players', createPlayer);
router.put('/players/:id', updatePlayer);
router.delete('/players/:id');
router.get('/players/:id', getPlayer);




module.exports = router;