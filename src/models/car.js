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
    this.parkedAt = Date.now()
    Car.nextAvailableId++

    Car.list.push(this)
  }
}