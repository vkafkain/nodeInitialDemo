const { Sequelize } = require('sequelize');
const mysql = require('mysql2');

const db = new Sequelize('dados', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});
async function connecSQLDB() {
    
    const connection = mysql.createConnection({ host:'localhost', user: 'root', password: '1234',});
    connection.query(`CREATE DATABASE IF NOT EXISTS dados;`, (err, result) =>{
        console.log('Database created');
        if(err) throw err
        db.sync({ force:false })
        .then(()=> console.log('Database connected'))
        .catch(err => console.log(err))
    })
    connection.end();
}
  
module.exports = {db, connecSQLDB};