const {DataTypes} = require('sequelize');
const db = require('../database/db_sql');


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
    result: {
      type: DataTypes.INTEGER 
    },
    succes: { 
      type: DataTypes.BOOLEAN
    }
    
  }, 
  {
    tableName: 'games'
  });
  
  
  module.exports = Game;