const { writeFile, readFile } = require('fs/promises');
const { mostrarMenu } = require('./helpers/mensajes.js');

// Create User
const createUser = async () => {
    try {
        let data = await readFile('./databases/database.json', 'utf8');
        data = JSON.parse(data);

        const questions = [
            {
                type: 'input',
                name: 'name',
                message: '¿Cual es tu nombre?'
              }
        ]
        
        inquirer.prompt(questions).then((answers) => {
          return answers;
        });

        const findUser = data.users.find( user => user.name == answers.name );

        if (findUser == undefined) {
            const newUser = {
                name: answer.name,
                tasks: [],
            };

            data.users.push(newUser);
            data = JSON.stringify(data);
            await writeFile('./databases/database.json', data);

            console.log('New User created!');
            mostrarMenu();
        }
    } catch (error) {
        console.log('User already exists');
        createUser();
    }
};

module.exports = { createUser }