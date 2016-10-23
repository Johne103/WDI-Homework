const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
  make: { type: String, trim: true, required: true, unique: true },
  model: { type: String, trim: true, required: true },
  color: { type: String, }
});

module.exports = mongoose.model('Car', carSchema);
