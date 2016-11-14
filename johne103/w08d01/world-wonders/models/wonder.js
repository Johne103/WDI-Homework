const mongoose = require('mongoose');

const wondersSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  country: { type: String, required: true, trim: true },
  location: { type: String, required: true, trim: true },
  info: { type: String, required: true, trim: true },
  posterImage: { type: String }
});

module.exports = mongoose.model('Wonder', wondersSchema);
