const router = require('express').Router();
const userRoutes = require('./user');
const pizzaRoutes = require('./pizza-router');

// /api/user routes
router.use('/user', userRoutes);

// /api/pizza routes
router.use('/pizza-router', pizzaRoutes);

module.exports = router;
