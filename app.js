require('colors');
const { dbENV } = require('./config');
const { connectDB }  = require( dbENV );
const { pausa, taskOptions, loguinUser } = require('./helpers/menu');



const main = async () =>{ 
    
    try{
        await connectDB();
        await loguinUser();
       


    }catch(error){
        console.log(error);
    }
};

main();

