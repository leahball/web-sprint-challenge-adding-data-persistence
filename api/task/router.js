// build your `/api/tasks` router here
const router = require("express").Router(); //instantiate the router
// const Task = require('./model')

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "something went wrong with recipes router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
