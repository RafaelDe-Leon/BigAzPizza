const express = require('express');

const PizzaCtrl = require('../controllers/pizza-ctrl');

const router = express.Router();

router.post('/pizza', PizzaCtrl.createPizza);
router.put('/pizza/:id', PizzaCtrl.updatePizza);
router.delete('/pizza/:id', PizzaCtrl.deletePizza);
router.get('/pizza/:id', PizzaCtrl.getPizzaById);
router.get('/pizzas', PizzaCtrl.getPizzas);

module.exports = router;
