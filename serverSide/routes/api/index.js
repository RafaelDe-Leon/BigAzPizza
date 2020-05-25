const router = require('express').Router();
const pizzaRoute = require('./pizza-router');

// /api/user routes
router.use('/pizza', pizzaRoute);

module.exports = router;
