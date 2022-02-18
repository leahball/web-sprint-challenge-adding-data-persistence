const dbConfig = require("../../data/dbConfig");
const Resource = require("./model");

exports.checkResourceId = async (req, res, next) => {
  try {
    const resource = await Resource.getById(req.params.id);
    if (!resource) {
      next({ status: 404, message: "not found" });
    } else {
      req.resource = resource;
      next();
    }
  } catch (err) {
    next(err);
  }
};

exports.checkResourceNameUnique = async (req, res, next) => {
  try {
    const existing = await dbConfig("resources")
      .where("resource_name", req.body.resource_name.trim())
      .first();
    if (existing) {
      next({ status: 400, message: "resource name is not unique" });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
  next();
};
