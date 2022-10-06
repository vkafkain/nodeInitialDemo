const { Router } = require("express");
const {
  playerRoll,
  deleteGames,
  getGames,
} = require("../controllers/gameControllers");
const router = Router();

//POST /games/{id}: un jugador/a específic realitza una tirada.
router.post("/:id", playerRoll);

//DELETE /games/{id}: elimina les tirades del jugador/a.
router.delete("/:id", deleteGames);

// GET /games/{id}: retorna el llistat de jugades per un jugador/a.
router.get("/:id", getGames);

module.exports = router;
