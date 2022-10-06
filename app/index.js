const app = require("./app");
const { connecSQLDB } = require("./database/dbSQL");
const config = require('./config/database');

async function main() {
  try {
    await connecSQLDB();
    app.listen(config.port);
    console.log(`Server is listening on port, ${config.port}`);
  } catch (error) {
    console.log("Unable to connect to the database");
  }
}

main();
