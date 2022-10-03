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

module.exports = { deleteTask }