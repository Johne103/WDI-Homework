const router = require('express').Router();
const tinderController = require('../controllers/tindersaurusController');

// HOMEPAGE
router.get('/', (req, res) => res.render('home'));

// INDEX & CREATE
router.route('/tindersaurus')
  .get(tinderController.index)
  .post(tinderController.create);


// NEW
router.get('/tindersaurus/new', tinderController.new);


// SHOW, UPDATE & DELETE
router.route('/tindersaurus/:urlId')
  .get(tinderController.show)
  .put(tinderController.update)
  .delete(tinderController.delete);

  // EDIT
router.get('/tindersaurus/:urlId/edit', tinderController.edit);
router.get('/tindersaurus/:urlId', tinderController.show);

module.exports = router;
