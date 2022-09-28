require('colors');
const { dbENV } = require('./config');
const { connectDB } = require( dbENV );
const { mostrarMenu, pausa, leerInput, creacionUsuario } = require('./helpers/mensajes');
// const tareas = require('./controllers/tareas');
const inquirer = require('inquirer');


const main = async () =>{ 
    
    await creacionUsuario();
    // await mostrarMenu();

    let opt;
    let tarea;

    do {

        opt = await mostrarMenu();

        switch (opt) {
            case '1':
                const nombreTarea = await input('Titulo: ')
                const descripcion = await input('Descripción: ');


        }



    }

};


    

main();

/* inquirer.prompt(questions).then((answers) => {
    createUser( answers );
  }); */