const ParkingSpot = require("./parkingSpot");
const Meter = require("./meter");
const Ticket = require("./ticket");

module.exports = class Car {
  static list = [];
  static nextAvailableId = 1;

  constructor(args) {
    this.make = args.make
    this.model = args.model
    this.color = args.color
    this.licensePlate = args.licensePlate
    this.tickets = []

    // Below are responsibility of a database!
    this.id = Car.nextAvailableId
    Car.nextAvailableId++

    Car.list.push(this)
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