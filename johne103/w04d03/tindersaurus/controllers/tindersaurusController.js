const Tinder = require('../models/tindersaurus');

//INDEX
function tinderIndex(req, res){
  Tinder.find({}, (err, tinder) => {
    if(err) return res.status(500).send("500: Server Error");
    res.render('tindersaurus/index', { tinder });
  });
}

//NEW
function tinderNew(req, res){
  res.render('tindersaurus/new');
}

//CREATE
function tinderCreate(req, res) {
  Tinder.create(req.body.Tinder, (err, tinder) => {
    if(err) return res.status(500).send("500: Server Error");
    res.redirect(301, '/tindersaurus');
  });
}

//SHOW
function tinderShow(req, res) {
  Tinder.findById(req.params.urlId, (err, tinder) => {
    if(err) return res.status(500).send("500: Server Error");
    res.render('tindersaurus/show', { tinder });
  });
}

//EDIT
function tinderEdit(req, res) {
  Quote.findById(req.params.urlId, (err, quote) => {
    if(err) return res.status(500).send("500: Server Error");
    res.render('tindersaurus/edit', { quote });
  });
}

//UPDATE
function tinderUpdate(req, res) {
  Quote.findByIdAndUpdate(req.params.urlId, req.body.quote, (err, quote) => {
    if(err) return res.status(500).send("500: Server Error");
    res.redirect(301, `/tindersaurus/${tinder.id}`);
  });
}

//DELETE
function tinderDelete(req, res) {
  Quote.findByIdAndRemove(req.params.urlId, (err) => {
    if(err) return res.status(500).send("500: Server Error");
    res.redirect(301, '/tindersaurus');
  });
}

module.exports = {
  index: tinderIndex,
  new: tinderNew,
  create: tinderCreate,
  show: tinderShow,
  edit: tinderEdit,
  update: tinderUpdate,
  delete: tinderDelete

};
