const { DataTypes } = require('sequelize');
const {db} = require('../database/dbSQL');

const Game = db.define('Game', {
    dice1: {
      type: DataTypes.INTEGER
    },
    dice2: {
      type: DataTypes.INTEGER
    },
    rollScore: {
      type: DataTypes.INTEGER 
    },
    veredict: { 
      type: DataTypes.STRING
    }
    
  }, 
  {
    timestamps: false,
    tableName: 'games'
  });

const Player = db.define('Player', {
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
        type: DataTypes.STRING,
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
      timestamps: false,
      createdAt: 'data',
      updatedAt: false,
      tableName: 'players'
    });

Player.hasMany(Game, {onDelete:'cascade'});
Game.belongsTo(Player);

Player.sync()
.then()
.catch(err => console.log(err));

Game.sync()
.then()
.catch(err => console.log(err))


module.exports = {Player, Game};