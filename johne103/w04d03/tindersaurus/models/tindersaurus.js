const mongoose = require('mongoose');

const tinderSchema = mongoose.Schema({
  name: String,
  age: Number,
  species: String,
  image: String,
  population: Number,
  foodType: String
});

module.exports = mongoose.model('Tinder', tinderSchema);
