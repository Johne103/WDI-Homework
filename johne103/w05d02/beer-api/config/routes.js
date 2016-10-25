const express  = require("express");
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const beersController = require('../controllers/beers');
const authController = require('../controllers/auth');
const secret = require('./tokens.js').secret;


function secureRoute(req, res, next) {
  if(!req.headers.authorization) return res.status(401).json({ message: "Unauthorized" });
  console.log('taken to be set');
  let token = req.headers.authorization.replace('Bearer ', '');
  console.log('token set');

  jwt.verify(token, secret, (err, payload) => {
    if(err) return res.status(401).json({ message: "Unauthorized"});
    req.user = payload; //payload put on user object on request

    next();
  });
}

router.route('/register')
.post(authController.register);

router.route('/login')
.post(authController.login);

router.route('/beers')
  .get(beersController.index)
  .post(beersController.create);

router.route('/beers/:id')
  .all(secureRoute)
  .get(beersController.show)
  .put(beersController.update)
  .delete(beersController.delete);


module.exports = router;
