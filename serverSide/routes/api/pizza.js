const router = require('express').Router();

const PizzaCtrl = require('../../controllers/pizza-ctrl');

// Post Pizza
router.route('/').post(PizzaCtrl.create);
// Update Pizza
router.route('/update').put(PizzaCtrl.update);
// Delete Pizza
router.route('/deletePizzaById').delete(PizzaCtrl.deletePizzaById);
// Get Pizza By Id
router.route('/info').get(PizzaCtrl.findPizzaById);
// Get All Pizza
router.route('/pizzas').get(PizzaCtrl.findAllPizzas);

module.exports = router;
