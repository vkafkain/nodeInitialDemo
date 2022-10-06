const { Router } = require("express");
const router = Router();
const loginController = require("../controllers/loginController");

router.post("/signin", loginController.signIn);
router.post("/signup", loginController.signUp);

module.exports = router;