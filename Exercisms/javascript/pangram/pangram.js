export const isPangram = (str) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let answer = true
  alphabet.forEach((char) => {
    if (!str.toLowerCase().includes(char)) {
      answer = false;
    }
  });
  return answer;
};
