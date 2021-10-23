const Meter = require("./meter");
const Ticket = require("./ticket");

module.exports = class PoliceOfficer {
  static list = [];
  static nextAvailableId = 1;

  constructor(args) {
    this.badgeNumber = args.badgeNumber
    this.firstName = args.firstName
    this.lastName = args.lastName

    // Below are responsibility of a database!
    this.id = PoliceOfficer.nextAvailableId
    PoliceOfficer.nextAvailableId++

    PoliceOfficer.list.push(this)
  }

  static getById(id) {
    return PoliceOfficer.list.filter(policeOfficer => policeOfficer.id == id)[0]
  }

  checkMeter(meter) {
    let parkingSpots = meter.parkingSpots
    parkingSpots.forEach(parkingSpot => {
      if(parkingSpot.isOverdue()) {
        return this.issueTicket(parkingSpot.car, parkingSpot.calculateUnpaidTime())
      }
    })
  }

  issueTicket(car, unpaidTime) {
    let ticket = new Ticket({car, unpaidTime, policeOfficer: this})
    car.tickets.push(ticket.id)
    return ticket
  }
}