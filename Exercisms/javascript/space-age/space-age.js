export const age = (planet, secs) => {
  let years = 0.00;
  if (planet.toLowerCase() === 'earth') years = secs / 31557600.00
  return Math.round(years * 100) / 100
};
