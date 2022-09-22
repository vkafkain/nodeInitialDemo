require('dotenv').config();
const { Sequelize } = require('sequelize');

const { DB_NAME, USER_SQL, PASS_SQL, HOST_SQL, PORT_SQL} = process.env;

const connectDB = new Sequelize(DB_NAME, USER_SQL, PASS_SQL, {
    host: HOST_SQL,
    port: PORT_SQL,
    dialect : 'mysql'
});

connectDB.sync();


module.exports = connectDB;