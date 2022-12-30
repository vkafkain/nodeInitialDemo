const { Router } = require("express");
const router = Router();
const userControllers = require("../controllers/usersControllers")
const { authentication } = require("../middlewares/authentication");

//registro usuario
router.post("/register", userControllers.register);

//login usuario
router.post("/login", authentication, userControllers.login);


module.exports = router;
