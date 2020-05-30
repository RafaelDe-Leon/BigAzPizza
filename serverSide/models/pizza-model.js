const mongoose = require('mongoose');

const PizzaSchema = new mongoose.Schema(
  {
    quantity: {
      type: Number,
      required: true
    },
    size: { type: [String], required: true }
  },
  { timestamps: true }
);

var Pizza = mongoose.model('Pizza', PizzaSchema);
module.exports = Pizza;
