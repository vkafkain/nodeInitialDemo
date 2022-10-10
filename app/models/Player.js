const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/dbSQL");
const { Game } = require("./Game");

const Player = sequelize.define(
  "Player",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gamesPlayed: {
      type: DataTypes.STRING,
      defaultValue: 0,
    },
    gamesWin: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    winRate: {
      type: DataTypes.DECIMAL(5, 2),
      defaultValue: 0,
    },
  },
  {
    timestamps: false,
    createdAt: "data",
    updatedAt: false,
    tableName: "players",
  }
);

Player.hasMany(Game, { onDelete: "cascade" });
Game.belongsTo(Player);

module.exports = { Player };