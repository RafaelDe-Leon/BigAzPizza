const Pizza = require('../models/pizza-model');

createPizza = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a pizza'
    });
  }

  const pizza = new Pizza(body);

  if (!pizza) {
    return res.status(400).json({ success: false, error: err });
  }

  pizza
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: pizza._id,
        message: 'Pizza created!'
      });
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Pizza not created!'
      });
    });
};

updatePizza = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update'
    });
  }

  Pizza.findOne({ _id: req.params.id }, (err, pizza) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'Pizza not found!'
      });
    }
    pizza.name = body.name;
    pizza.time = body.time;
    pizza.rating = body.rating;
    pizza
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: pizza._id,
          message: 'Pizza updated!'
        });
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'Pizza not updated!'
        });
      });
  });
};

deletePizza = async (req, res) => {
  await Pizza.findOneAndDelete({ _id: req.params.id }, (err, pizza) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!pizza) {
      return res.status(404).json({ success: false, error: `Pizza not found` });
    }

    return res.status(200).json({ success: true, data: pizza });
  }).catch(err => console.log(err));
};

getPizzaById = async (req, res) => {
  await Pizza.findOne({ _id: req.params.id }, (err, pizza) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!pizza) {
      return res.status(404).json({ success: false, error: `Pizza not found` });
    }
    return res.status(200).json({ success: true, data: pizza });
  }).catch(err => console.log(err));
};

getPizzas = async (req, res) => {
  await Pizza.find({}, (err, pizzas) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!pizzas.length) {
      return res.status(404).json({ success: false, error: `Pizza not found` });
    }
    return res.status(200).json({ success: true, data: pizzas });
  }).catch(err => console.log(err));
};

module.exports = {
  createPizza,
  updatePizza,
  deletePizza,
  getPizzas,
  getPizzaById
};
