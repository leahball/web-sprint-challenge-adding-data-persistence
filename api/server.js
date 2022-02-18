// build your server here and require it from index.js
const express = require("express");
const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");
const taskRouter = require("./task/router");

const server = express(); //instantiate the server by invoking express

server.use(express.json()); //teach server to parse JSON

server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);
server.use("/api/tasks", taskRouter);

server.use("*", (req, res) => {
  //test if routing working with catchall endpoint
  res.json({ api: "up" });
});

module.exports = server;
