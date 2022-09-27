const app = require('./app')
const sequelize = require('./database/db_sql');

async function main() {
  try{  
    await sequelize.sync({force: true})
    app.listen(3000);
    console.log("Server is listening on port", 3000);
} catch(error) {
    console.log("Unable to connect to the database");
    }
}

main();