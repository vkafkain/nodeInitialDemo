const {Router} = require('express');
const router =  Router();
const playerRouter = require('./players');
const gamesRouter = require('./games');
const rankingRouter = require('./ranking');

router.use('/players', playerRouter);
router.use('/games', gamesRouter);
router.use('/ranking', rankingRouter);

//TODO dar nombre anonimo a los anonimos
//TODO revisar tabulacion etc
//TODO separar routes en tipo

module.exports = router;