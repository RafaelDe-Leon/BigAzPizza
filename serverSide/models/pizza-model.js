const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Pizza = new Schema({
    name: { type: String, required: true },
    time: { type: [String], required: true },
    priceA: { type: Number, required: true },
    rating: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('pizzas', Pizza);