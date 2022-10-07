const jwt = require("jsonwebtoken");
const config = require("../config/login");

const createJWT = (user) => {
  return jwt.sign(user, config.secret);
};

module.exports = { createJWT };
