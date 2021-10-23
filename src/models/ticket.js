module.exports = class Ticket {
  static list = [];
  static nextAvailableId = 1;

  constructor(args) {
    this.unpaidTime = args.unpaidTime
    this.car = args.car
    this.policeOfficer = args.policeOfficer
    this.fine = this.calculateFine(this.unpaidTime)

    // Below are responsibility of a database!
    this.id = Ticket.nextAvailableId
    Ticket.nextAvailableId++

    Ticket.list.push(this)
  }

  static getById(id) {
    return Ticket.list.filter(ticket => ticket.id == id)[0]
  }

  static getByCar(carId) {
    return Ticket.list.filter(ticket => ticket.car.id == carId)
  }

  calculateFine(unpaidTime) {
    const FIRST_HOUR_FINE = 25.00
    const ADDITIONAL_HOUR_FINE = 10.00
    const MINUTES_IN_AN_HOUR = 60

    let unpaidMinutes = Math.floor(unpaidTime / 60000)
    let unpaidHours = unpaidMinutes / MINUTES_IN_AN_HOUR
    let roundedAdditionalHoursToFine = Math.ceil(unpaidHours - 1);
    let roundedOrZeroHours = Math.max(roundedAdditionalHoursToFine, 0)
    return FIRST_HOUR_FINE + roundedOrZeroHours * ADDITIONAL_HOUR_FINE
  }
}