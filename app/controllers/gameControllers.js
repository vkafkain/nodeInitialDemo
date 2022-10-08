const { Player } = require("../models/Player");
const { Game } = require("../models/Game");
const rollDices = require("../services/letsRoll");

const playerRoll = async (req, res) => {
  const PlayerId = req.params.id;
  const { dice1, dice2, rollScore, veredict } = rollDices();
/*   try {
    const roll = await Game.create({
      dice1,
      dice2,
      rollScore,
      veredict,
      PlayerId,
    });

    let arrayGames = [];

    if (veredict === "win") {
      Player.increment(["gamesPlayed", "gamesWin"], {
        where: { id: PlayerId },
      });
    }
    if (veredict === "lose") {
      Player.increment(["gamesPlayed"], { where: { id: PlayerId } });
    }
    const player = await Player.findAll({
      attributes: ["gamesPlayed", "gamesWin"],
      where: { id: PlayerId },
    });
    console.log(player);

    arrayGames.push(player);

    const { gamesPlayed, gamesWin } = arrayGames[0][0].dataValues;
    console.log(gamesWin, gamesPlayed);
    const winRate = (gamesWin / gamesPlayed) * 100;

    await Player.update({ winRate }, { where: { id: PlayerId } });
    console.log(player);

    const playerRolled = await Player.findAll({
      attributes: ["name"],
      where: { id: PlayerId },
    });

    res.status(200).json({
      playerRolled,
      roll,
    });
  } catch (error) {
    return res.status(400).json({ message: "Game Error" });
  } */
};

const deleteGames = async (req, res) => {
  const id = req.params.id;

  try {
    await Game.destroy({ where: { PlayerId: id } });

    await Player.update(
      {
        games: 0,
        gamesWin: 0,
        winRate: 0,
      },
      { where: { id: id } }
    );

    const player = await Player.findAll({ where: { id: id } });

    res.status(200).json({
      player,
    });
  } catch (error) {
    return res.status(400).json({ message: "Could not remove player" });
  }
  id;
};

const getGames = async (req, res) => {
  const idPlayer = req.params.id;
  try {
    const games = await Game.findAll({
      where: { playerId: idPlayer },
    });
    res.send({ games });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

module.exports = { playerRoll, deleteGames, getGames };
