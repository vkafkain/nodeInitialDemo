const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dados', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;