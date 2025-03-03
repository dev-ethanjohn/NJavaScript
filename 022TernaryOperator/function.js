const happyCheck = (happy) => {
  if (happy === true) {
    return "Yay";
  } else {
    return "Nope";
  }
};

const result1 = happyCheck(true);
console.log(result1); //? Yay

// NOTE: USING TERNARY OPERATOR
const happyCheck2 = (happy) => {
  return happy === true ? "Yay" : "Nope";
};

const result2 = happyCheck2(false);
console.log(result2); //? Nope

// NOTE: SHORTHAND .only good for 1line expression
const happyCheck3 = (happy) => (happy ? "Yay!" : "Nope");
const result3 = happyCheck3(true);
console.log(result3); //? Yay!
