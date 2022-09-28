const colors = require('colors');
const inquirer = require('inquirer');
const { resolve } = require('path');

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
                name: `${'2.'.green} Ver tarea`
            },
            {
                value: '3',
                name: `${'3.'.green} Ver tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Ver tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tareas`
            },
            {
                value: '0',
                name: `${'6.'.green} Salir`
            }
        ] 
    }
]


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
}




module.exports = { mostrarMenu, pausa };