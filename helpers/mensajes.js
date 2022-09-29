const inquirer = require('inquirer');
const { resolve } = require('path');
const { controllersENV } = require('../config');
const { createUser } = require( controllersENV );

const loguin = [
    {
        type: 'checkbox',
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
          message: `Welcome to the TO-DO List \nPlease, enter your username\n`,
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
    ];

const newTask = [
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

const taskOption = async() => {
    const { name } = await inquirer.prompt(newTask);
    console.log("Tarea creada con éxito");
    return name
    ;
}

const menuAnswers = async() => {
    
    let option = await mostrarMenu();
    
    switch (option) {
        case '1': 
          let answer = await taskOption();
            break;
        case '2':
          let taskList = await mostrarTasks();
            break;

    }
}


const loguinMenu = async () => {
    const { log } = await inquirer.prompt(loguin)
    return log;
}

const userType = async () => {

    let option = await loguinMenu()
    if(option === '1') {
        creacionUsuario();
    }else {
        loginUsuario();
    }
};

const creacionUsuario = async () => {
    const name  = await inquirer.prompt(newUser).then((answers) => {
        createUser(answers)
    });
}

const mostrarMenu = async() => {
  
    console.clear();
    console.log('==========================='.green);
    console.log('  Seleccione una opción'.green);
    console.log('===========================\n'.green);
    
    const { option } = await inquirer.prompt(menuQuestion)

    return option;
 
};

const listaTareas = async (tasks = []) => {

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


module.exports = { creacionUsuario, mostrarMenu, pausa, loguinMenu, menuAnswers, userType, listaTareas }