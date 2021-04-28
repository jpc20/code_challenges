//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(input) {
    this.input = input;
  }

  get rows() {
    let allRows = [];
    this.input.split('\n').forEach(nums => {
      let oneRow = [];
      nums.split(' ').forEach(num => {
        oneRow.push(parseInt(num))
      })
      allRows.push(oneRow)
    });
    return allRows;
  }

  get columns() {
    throw new Error('Remove this statement and implement this function');
  }
}
