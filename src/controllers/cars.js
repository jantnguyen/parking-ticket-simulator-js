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

router.post('/:id/park', (req, res) => {
  let body = req.body
  let car = Car.getById(req.params.id)
  car.park(body.minutesPurchased, body.parkingSpotId)
  res.status(200);
})

module.exports = router;