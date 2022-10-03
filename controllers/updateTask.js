const { readFile } = require('fs/promises');


// Actualizar Tareas
const updateTask = async (answer) => {
    try {
        let data = await readFile('./databases/database.json', 'utf8');
        data = JSON.parse(data);

        let findTask = data.users.tasks.find(task => task.title == task);
        console.log(task.status);


        

    } catch(err) {
        console.log(err);
    }
}

module.exports = { updateTask }