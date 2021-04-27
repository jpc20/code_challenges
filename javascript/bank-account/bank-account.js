//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.openStatus = false;
  }

  open() {
    if (this.openStatus === true) {
      throw new ValueError();
    } else {
      this.openStatus = true;
      this._balance = 0;
    }
  }

  close() {
    if (this.openStatus === false) {
      throw new ValueError();
    } else {
      this.openStatus = false;
    }
  }

  deposit(dollars) {
    this._balance += dollars;
  }

  withdraw(dollars) {
    if (this.openStatus === false || this._balance < dollars) {
      throw new ValueError();
    } else {
      this._balance -= dollars;
    }
  }

  get balance() {
    if (this.openStatus === false) {
      throw new ValueError();
    } else {
      return this._balance;
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
