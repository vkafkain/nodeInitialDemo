const { writeFile, readFile } = require('fs/promises');
const inquirer = require( 'inquirer' );

// Create Task
const createTask = async ( userLogin ) => {
    try {
        let data = await readFile('./databases/database.json', 'utf8');
        data = JSON.parse(data);

        const questions = [
            {
              type: 'input',
              name: 'description',
              message: `¿Que tarea quieres crear?`,
            },
            {
                type: 'rawlist',
                name: 'status',
                message: `¿Cual es el estado de tu tarea?`,
                choices: ['Pendiente', 'En execusión', 'Acabada'],
              },
        ]
        
        inquirer.prompt(questions).then((answers) => {
          return answers;
        });

        const findUser = data.users.find( user => user.name == userLogin.name );

        const endTask = (answers.status === 'Acabada') ? new Date.now() : '';

        if (findUser !== undefined) {
            const newTask = {
                description: answers.description,
                status: answers.status,
                initialDate: new Date.now(),
                endDate: endTask,
            };

            findUser.tasks.push(newTask);
            data = JSON.stringify(data);
            await writeFile('./databases/database.json', data);

            console.log('New Task created!');
        }
    } catch (error) {
        console.log('User not found');
    }
};

module.exports = { createTask }