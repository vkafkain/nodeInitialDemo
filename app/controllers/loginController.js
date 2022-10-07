const { Player } = require("../models/Player");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const loginConfig = require("../config/login");

const createAdmin = (req, res) => {
  let name = req.body.name;
  if (name !== "admin") {
    res.status(401).json({ msg: "Unauthorized name" });
  }
  let password = bcrypt.hashSync(
    req.body.password,
    Number.parseInt(loginConfig.rounds)
  );

  Player.create({
    name: name,
    password: password,
  })
    .then((user) => {
      let token = jwt.sign({ user: user }, loginConfig.secret, {
        expiresIn: loginConfig.expires,
      });
      res.json({
        user: user,
        token: token,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = { createAdmin };
