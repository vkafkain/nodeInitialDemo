const inquirer = require('inquirer');
const { resolve } = require('path');
const { controllersENV } = require('../config');
const { createUser, loginUser, createTask, deleteTask, updateTask, mostrarTask, mostrarOneTask } = require( controllersENV );

const loguin = [
    {
        type: 'list',
        name: 'log',
        message:'Introduzca su usuario o cree un nuevo usuario',
        choices: [
            {
                value: '1',
                name: 'Nuevo Usuario'
            },
            {
                value: '2',
                name: 'Usuario registrado',
            }
        ]
    }
];
    
const newUser = [
        {
          type: 'input',
          name: 'name',
          message: `Por favor introduzca su nombre de usuario\n`,
          validate(value){
            const valid = value !== '' && value.length > 5;
            return valid || 'Please enter a valid name at least 6 characters';
          }
        }
    ]

const menuQuestion = [
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
                    name: `${'4.'.green} Ver todas las tareas`
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
    ];

const newTask = [
    {
        type: 'input',
        name: 'titulo',
        message: "Introduzca el titulo de la tarea:\n"
    },
    {
        type: 'input',
        name: 'descripcion',
        message: "Introduzca la descripcion de la tarea:\n"
    },
    {
        type: 'list',
        name: 'estado',
        message: "¿En que estado está la tarea?:",
        choices:["pendiente", "empezada", "finalizada"]
    },
]


const loguinUser = async () => {
    console.clear();
    console.log('==========================='.green);
    console.log('       Login Usuario       '.green);
    console.log('===========================\n'.green);
    const { log } = await inquirer.prompt(loguin);

    console.log('\n==========================='.green);
    console.log('  Bienvenido a TO-DO List'.green);
    console.log('===========================\n'.green);
    const name  = await inquirer.prompt(newUser);

    if (log === '1') {
        const result1 = await createUser(name);
        if ( result1 == undefined ) {
            await pausa();
            await taskOptions(name);
        } else {
            await pausa();
            console.clear();
            await loguinUser();  
        }
    } else {
        const result2 = await loginUser(name)
            if ( result2 == undefined ) {
                console.log('User not found!'.red);
                await pausa();
                console.clear();
                await loguinUser();
            } else {
            console.log('User found!'.green)}
            await pausa();
            await taskOptions(name);
        }
}

const taskOptions = async( user ) => {
    console.clear();
    console.log('==========================='.green);
    console.log(`  Hola ${user.name}`.green);
    console.log('  Seleccione una opción'.green);
    console.log('===========================\n'.green);
    
    const { option } = await inquirer.prompt(menuQuestion)
    
    //console.log(option);
    switch (option) {
        case '1': 
          const task = await inquirer.prompt(newTask);
            await createTask( user, task);
            await pausa();
            await taskOptions(user); 
            break;
        case '2':

            await updateTask( user );
            await pausa();
            await taskOptions(user);
            break; 
        case '3':
            await deleteTask( user );
            await pausa();
            await taskOptions(user);
            break;
        case '4':
            await mostrarTask( user );
            await pausa();
            await taskOptions(user);
            break;
        case '5':
            await mostrarOneTask( user );
            await pausa();
            await taskOptions(user);
            break;
        case '0':
            process.exit;
            await loguinUser();
    } 
}

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


module.exports = { pausa, loguinUser, taskOptions }