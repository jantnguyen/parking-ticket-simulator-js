const ParkingSpot = require("./parkingSpot");
const Meter = require("./meter");

module.exports = class Car {
  static list = [];
  static nextAvailableId = 1;

  constructor(args) {
    this.make = args.make
    this.model = args.model
    this.color = args.color
    this.licensePlate = args.licensePlate

    // Below are responsibility of a database!
    this.id = Car.nextAvailableId
    Car.nextAvailableId++

    Car.list.push(this)
  }

  park(minutesPurchased, parkingSpotId) {
    let parkingSpot = ParkingSpot.getById(parkingSpotId)
    let meter = Meter.getById(parkingSpot.meterId)
    meter.purchase(minutesPurchased, parkingSpotId)
  }

  static getById(id) {
    return Car.list.filter(car => car.id == id)[0]
  }
}