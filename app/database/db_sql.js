const { Sequelize } = require('sequelize');

const db = new Sequelize('dados', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});




module.exports = db;