require('colors');
const { dbENV } = require('./config');
const { connectDB } = require( dbENV );
const { mostrarMenu, pausa, creacionUsuario, loguinMenu, menuAnswers, userType } = require('./helpers/mensajes');
// const tareas = require('./controllers/tareas');
const inquirer = require('inquirer');


const main = async () =>{ 
    await connectDB();
    await userType();
    await creacionUsuario();
    await menuAnswers();

    // let opt;
    // let tarea;

    // do {

    //     opt = await mostrarMenu();

    //     switch (opt) {
    //         case '1':
    //             const nombreTarea = await input('Titulo: ')
    //             const descripcion = await input('Descripción: ');


    //     }



    // }

};


    

main();

