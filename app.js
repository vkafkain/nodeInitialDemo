require('colors');
const { dbENV } = require('./config');
const { connectDB } = require( dbENV );
const { inquirerUser } = require( './helpers/inquirer-user' );
const { mostrarMenu, pausa, leerInput } = require('./helpers/mensajes');
const tareas = require('./controllers/tareas');


const main = async () =>{
    
    let opt = '';
    const tareas = new Tareas();

do{
    opt = await mostrarMenu();

    switch (opt) {
        case '1': //Crear tarea
        const desc = await leerInput('Descripción:')
        tareas.crearTarea(desc);
        break;
    }
    await pausa();
}while (opt !== '0');

}

main();

