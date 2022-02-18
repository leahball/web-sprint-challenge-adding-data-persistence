// build your `Resource` model here
// const db = require('../../data/dbConfig')

// async function getResourceById(resource_id) {
//     const resourceRows = await db('resources as t')
//     .where('resource_id', resource_id)
//     return resourceRows
// }

function getResourceById(resource_id) {
    return Promise.resolve(`awesome resource ${resource_id}`)
}

module.exports = { getResourceById }