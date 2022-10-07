const { Router } = require("express");
const router = Router();
const playerRouter = require("./players");
const gamesRouter = require("./games");
const rankingRouter = require("./ranking");
const loginRouter = require("./login");
const auth = require("../middlewares/login");

router.use("/players", auth, playerRouter);
router.use("/games", auth, gamesRouter);
router.use("/ranking", auth, rankingRouter);
router.use("/login", loginRouter);

module.exports = router;
