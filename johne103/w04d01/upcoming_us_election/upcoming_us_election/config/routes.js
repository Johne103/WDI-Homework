const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.get('/contacts', (req, res) => res.render('contacts'));
router.get('/debates2008', (req, res) => res.render('debates2008'));
router.get('/debates2012', (req, res) => res.render('debates2012'));
router.get('/debates2016', (req, res) => res.render('debates2016'));

module.exports = router;
