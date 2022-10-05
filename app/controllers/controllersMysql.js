// const Game = require('../models/game-SQL');
const { Player, Game } = require('../models/modelSQL');
const rollDices = require('../models/letsRoll');
const {Sequelize} = require('sequelize');
const sequelize = require('../database/db_sql');

const getPlayers = async (req, res) => {
    try{
        const players = await Player.findAll();
        res.status(200).json(players);
    }catch(error) {
        return res.status(404).json({ message: 'Error getting players' });
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

        res.status(200).json(player);
    } catch (error) {
        return res.status(404).json({ message: 'Error getting player' });
    }

}

const createPlayer = async (req, res) => {
    try {
        const { name } = req.body;
        name ? true : NAME = 'ANONYMOUS';
        const newPlayer = await Player.create({
            name,
        });
        res.status(201).json({ player: newPlayer });
    } catch (error) {
        return res.status(400).json({ message: 'Unable to create player' })
    }
}

const updatePlayer = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const player = await Player.findByPk(id);
        player.name = name;
        await player.save();
    
        res.status(200).json(player);
        
    } catch (error) {
        return res.status(400).json({ message: 'Could not update player' })
    }
}

const playerRoll = async(req, res) => {
    
    try {
        const playerId = req.params.id
        const { dice1, dice2, rollScore, veredict } = rollDices();
        const roll = await Game.create({ dice1, dice2, rollScore, veredict, playerId })
    
    let arrayGames = [];

    if(veredict === 'win') {
        Player.increment(['games', 'gamesWin'], {where: { id:playerId } });
    }
    if(veredict === 'lose') {
        Player.increment(['games'],{ where: { id: playerId} });
    }

    const player = await Player.findAll( { attributes: [ 'games', 'gamesWin'], where: { id: playerId }} );

    arrayGames.push(player);

    const { games, gamesWin} = arrayGames[0][0].dataValues;
    const winRate = (gamesWin / games) * 100;
    
    await Player.update( { winRate }, { where: { id: playerId } });

    const playerRolled = await Player.findAll({ attributes: ['name'], where: { id: playerId}});

    res.status(200).json( {
        playerRolled,
        roll
    });
    } catch (error){
        return res.status(400).json({ error })
    }
}

const deleteGames = async(req, res) => {
    const id = req.params.id
    
    try {
        await Game.destroy( { where: { id: id }});

        await Player.update({
            games: 0,
            gamesWin: 0,
            winRate: 0
        }, { where: { id: id }});

        const player = await Player.findAll( { where: { id: id}});

        res.status(200).json({
            player
        });
    } catch(error){
        return res.status(400).json({ message: 'Could not remove player'})
    }
    id
}

const getGames = async (req, res) => {
    const idPlayer = req.params.id;

    try{
        const games = await Game.findAll({
            where: { playerId: idPlayer }
        });

        res.status(200).json(games);

    } catch(error){
        return res.status(404).json({ message: error });
    }
}

const getRanking = async (req, res) => {

    try {
    let ranking = await Player.findAll({
        attributes: ['id', 'name', 'games', 'gamesWin', 'winRate'],
        order: [['winRate', 'DESC'], ['games', 'DESC']]});

        res.status(200).json(ranking);
    } catch (error) {
        return res.status(404).json({ message: 'Error getting ranking' });
    }
};

const getLoser = async (req, res) => {  
    try{
        let loser = await Player.findOne({
            attributes: ['id', 'name', 'games', 'gamesWin', 'winRate'],
            order:[['winRate', 'ASC']]
        });
        res.status(200).json(loser);
    }catch(error){
        return res.status(404).json({ message: 'Error getting looser' });
    }
}

const getWinner = async (req, res) => {
    try{
        let winner = await Player.findOne({
            attributes: ['id', 'name', 'games', 'gamesWin', 'winRate'],
            order:[['winRate', 'DESC']]
        });
        res.status(200).json(winner);
    }catch(error){
        return res.status(404).json({ message: 'Error getting winner' });
    }
}

module.exports = { getPlayers, createPlayer, updatePlayer, getPlayer, playerRoll, deleteGames, getGames, getRanking, getLoser, getWinner };