const inquirer = require('inquirer');
const { resolve } = require('path');
const { controllersENV } = require('../config');
const { createUser } = require( controllersENV );

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
          message: `Bienvenido a TO-DO List \nPor favor introduzca su nombre de usuario\n`,
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
    const { log } = await inquirer.prompt(loguin)
    if (log === '1') {
        const name  = await inquirer.prompt(newUser);
        createUser(name);
    } else {
        console.log('TODO usuario registrado');//TODO buscar usuario ya registrado
    }
}

const taskOptions = async() => {
    console.clear();
    console.log('==========================='.green);
    console.log('  Seleccione una opción'.green);
    console.log('===========================\n'.green);
    
    const { option } = await inquirer.prompt(menuQuestion)
    
    console.log(option);
    switch (option) {
        case '1': 
          const { name } = await inquirer.prompt(newTask);
            console.log(name);//TODO controller crearTarea crearTarea(name); 
            break;
        case '2':
            console.log('Actualizar tarea');  ; //TODO controller actualizar tarea await actualizarTasks()
            break; 
        case '3':
            console.log('Borrar tarea'); //TODO controller borrar tarea;
            break;
        case '4':
            console.log('Ver todas las tareas');//TODO controller ver todas las tareas
            break;
        case '5':
            console.log('Ver una tarea'); //TODO constroller ver una tarea
            break;
        case '0':
            process.exit;
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