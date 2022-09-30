const { readFile } = require('fs/promises');
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

module.exports = { loginUser }