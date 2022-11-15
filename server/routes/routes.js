const { Router } = require("express");
const router = Router();
const userRoutes = require("./users");

router.use("/users", userRoutes); 

module.exports = router;