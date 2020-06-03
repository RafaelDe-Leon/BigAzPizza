const router = require('express').Router();
const userRoutes = require('./user');
const pizzaRoutes = require('./pizza');

// /api/user routes
router.use('/user', userRoutes);

// /api/pizza routes
router.use('/pizza', pizzaRoutes);

module.exports = router;
