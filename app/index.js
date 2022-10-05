const app = require('./app')
const {db, connecSQLDB} = require('./database/dbSQL');

async function main() {
  try{  
    await connecSQLDB();
    await db.sync({force: true})
    app.listen(3000);
    console.log("Server is listening on port", 3000);
} catch(error) {
    console.log("Unable to connect to the database");
    }
}

main();