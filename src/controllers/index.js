const express = require('express');

const emojis = require('./emojis');
const cars = require('./cars');


const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/emojis', emojis);
router.use('/cars', cars);

module.exports = router;