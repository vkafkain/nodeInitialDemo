const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dados', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
sequelize.sync({ force: false })
    .then(() => {
        console.log("Tablas sincronizadas")
    });
//TODO create table if not exist

module.exports = sequelize;