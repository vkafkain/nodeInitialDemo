const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/dbSQL");

const Game = sequelize.define(
  "Game",
  {
    dice1: {
      type: DataTypes.INTEGER,
    },
    dice2: {
      type: DataTypes.INTEGER,
    },
    rollScore: {
      type: DataTypes.INTEGER,
    },
    veredict: {
      type: DataTypes.CHAR,
    },
  },
  {
    timestamps: false,
    tableName: "games",
  }
);

module.exports = { Game }