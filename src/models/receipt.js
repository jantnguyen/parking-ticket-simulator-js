module.exports = class Receipt {
  static list = [];
  static nextAvailableId = 1;

  constructor(args) {
    this.purchasedUntil = args.purchasedUntil
    this.licensePlate = args.licensePlate

    // Below are responsibility of a database!
    this.id = Receipt.nextAvailableId
    Receipt.nextAvailableId++

    Receipt.list.push(this)
  }

  static getById(id) {
    return Receipt.list.filter(receipt => receipt.id == id)[0]
  }
}