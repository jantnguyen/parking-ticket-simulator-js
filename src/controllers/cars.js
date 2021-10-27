const express = require('express');
const Car = require('../models/car')

const router = express.Router();

router.get('/', async (req, res) => {
  let cars = await Car.findAll()
  res.json(cars);
});

router.post('/', async (req, res) => {
  try {
    // let car = new Car(req.body)
    let car = Car.build(req.body);
    await car.save();
    res.json(car)
  } catch (err) {
    res.sendStatus(500)
  }
})

router.post('/:id/park', (req, res) => {
  let body = req.body
  let car = Car.getById(req.params.id)
  let receipt = car.park(body.minutesPurchased, body.parkingSpotId)
  res.json(receipt);
})

module.exports = router;