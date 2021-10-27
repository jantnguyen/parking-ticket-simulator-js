const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../config/database')

const ParkingSpot = require("./parkingSpot");
const Meter = require("./meter");
const Ticket = require("./ticket");
const { models } = require('../config/database');

class DBCar extends Model {}
DBCar.init({
  make: {
    type: Sequelize.STRING
  },
  model: {
    type: Sequelize.STRING
  },
  color: {
    type: Sequelize.STRING
  },
  licensePlate: {
    type: Sequelize.STRING,
    field: 'license_plate'
  },
}, {
  sequelize: db,
  timestamps: false,
  modelName: 'car'
})

// module.exports = Car;

module.exports = class Car extends DBCar {
  constructor(args) {
    super()
    this.id
    this.make = args.make
    this.model = args.model
    this.color = args.color
    this.licensePlate = args.licensePlate

    // Below are responsibility of a database!
    this.tickets = []
  }

  static getById(id) {
    return Car.list.filter(car => car.id == id)[0]
  }

  park(minutesPurchased, parkingSpotId) {
    let parkingSpot = ParkingSpot.getById(parkingSpotId)
    let meter = Meter.getById(parkingSpot.meterId)
    let receipt = meter.purchase(minutesPurchased, parkingSpotId, this)
    return receipt
  }

  getTickets() {
    this.tickets = Ticket.getByCar(this.id)
  }
}