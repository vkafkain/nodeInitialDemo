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
    rollScore: {
      type: DataTypes.INTEGER 
    },
    veredict: { 
      type: DataTypes.BOOLEAN
    }
    
  }, 
  {
    timestamps: false,
    tableName: 'games'
  });
  
  
  module.exports = Game;