const { writeFile, readFile } = require('fs/promises');
const { taskOptions, loguinUser } = require('../helpers/menu.js');

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

module.exports = { createUser }