const jwt = require("jsonwebtoken");
const config = require("../config/login");

const auth = (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401).json({ msg: "Unauthorized access" });
  } else {
    let token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, config.secret, (err) => {
      if (err) {
        res.status(400).json({ msg: "Error Encoding", err });
      } else {
        next();
      }
    });
  }
};

module.exports = auth;
