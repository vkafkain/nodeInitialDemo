const { DataTypes } = require('sequelize');
const db = require('../database/db_sql');


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
    
const Game = db.define('Game', {
        id:{
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
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
          type: DataTypes.CHAR
        }
        
      }, 
      {
        timestamps: false,
        tableName: 'games'
      });

Player.hasMany(Game);
Game.belongsTo(Player);

     
module.exports = {Player, Game};