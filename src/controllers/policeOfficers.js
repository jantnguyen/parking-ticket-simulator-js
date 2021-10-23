const express = require('express');
const PoliceOfficer = require('../models/policeOfficer')
const Meter = require('../models/meter')

const router = express.Router();

router.get('/', (req, res) => {
  res.json(PoliceOfficer.list);
});

router.post('/', (req, res) => {
  let policeOfficer = new PoliceOfficer(req.body)
  res.json(policeOfficer)
})

router.post('/:id/checkMeter', (req, res) => {
  let policeOfficer = PoliceOfficer.getById(req.params.id)
  let meter = Meter.getById(req.body.meterId)
  policeOfficer.checkMeter(meter)

  res.sendStatus(200)
})

router.get('/:id/eat', (req, res) => {
  res.json({message: '🍩🍩🍩🍩🍩🍩🍩' });
})

module.exports = router;