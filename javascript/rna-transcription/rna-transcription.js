const compliments = { G: "C", C: "G", T: "A", A: "U" };
export const toRna = (sequence) => {
  if (sequence === "") return "";
  return compliments[sequence]
};
