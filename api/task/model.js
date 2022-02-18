// build your `Task` model here
// const db = require('../../data/dbConfig')

// async function getTaskById(task_id) {
//     const taskRows = await db('tasks as t')
//     .where('task_id', task_id)
//     return taskRows
// }

function getTaskById(task_id) {
        return Promise.resolve(`awesome task ${task_id}`)
    }

module.exports = { getTaskById }
