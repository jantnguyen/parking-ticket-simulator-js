const express = require('express');
const Car = require('../models/car')

const router = express.Router();

router.get('/', (req, res) => {
  res.json(Car.list);
});

router.post('/', (req, res) => {
  let car = new Car(req.body)
  res.json(car)
})

module.exports = router;