const Car = require('../models/car');

function carsIndex(req, res) {
  Car.find({}, (err, cars) => {
    if(err) return res.status(500).json({ error: err });
    res.json(cars);
  });
}

function carsCreate(req, res) {
  Car.create(req.body, (err, car) => {
    if(err) return res.status(400).json({ error: "400: Invalid data" });
    res.status(201).json(car);
  });
}

function carsShow(req, res) {
  Car.findById(req.params.id, (err, car) => {
    if(err) return res.status(500).json({ error: err });
    res.json(car);
  });
}

function carsUpdate(req, res) {
  Car.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, car) => {
    if(err) return res.status(400).json({ error: "400: Invalid data" });
    res.json(car);
  });
}

function carsDelete(req, res) {
  Car.findByIdAndRemove(req.params.id, (err) => {
    if(err) return res.status(500).json({ error: err });
    res.send(204);
  });
}


module.exports = {
  index: carsIndex,
  create: carsCreate,
  show: carsShow,
  update: carsUpdate,
  delete: carsDelete
};
