module.exports = class ParkingSpot {
  static list = [];
  static nextAvailableId = 1;

  constructor(meterId) {
    this.meterId = meterId
    this.purchasedUntil

    // Below are responsibility of a database!
    this.id = ParkingSpot.nextAvailableId
    ParkingSpot.nextAvailableId++

    ParkingSpot.list.push(this)
  }

  static getById(id) {
    return ParkingSpot.list.filter(parkingSpot => parkingSpot.id == id)[0]
  }

  static getByMeterId(meterId) {
    return ParkingSpot.list.filter(parkingSpot => parkingSpot.meterId == meterId)
  }
}