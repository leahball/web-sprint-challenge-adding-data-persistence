// build your `Project` model here
// const db = require("../../data/dbConfig");

// async function getProjectById(project_id) {
//   const projectRows = await db("projects as t").where("project_id", project_id);
//   return projectRows;
// }

function getProjectById(project_id) {
    return Promise.resolve(`awesome project ${project_id}`)
}

module.exports = { getProjectById };
