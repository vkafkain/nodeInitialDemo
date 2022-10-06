const { Player } = require("../models/Player");

const getRanking = async (req, res) => {
  try {
    const ranking = await Player.findAll({
      attributes: ["id", "name", "games", "gamesWin", "winRate"],
      order: [
        ["winRate", "DESC"],
        ["games", "DESC"],
      ],
    });

    const players = await Player.count();
    const avgWinRate = await Player.sum("winRate");
    const winRate = avgWinRate / players;

    res.status(200).json({ ranking, winRate });
  } catch (error) {
    return res.status(404).json({ message: "Error getting ranking" });
  }
};

const getLoser = async (req, res) => {
  try {
    let loser = await Player.findOne({
      attributes: ["id", "name", "games", "gamesWin", "winRate"],
      order: [["winRate", "ASC"]],
    });
    res.status(200).json(loser);
  } catch (error) {
    return res.status(404).json({ message: "Error getting looser" });
  }
};

const getWinner = async (req, res) => {
  try {
    let winner = await Player.findOne({
      attributes: ["id", "name", "games", "gamesWin", "winRate"],
      order: [["winRate", "DESC"]],
    });
    res.status(200).json(winner);
  } catch (error) {
    return res.status(404).json({ message: "Error getting winner" });
  }
};

module.exports = { getRanking, getLoser, getWinner };
