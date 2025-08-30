const sum = (a, b) => a + b;
// console.log(sum(3, 4));

// single parameters

const squer = (num) => num * num;
// console.log(squer(4));

const divition = (number) => number / 2;
// console.log(divition(50));

// multi line arrow

const doMath = (x, z) => {
  const sum = x + 10;
  const multiply = z * 8;
  const totals = sum + multiply;
  return totals;
};
const output = doMath(2, 4);
console.log(output);
