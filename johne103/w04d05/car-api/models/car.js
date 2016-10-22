const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
  make: String,
  model: String,
  color: []
});

module.exports = mongoose.model('Car', carSchema);
