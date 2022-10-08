const { Router } = require("express");
const router = Router();
const { showToken } = require("../controllers/loginController");

router.post("/", showToken);

module.exports = router;
