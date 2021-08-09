const compliments = { G: "C", C: "G", T: "A", A: "U" };
export const toRna = (sequence) => {
  if (sequence === "") return "";
  return sequence
    .split("")
    .map((dna) => compliments[dna])
    .join("");
};
