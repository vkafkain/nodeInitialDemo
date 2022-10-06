const { Player } = require("../models/Player");

const getPlayers = async (req, res) => {
  try {
    const players = await Player.findAll();
    res.status(200).json(players);
  } catch (error) {
    return res.status(404).json({ message: "Error getting players" });
  }
};

const getPlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const player = await Player.findOne({
      where: {
        id,
      },
    });
    if (!player)
      return res.status(404).json({ message: "Player does not exist in db" });

    res.status(200).json(player);
  } catch (error) {
    return res.status(404).json({ message: "Error getting player" });
  }
};

const createPlayer = async (req, res) => {
  try {
    const { name } = req.body;
    name ? true : (NAME = "ANONYMOUS");
    const newPlayer = await Player.create({
      name,
    });
    res.status(201).json({ player: newPlayer });
  } catch (error) {
    return res.status(400).json({ message: "Unable to create player" });
  }
};

const updatePlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const player = await Player.findByPk(id);
    player.name = name;
    await player.save();

    res.status(200).json(player);
  } catch (error) {
    return res.status(400).json({ message: "Could not update player" });
  }
};

module.exports = { getPlayer, getPlayers, createPlayer, updatePlayer };
