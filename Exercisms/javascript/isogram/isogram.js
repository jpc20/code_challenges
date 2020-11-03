export const isIsogram = (str) => {
  let letters = {};
  let isogram = true;
  str.split('').forEach((char, i) => {
    if (!letters[char.toLowerCase()] || char == ' ' || char == '-') {
      letters[char.toLowerCase()] = true;
    } else {
      isogram = false;
    }
  });
  return isogram;
};
