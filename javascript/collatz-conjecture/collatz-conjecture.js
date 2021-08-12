export const steps = (n) => {
  var count = 0;
  while (n % 2 === 0) {
    n = n / 2;
    count++;
  }
  return count;
};
