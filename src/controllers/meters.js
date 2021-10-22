const express = require('express');
const Meter = require('../models/meter')

const router = express.Router();

router.get('/', (req, res) => {
  res.json(Meter.list);
});

router.post('/', (req, res) => {
  let meter = new Meter(req.body)
  res.json(meter)
})

module.exports = router;