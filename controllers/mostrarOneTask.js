const { readFile } = require('fs/promises');


// Mostrar One Task
const mostrarOneTask = async (answer) => {
    try {
        let data = await readFile('./databases/database.json', 'utf8');
        data = JSON.parse(data);

        const findTask = data.users.tasks.find(task => task.title == title);
        

        if (findTask == undefined) {
            console.log('Sorry, task does not exist.')
            } else {
                console.log(findTask);
            }

    } catch(err) {
        console.log(err);
    }
}

module.exports = { mostrarOneTask } 