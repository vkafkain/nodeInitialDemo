const { readFile } = require('fs/promises');
const inquirer = require( 'inquirer' );
require( 'colors' );
const { taskOptions, loguinUser } = require('../helpers/menu');

// Login
const loginUser = async ( User ) => {
    try {
        let data = await readFile('./databases/database.json', 'utf8');
        data = JSON.parse(data);

        const findUser = data.users.find( user => user.name == User.name );

        if ( findUser !== undefined ) {
            console.log('User found!'.green);
            taskOptions( findUser );
        }
    } catch (error) {
        console.log('User not found!'.red);
        loguinUser();
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
            taskOptions( findUser );
        }
    } catch (error) {
        console.log('User already exists');
        loguinUser();
    }
};

// Create Task
const createTask = async ( userLogin, answers ) => {
    try {
        let data = await readFile('./databases/database.json', 'utf8');
        data = JSON.parse(data);

        const findUser = data.users.find( user => user.name == userLogin.name );

        const endTask = (answers.estado === 'finalizada') ? new Date.now() : '';

        if (findUser !== undefined) {
            const newTask = {
                title: answers.titulo,
                description: answers.descripcion,
                status: answers.estado,
                initialDate: new Date.now(),
                endDate: endTask,
            };

            findUser.tasks.push(newTask);
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

        const titleTasks = [];
        findUser.tasks.forEach(task => {
            titleTasks.push( task.titulo );
        });

        const questions = [
              {
                type: 'rawlist',
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


module.exports = { loginUser, createUser, createTask, deleteTask }