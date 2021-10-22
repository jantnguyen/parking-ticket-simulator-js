const ParkingSpot = require("./parkingSpot");

module.exports = class Meter {
  static list = [];
  static nextAvailableId = 1;

  constructor(args) {
    // Below are responsibility of a database!
    this.id = Meter.nextAvailableId
    Meter.nextAvailableId++

    this.parkingSpots = Meter.createLot(args.lotSize, this.id)

    Meter.list.push(this)
  }

  purchase(minutes, parkingSpotId) {
    let parkingSpot = ParkingSpot.getById(parkingSpotId)
    parkingSpot.purchasedUntil = new Date(Date.now() + minutes*60000);
  }

  static createLot(size, meterId) {
    [...Array(size)].forEach(spotId => new ParkingSpot(meterId))
    return ParkingSpot.getByMeterId(meterId)
  }

  static getById(id) {
    return Meter.list.filter(meter => meter.id == id)[0]
  }
}