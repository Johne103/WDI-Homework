const Wonder = require('../models/wonder');

function wondersIndex(req, res) {
  Wonder.find((err, wonders) => {
    if(err) return res.status(500).json({ error: err });
    return res.json(wonders);
  });
}

function wondersCreate(req, res) {
  Wonder.create(req.body, (err, wonder) => {
    if(err) return res.status(400).json({ error: err });
    return res.json(wonder);
  });
}

function wondersShow(req, res) {
  Wonder.findById(req.params.id, (err, wonder) => {
    if(err) return res.status(500).json({ error: err });
    if(!wonder) return res.status(404).json({ error: 'Not found' });
    return res.json(wonder);
  });
}

function wondersUpdate(req, res) {
  Wonder.findById(req.params.id, (err, wonder) => {
    if(err) return res.status(500).json({ error: err });
    if(!wonder) return res.status(404).json({ error: 'Not found' });

    for(const key in req.body) {
      wonder[key] = req.body[key];
    }

    wonder.save((err, wonder) => {
      if(err) return res.status(400).json({ error: err });
      res.json(wonder);
    });
  });
}

function wondersDelete(req, res) {
  Wonder.findById(req.params.id, (err, wonder) => {
    if(err) return res.status(500).json({ error: err });
    if(!wonder) return res.status(404).json({ error: 'Not found' });

    wonder.remove(err => {
      if(err) return res.status(500).json({ error: err });
      res.status(204).send();
    });
  });
}

module.exports = {
  index: wondersIndex,
  create: wondersCreate,
  show: wondersShow,
  update: wondersUpdate,
  delete: wondersDelete
};
