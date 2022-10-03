const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dados', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
sequelize.sync({ force: false })
    .then(() => {
        console.log("Tablas sincronizadas")
    });


module.exports = sequelize;