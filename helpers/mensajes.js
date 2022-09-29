const colors = require('colors');
const inquirer = require('inquirer');
const { resolve } = require('path');
const { controllersENV } = require('../config');
const { createUser } = require( controllersENV );


const newUser = [
        {
          type: 'input',
          name: 'name',
          message: `Welcome to the TO-DO List \nPlease, enter your username`,
        }
    ]

const preguntas = [
        {
            type: 'list',
            name: 'option',
            message: '¿Que desea hacer?',
            choices: [
                {
                    value: '1',
                    name: `${'1.'.green} Crear tarea`
                },
                {   
                    value: '2',
                    name: `${'2.'.green} Actualizar tarea`
                },
                {
                    value: '3',
                    name: `${'3.'.green} Borrar tarea`
                },
                {
                    value: '4',
                    name: `${'4.'.green} Ver tareas todas las tareas`
                },
                {
                    value: '5',
                    name: `${'5.'.green} Ver una tarea`
                },
                {
                    value: '0',
                    name: `${'6.'.green} Salir`
                }
            ] 
        }
    ]

const creacionUsuario = async () => {
    const name  = await inquirer.prompt(newUser).then((answers) => {
        createUser(answers)
    });
    return name;
}



const mostrarMenu = async() => {
  
    console.clear();
    console.log('==========================='.green);
    console.log('  Seleccione una opción'.green);
    console.log('===========================\n'.green);
    
    const { option } = await inquirer.prompt(preguntas)

    return option;
 
};

const pausa = async () =>{
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.green} para continuar` 
        }
    ];
    console.log('\n');

    await inquirer.prompt(question);
};

const leerInput = async (message) => {
    const question = [
    {
        type: 'input',
        name: 'desc',
        message,
        validate(value) {
            if (value.length === 0) {
                return 'Introduzca algún valor';
            }
            return true;
            }
        }
    ]

    const { desc } = await inquirer.prompt(question);
    return desc;
};



module.exports = { creacionUsuario, mostrarMenu, pausa, leerInput };