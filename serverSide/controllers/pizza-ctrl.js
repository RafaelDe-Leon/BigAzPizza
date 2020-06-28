// const Pizza = require('../models/pizza-model');

// createPizza = (req, res) => {
//   const body = req.body;

//   if (!body) {
//     return res.status(400).json({
//       success: false,
//       error: 'You must provide a pizza'
//     });
//   }

//   const pizza = new Pizza(body);

//   if (!pizza) {
//     return res.status(400).json({ success: false, error: err });
//   }

//   pizza
//     .save()
//     .then(() => {
//       return res.status(201).json({
//         success: true,
//         id: pizza._id,
//         message: 'Pizza created!'
//       });
//     })
//     .catch(error => {
//       return res.status(400).json({
//         error,
//         message: 'Pizza not created!'
//       });
//     });
// };

// updatePizza = async (req, res) => {
//   const body = req.body;

//   if (!body) {
//     return res.status(400).json({
//       success: false,
//       error: 'You must provide a body to update'
//     });
//   }

//   Pizza.findOne({ _id: req.params.id }, (err, pizza) => {
//     if (err) {
//       return res.status(404).json({
//         err,
//         message: 'Pizza not found!'
//       });
//     }
//     pizza.name = body.name;
//     pizza.time = body.time;
//     pizza.rating = body.rating;
//     pizza
//       .save()
//       .then(() => {
//         return res.status(200).json({
//           success: true,
//           id: pizza._id,
//           message: 'Pizza updated!'
//         });
//       })
//       .catch(error => {
//         return res.status(404).json({
//           error,
//           message: 'Pizza not updated!'
//         });
//       });
//   });
// };

// deletePizza = async (req, res) => {
//   await Pizza.findOneAndDelete({ _id: req.params.id }, (err, pizza) => {
//     if (err) {
//       return res.status(400).json({ success: false, error: err });
//     }

//     if (!pizza) {
//       return res.status(404).json({ success: false, error: `Pizza not found` });
//     }

//     return res.status(200).json({ success: true, data: pizza });
//   }).catch(err => console.log(err));
// };

// getPizzaById = async (req, res) => {
//   await Pizza.findOne({ _id: req.params.id }, (err, pizza) => {
//     if (err) {
//       return res.status(400).json({ success: false, error: err });
//     }

//     if (!pizza) {
//       return res.status(404).json({ success: false, error: `Pizza not found` });
//     }
//     return res.status(200).json({ success: true, data: pizza });
//   }).catch(err => console.log(err));
// };

// getPizzas = async (req, res) => {
//   await Pizza.find({}, (err, pizzas) => {
//     if (err) {
//       return res.status(400).json({ success: false, error: err });
//     }
//     if (!pizzas.length) {
//       return res.status(404).json({ success: false, error: `Pizza not found` });
//     }
//     return res.status(200).json({ success: true, data: pizzas });
//   }).catch(err => console.log(err));
// };

// module.exports = {
//   createPizza,
//   updatePizza,
//   deletePizza,
//   getPizzas,
//   getPizzaById
// };

const db = require('../models');

// Defining methods for the pizzaController
module.exports = {
  createPizza: function(req, res) {
    // const body = req.body;
    //validate request
    if (req.body.quantity && req.body.size && req.body.classification) {
      //create data
      const pizzaData = {
        quantity: req.body.quantity,
        size: req.body.size,
        classification: req.body.classification
      };
      db.Pizza.create(pizzaData)
        .then(dbPizza => res.json(dbPizza))
        .catch(err => res.status(422).json(err));
      //       .then(dbPizza => {
      //         // setting the client cookie
      //         res.cookie('pizzaId', dbPizza._id, {
      //           expires: new Date(Date.now() + 900000),
      //           httpOnly: false
      //         });
      //         // set the session
      //         req.session.pizzaId = dbPizza._id;
      //         return res.json(dbPizza);
      //       })
      //       .catch(err => res.status(422).json(err));
    }
  },

  findPizzaById: function(req, res) {
    db.Pizza.findById(req.params.id)
      .then(dbPizza => res.json(dbPizza))
      .catch(err => res.status(422).json(err));
  },

  delete: function(req, res) {
    db.Pizza.remove({ _id: req.params.id })
      .then(dbPizza => res.json(dbPizza))
      .catch(err => res.status(422).json(err));
  },

  // find: function(req, res) {
  //   db.Pizza.findOne({ _pizzaId: req.session.pizzaId })
  //     .then(dbPizza => res.json(dbPizza))
  //     .catch(err => res.status(422).json(err));
  // },

  update: function(req, res) {
    db.Pizza.updateOne(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    )
      .then(dbPizza => res.json(dbPizza))
      .catch(err => res.status(422).json(err));
  },
  findAllPizzas: function(req, res) {
    db.Pizza.find()
      .sort({ classification: 1, size: 1, quantity: 1 })
      .then(dbPizza => res.json(dbPizza))
      .catch(err => res.status(422).json(err));
  }
};
