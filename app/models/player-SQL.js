const { DataTypes } = require('sequelize');
const sequelize = require('../database/db_sql');
const Game = require('../models/Game-SQL');

const Player = sequelize.define('Player', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name : {
        type: DataTypes.STRING,
        unique: true,
    },
    games: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    gamesWin: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    winRate: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0
    }
},
{
    timestamps: 'true',
    createdAt: 'data',
    updatedAt: false,
    tableName: 'players'
});


Player.hasMany(Game, {onDelete:'cascade'});
Game.belongsTo(Player);


module.exports = Player;