export const age = (planet, secs) => {
  let years = secs / 31557600.00;
  if (planet.toLowerCase() === 'mercury') years /= 0.2408467
  if (planet.toLowerCase() === 'venus') years /= 0.61519726
  if (planet.toLowerCase() === 'mars') years /= 1.8808158
  if (planet.toLowerCase() === 'jupiter') years /= 11.862615
  if (planet.toLowerCase() === 'saturn') years /= 29.447498
  if (planet.toLowerCase() === 'uranus') years /= 84.016846
  if (planet.toLowerCase() === 'neptune') years /= 164.79132
  return Math.round(years * 100) / 100
};
