const secureRoute = require('../lib/secureRoute');
const router = require('express').Router();

// Add user routes or other resource routes here
const wondersController = require('../controllers/wonders');
const authController = require('../controllers/auth');

router
  .post('/login', authController.login)
  .post('/register', authController.register);

router.route('/wonders')
  .get(wondersController.index)
  .post(secureRoute, wondersController.create);

router.route('/wonders/:id')
  .get(wondersController.show)
  .put(secureRoute, wondersController.update)
  .delete(secureRoute, wondersController.delete);

module.exports = router;
