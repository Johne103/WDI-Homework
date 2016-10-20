const Tinder = require('../models/tindersaurus');

//INDEX
function tinderIndex(req, res){
  Tinder.find({}, (err, tinders) => {
    if(err) return res.status(500).send("500: Server Error (tinderIndex)");
    res.render('tindersaurus/index', { tinders });
  });
}

//NEW
function tinderNew(req, res){
  res.render('tindersaurus/new');
}

//CREATE
function tinderCreate(req, res) {
  Tinder.create(req.body.tinder, (err, tinder) => {
    if(err) return res.status(500).send("500: Server Error (tinderCreate)");
    res.redirect(301, '/tindersaurus/index');
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
  Tinder.findById(req.params.urlId, (err, tinder) => {
    console.log("err:", err);
    if(err) return res.status(500).send("500: Server Error (tinderEdit)");
    res.render('tindersaurus/edit', { tinder });
  });
}

//UPDATE
function tinderUpdate(req, res) {
  Tinder.findByIdAndUpdate(req.params.urlId, req.body.tinder, (err, tinder) => {
    if(err) return res.status(500).send("500: Server Error");
    res.redirect(301, `/tindersaurus/${tinder.id}`);
  });
}

//DELETE
function tinderDelete(req, res) {
  Tinder.findByIdAndRemove(req.params.urlId, (err) => {
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
