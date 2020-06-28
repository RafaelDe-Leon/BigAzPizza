const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PizzaSchema = new Schema({
  quantity: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  classification: {
    type: String,
    required: true
  }
});

var Pizza = mongoose.model('Pizza', PizzaSchema);
module.exports = Pizza;
