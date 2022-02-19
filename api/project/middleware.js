const dbConfig = require("../../data/dbConfig");
const Project = require("./model");

exports.checkProjectId = async (req, res, next) => {
    try {
      const project = await Project.getById(req.params.id);
      if (!project) {
        next({ status: 404, message: "not found" });
      } else {
        req.project = project;
        next();
      }
    } catch (err) {
      next(err);
    }
  };

 