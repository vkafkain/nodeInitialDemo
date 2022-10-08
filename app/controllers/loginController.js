const loginConfig = require("../config/login");
const { createJWT } = require("../services/createJWT");

const showToken = (req, res) => {
  const { name, password } = req.body;

  if (name !== "admin" && password !== loginConfig.secret) {
    res.status(401).json({ msg: "wrong credentials" });
  } else {
    const uniqueToken = createJWT(name);
    res.header("authorization", uniqueToken).json({
      msg: "Authorization as administrator has been successful",
      token: uniqueToken,
    });
  }
};

module.exports = { showToken };
