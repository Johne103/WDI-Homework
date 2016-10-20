const router = require('express').Router();
const yearbooksController = require('../controllers/yearbooksController.js');

router.route('/yearbooks')
  .get(yearbooksController.index)
  .post(yearbooksController.create);

module.exports = router;
