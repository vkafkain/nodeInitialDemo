const { writeFile, readFile } = require('fs/promises');
const inquirer = require( 'inquirer' );

// Create Task
const deleteTask = async ( userLogin ) => {
    try {
        let data = await readFile('./databases/database.json', 'utf8');
        data = JSON.parse(data);

        const questions = [
            {
                type: 'confirm',
                name: 'deleteTask',
                message: '¿Quieres borrar tus tareas?',
                default: false,
              }
        ]
        
        inquirer.prompt(questions).then((answers) => {
          return answers;
        });

        const findUser = data.users.find( user => user.name == userLogin.name );

        if ( (findUser !== undefined) && (answers.deleteTask === true) ) {
            findUser.tasks = [];
            data = JSON.stringify(data);
            await writeFile('./databases/database.json', data);

            console.log('Tasks deleted!');
        }
    } catch (error) {
        console.log('Tasks not deleted!');
    }
};

module.exports = { deleteTask }