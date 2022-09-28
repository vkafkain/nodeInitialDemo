require('colors');
const { dbENV } = require('./config');
const { connectDB } = require( dbENV );
const { mostrarMenu, pausa, leerInput, crearUsuario } = require('./helpers/mensajes');
// const tareas = require('./controllers/tareas');
const { default: inquirer } = require('inquirer');


const main = async () =>{ 
    connectDB()
    crearUsuario()

}


    

main();

/* inquirer.prompt(questions).then((answers) => {
    createUser( answers );
  }); */