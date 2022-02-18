const projects = [
  {
    project_name: "meal prep",
    project_description: "make meals for the week",
    project_completed: true,
  },
  {
    project_name: "sew project",
    project_description: "sew custom robe",
    project_completed: true,
  },
  {
    project_name: "code game",
    project_description: "code octopus game in react, redux",
    project_completed: true,
  },
];
const project_resources = [
  { project_id: 1, resource_id: 1 },
  { project_id: 1, resource_id: 2 },
  { project_id: 2, resource_id: 3 },
  { project_id: 2, resource_id: 4 },
  { project_id: 3, resource_id: 5 },
];

const resources = [
  { resource_name: "groceries", resource_description: "veggies and meat" },
  { resource_name: "tupperware", resource_description: "assorted sizes" },
  { resource_name: "fabric", resource_description: "order linen" },
  { resource_name: "paint", resource_description: "order more acrylic" },
  { resource_name: "computer", resource_description: "in the study" },
];

const tasks = [
  {
    task_description: "cut veg",
    task_notes: "the fancy way",
    task_completed: true,
    project_id: 1,
  },
  {
    task_description: "cook food",
    task_notes: "delicious",
    task_completed: true,
    project_id: 1,
  },
  {
    task_description: "store food",
    task_notes: "pack it tight",
    task_completed: true,
    project_id: 1,
  },
  {
    task_description: "cut fabric",
    task_notes: "size M",
    task_completed: true,
    project_id: 2,
  },
  {
    task_description: "paint fabric",
    task_notes: "sunflowers",
    task_completed: true,
    project_id: 2,
  },
  {
    task_description: "sew piece",
    task_notes: "by march 16th",
    task_completed: true,
    project_id: 2,
  },
  {
    task_description: "create database",
    task_notes: "for memory cards",
    task_completed: true,
    project_id: 3,
  },
  {
    task_description: "learn redux",
    task_notes: "watch video",
    task_completed: true,
    project_id: 3,
  },
  {
    task_description: "build api",
    task_notes: "octopus news",
    task_completed: true,
    project_id: 3,
  },
];

exports.seed = async function (knex) {
  await knex("projects").insert(projects);
  await knex("resources").insert(resources);
  await knex("tasks").insert(tasks);
  await knex("project_resources").insert(project_resources);
};
