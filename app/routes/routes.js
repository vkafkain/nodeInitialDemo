const { Router } = require("express");
const router = Router();
const playerRouter = require("./players");
const gamesRouter = require("./games");
const rankingRouter = require("./ranking");

router.use("/players", playerRouter);
router.use("/games", gamesRouter);
router.use("/ranking", rankingRouter);

module.exports = router;
