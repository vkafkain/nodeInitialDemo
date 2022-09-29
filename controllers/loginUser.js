const { readFile } = require('fs/promises');
const inquirer = require( 'inquirer' );
const { mostrarMenu } = require('./helpers/mensajes.js');

// Login
const loginUser = async () => {
    try {
        let data = await readFile('./databases/database.json', 'utf8');
        data = JSON.parse(data);

        const questions = [
            {
                type: 'input',
                name: 'login',
                message: '¿Cual es tu nombre?'
              }
        ]
        
        inquirer.prompt(questions).then((answers) => {
          return answers;
        });

        const findUser = data.users.find( user => user.name == answers.login );

        if ( findUser !== undefined ) {
            console.log('User found!');
            mostrarMenu( findUser );
        }
    } catch (error) {
        console.log('User not found!');
        loginUser();
    }
};

module.exports = { loginUser }