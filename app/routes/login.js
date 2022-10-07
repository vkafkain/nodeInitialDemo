const { Router } = require("express");
const router = Router();
const { createAdmin } = require("../controllers/loginController");

router.post("/", createAdmin);

module.exports = router;