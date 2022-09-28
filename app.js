require('colors');
const { dbENV } = require('./config');
const { connectDB } = require( dbENV );
const { inquirerUser } = require( './helpers/inquirer-user' );
const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear()

// main function
const main = async () => {
    try {
        
        // Check if Database Exists
        await connectDB();
        // Check if User Exists, if not, create a new one
        await inquirerUser();
        
        // mostrarMenu();
        // pausa();

        
    } catch (error) {
        console.log(error);
    }
};
    
main()