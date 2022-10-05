const { Sequelize } = require('sequelize');
const mysql = require('mysql2');


async function connecSQLDB() {
    
    const connection = mysql.createConnection({ host:'localhost', user: 'root', password: '1234',});
    connection.query(`CREATE DATABASE IF NOT EXISTS dados;`, (err, result) =>{
        if(err) throw err
        db.sync({ force:true })
        .then(()=> console.log('Database Connected'))
        .catch(err => console.log(err))
    })
    connection.end();
}
const db = new Sequelize('dados', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {db, connecSQLDB};