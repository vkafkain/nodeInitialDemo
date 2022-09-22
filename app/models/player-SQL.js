const { DataTypes } = require('sequelize');
const sequelize = require('../config/connectionSQL');

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
        type: DataTypes.DECIMAL(6, 2),
        defaultValue: 0
    }
},
{
    tableName: 'players'
});

module.exports = Player;