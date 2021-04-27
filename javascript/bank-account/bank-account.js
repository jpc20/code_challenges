//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  
  constructor() {
    this.openStatus = false;
  }

  open() {
    this.openStatus = true;
    this._balance = 0;
  }

  close() {
    this.openStatus = false;
  }

  deposit(dollars) {
    this._balance += dollars;
  }

  withdraw(dollars) {
    if (this._balance >= dollars) this._balance -= dollars;
  }

  get balance() {
    if (this.openStatus === false) {
      throw new ValueError;
    } else {
      return this._balance;
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
