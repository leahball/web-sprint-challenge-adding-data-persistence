// build your `/api/resources` router here
const router = require("express").Router(); //instantiate the router
const Resource = require('./model')

router.get('/:resource_id', (req, res, next) => {
    Resource.getResourceById(req.params.resource_id)
    .then(rs => {
        res.status(200).json(rs)
    })
    .catch(next)
})

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "something went wrong with recipes router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
