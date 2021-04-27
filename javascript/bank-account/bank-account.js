//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  
  constructor() {
  }

  open() {
    this._balance = 0;
  }

  close() {
    throw new Error('Remove this statement and implement this function');
  }

  deposit(dollars) {
    this._balance += dollars;
  }

  withdraw() {
    throw new Error('Remove this statement and implement this function');
  }

  get balance() {
    return this._balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
