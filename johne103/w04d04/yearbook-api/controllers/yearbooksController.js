const Yearbook = require('../models/yearbook');

function yearbooksIndex(req, res) {
  Yearbook.find({}, (err, yearbooks) => {
    if(err) res.status(500).json({ error: err});
    res.json(yearbooks);
  });
}

function yearbooksCreate(req, res) {
  Yearbook.create(req.body, (err, yearbook) => {
    if(err) res.status(500).json({ error: err});
    res.status(201).json(yearbook);
  });
}

module.exports = {
  index: yearbooksIndex,
  create: yearbooksCreate
};
