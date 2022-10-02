const { readFile } = require('fs/promises');

//mostrarTask--> Debería llamarse mostrarAllTasks para diferenciarlo mejor del otro.
const mostrarTask = async (answer) => {  
    try {
        let data = await readFile('./databases/database.json', 'utf8');
        data = JSON.parse(data);

        const findTask = data.users.tasks.find();
        
    } catch(err) {
        console.log(err);
    }
}

module.exports = { mostrarTask } 