const mongoose = require('mongoose');

const yearbookSchema = mongoose.Schema({
  name: { type: String, trim: true },
	github: { type: String, trim: true },
	image: { type: String, trim: true },
  bio: { type: String, trim: true },
  portfolio: { type: String, trim: true},
  project_titles: { type: [], }
});

module.exports = mongoose.model('Yearbook', yearbookSchema);
