const { readFile, writeFile } = require('fs/promises');
const inquirer = require( 'inquirer' );
require( 'colors' );
//const { taskOptions, loguinUser } = require('../helpers/menu');

// Login
const loginUser = async ( User ) => {
    try {
        let data = await readFile('./databases/database.json', 'utf8');
        data = JSON.parse(data);

        const findUser = data.users.find( user => user.name == User.name );

        if ( findUser !== undefined ) {
            console.log('User found!'.green);
            //taskOptions( findUser );
        }
    } catch (error) {
        console.log('User not found!'.red);
        //loguinUser();
    }
};

// Create User
const createUser = async ( User ) => {
    try {
        let data = await readFile('./databases/database.json', 'utf8');
        data = JSON.parse(data);

        const findUser = data.users.find( user => user.name == User.name );

        if (findUser == undefined) {
            const newUser = {

                name: User.name,

                tasks: [],
            };

            data.users.push(newUser);
            data = JSON.stringify(data);
            await writeFile('./databases/database.json', data);

            console.log('New User created!');
            //taskOptions( newUser );
        }
    } catch (error) {
        console.log('User already exists');
        //loguinUser();
    }
};

// Create Task
const createTask = async ( userLogin, answers ) => {
    try {
        let data = await readFile('./databases/database.json', 'utf8');
        data = JSON.parse(data);

        const findUser = data.users.find( user => user.name == userLogin.name );
        //console.log(findUser)
        //console.log(answers)

        
        if (findUser !== undefined) {
            const ahora = new Date();
            const endTask = (answers.estado === 'finalizada') ? ahora.toLocaleString('es-ES') : '';
            
            const new_Task = {
                title: answers.titulo,
                description: answers.descripcion,
                status: answers.estado,
                initialDate: ahora.toLocaleString('es-ES'),
                endDate: endTask,
            };
            //console.log(new_Task);

            findUser.tasks.push(new_Task);
            data = JSON.stringify(data);
            await writeFile('./databases/database.json', data);

            console.log('New Task created!'.green);

        }
    } catch (error) {
        console.log('Task not created'.red);
    }
};


// Delete Task
const deleteTask = async ( userLogin ) => {
    try {
        let data = await readFile('./databases/database.json', 'utf8');
        data = JSON.parse(data);

        const findUser = data.users.find( user => user.name == userLogin.name );
        console.log(findUser)
        const titleTasks = [];

        findUser.tasks.forEach(task => {
            titleTasks.push( task.title );
        });
        console.log(titleTasks)

        const questions = [
              {
                type: 'list',
                name: 'deleteOneTask',
                message: `¿Cual tarea quieres borrar?`,
                choices: titleTasks, 
              },  
        ]
        
        const answer = await inquirer.prompt(questions);

        if ( findUser !== undefined ) {
            const index = titleTasks.findIndex( (task) => task === answer.deleteOneTask );
            findUser.tasks.splice( index, 1 );
            data = JSON.stringify(data);
            await writeFile('./databases/database.json', data);

            console.log('Task deleted!');
        }
    } catch (error) {
        console.log('Tasks not deleted!');
    }
};

// Update Task
const updateTask = async ( userLogin ) => {
    try {
        let data = await readFile('./databases/database.json', 'utf8');
        data = JSON.parse(data);

        const findUser = data.users.find( user => user.name == userLogin.name );
        
        const titleTasks = [];

        findUser.tasks.forEach(task => {
            titleTasks.push( task.title );
        });

        const questions = [
              {
                type: 'list',
                name: 'updateOneTask',
                message: `¿Qué tarea quieres actualizar?`,
                choices: titleTasks, 
              },  
        ];

        const answer = await inquirer.prompt(questions);
        const index = findUser.tasks.findIndex( (task) => task.title === answer.updateOneTask);

        const result = findUser.tasks[index];

        const newTask = [
            {
                type: 'input',
                name: 'titulo',
                message: "Introduzca el titulo de la tarea:\n",
                default: result.title
            },
            {
                type: 'input',
                name: 'descripcion',
                message: "Introduzca la descripcion de la tarea:\n",
                default: result.description
            },
            {
                type: 'list',
                name: 'estado',
                message: "¿En que estado está la tarea?:",
                choices:["pendiente", "empezada", "finalizada"]
            },
        ]
        
        const task_inquirer = await inquirer.prompt(newTask);

        if (findUser !== undefined) {
            const ahora = new Date();
            const endTask = (task_inquirer.estado === 'finalizada') ? ahora.toLocaleString('es-ES') : '';
            
            
            result.title = task_inquirer.titulo,
            result.description = task_inquirer.descripcion,
            result.status = task_inquirer.estado,
            result.initialDate = ahora.toLocaleString('es-ES'),
            result.endDate = endTask,
            
            //console.log(new_Task);

            
            data = JSON.stringify(data);
            await writeFile('./databases/database.json', data);

            console.log('New Task updated!'.green);

        }
    } catch (error) {
        console.log('Tasks not updated!');
    }
};

//mostrarTask--> Debería llamarse mostrarAllTasks para diferenciarlo mejor del otro.
const mostrarTask = async (userLogin) => {  
    try {
        let data = await readFile('./databases/database.json', 'utf8');
        data = JSON.parse(data);

        const findUser = data.users.find( user => user.name == userLogin.name );

        const findTask = findUser.tasks;

        console.log(findTask);
        
    } catch(err) {
        console.log(err);
    }
}

//mostrarOneTask--> 
const mostrarOneTask = async (userLogin) => {  
    try {
        let data = await readFile('./databases/database.json', 'utf8');
        data = JSON.parse(data);

        const findUser = data.users.find( user => user.name == userLogin.name );

        const titleTasks = [];

        findUser.tasks.forEach(task => {
            titleTasks.push( task.title );
        });
        //console.log(titleTasks)

        const questions = [
              {
                type: 'list',
                name: 'showOneTask',
                message: `¿Qué tarea quieres ver?`,
                choices: titleTasks, 
              },  
        ]
        
        const answer = await inquirer.prompt(questions);
        const index = findUser.tasks.findIndex( (task) => task.title === answer.showOneTask);

        console.log(findUser.tasks[index]);
        
    } catch(err) {
        console.log(err);
    }
}


module.exports = { loginUser, createUser, createTask, deleteTask, mostrarTask, mostrarOneTask, updateTask }

