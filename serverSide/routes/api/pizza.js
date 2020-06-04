const router = require('express').Router();

const PizzaCtrl = require('../../controllers/pizza-ctrl');

// Post Pizza
router.route('/new').post(PizzaCtrl.create);
// Update Pizza
router.route('/update').put(PizzaCtrl.update);
// Delete Pizza
router.route('/delete').delete(PizzaCtrl.delete);
// router.route('/deletePizzaById').delete(PizzaCtrl.deletePizzaById);

// Get Pizza By Id
// router.route('/info').get(PizzaCtrl.findPizzaById);
// Get All Pizza (under user)
router.route('/info').get(PizzaCtrl.find);

module.exports = router;
