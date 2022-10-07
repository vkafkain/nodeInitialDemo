const { Sequelize } = require("sequelize");
const mysql = require("mysql2");
const config = require("../config/database");

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});
async function connecSQLDB() {
  const connection = mysql.createConnection({
    host: config.host,
    user: config.username,
    password: config.password,
  });
  connection.query(
    `CREATE DATABASE IF NOT EXISTS ${config.database};`,
    (err, result) => {
      console.log("Database created");
      if (err) throw err;
      sequelize.sync({ force: true })
        .then(() => console.log("Database connected"))
        .catch((err) => console.log(err));
    }
  );
  connection.end();
}

module.exports = { sequelize, connecSQLDB };
