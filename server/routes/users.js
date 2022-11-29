const { Router } = require("express");
const router = Router();
const userControllers = require("../controllers/usersControllers")
const { authentication } = require("../middlewares/authentication");

//registro usuario
router.post("/register", userControllers.register);
//login usuario
router.post("/login", authentication, userControllers.login);
//change password
// router.post("/changepassword", userControllers.changePassword);
//profile user
// router.post("/profileuser", userControllers.profileUser);
module.exports = router;
