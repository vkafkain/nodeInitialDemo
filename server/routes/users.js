const { Router } = require("express");
const router = Router();
const userControllers = require("../controllers/usersControllers")
const { authentication } = require("../middlewares/authentication");
const passport = require('passport');

//registro usuario
router.post("/register", userControllers.register);

//login usuario
router.post("/login", authentication, userControllers.login);

//google auth usuario
router.get("/google/callback", passport.authenticate("google",{
    successRedirect: process.env.CLIENT_URL,
    failureRedirect:"/login/failed"
}))

module.exports = router;
