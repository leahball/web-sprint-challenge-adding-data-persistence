// build your `Task` model here
const db = require('../../data/dbConfig')

async function getTaskById(task_id) {
    const taskRows = await db('tasks as t')
    .where('task_id', task_id)
    return taskRows
}

module.exports = { getTaskById }
