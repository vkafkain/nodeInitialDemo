const { writeFile, readFile } = require('fs/promises');
const inquirer = require( 'inquirer' );

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

            console.log('New Task created!');
        }
    } catch (error) {
        console.log('User not found');
    }
};

module.exports = { createTask }