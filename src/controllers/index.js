const express = require('express');

const emojis = require('./emojis');
const cars = require('./cars');
const meters = require('./meters');
const policeOfficers = require('./policeOfficers');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('test')
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/emojis', emojis);
router.use('/cars', cars);
router.use('/meters', meters);
router.use('/policeOfficers', policeOfficers);

module.exports = router;