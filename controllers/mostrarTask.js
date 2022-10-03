const { readFile } = require('fs/promises');

//mostrarTask--> Debería llamarse mostrarAllTasks para diferenciarlo mejor del otro.
const mostrarTask = async (userLogin) => {  
    try {
        let data = await readFile('./databases/database.json', 'utf8');
        data = JSON.parse(data);

        const findUser = data.users.find( user => user.name == userLogin.name );

        const findTask = findUser.tasks.find();

        console.table(findTask);
        
    } catch(err) {
        console.log(err);
    }
}

module.exports = { mostrarTask } 