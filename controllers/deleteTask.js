const { writeFile, readFile } = require('fs/promises');
const inquirer = require( 'inquirer' );

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
                type: 'list',
                name: 'deleteTasks',
                message: '¿Quieres borrar todas tus tareas?',
                choices: [ 'Sì', 'No' ],
              },
              {
                type: 'rawlist',
                name: 'deleteOneTask',
                message: `¿Cual tarea quieres borrar?`,
                choices: titleTasks, 
              },  
        ]
        
        await inquirer.prompt(questions).then((answers) => {
          return answers;
        });


        if ( (findUser !== undefined) && (answers.deleteTasks === 'Sì') ) {
            findUser.tasks = [];
            data = JSON.stringify(data);
            await writeFile('./databases/database.json', data);

            console.log('Tasks deleted!');
        }
        if ( (findUser !== undefined) && (answers.deleteTasks === 'No') ) {
            const index = findUser.tasks.findIndex( (task) => task === answers.deleteOneTask );
            findUser.tasks.splice( index, 1 );
            data = JSON.stringify(data);
            await writeFile('./databases/database.json', data);

            console.log('Task deleted!');
        }
    } catch (error) {
        console.log('Tasks not deleted!');
    }
};

module.exports = { deleteTask }