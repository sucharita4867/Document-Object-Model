// normal function
function add(num1, num2) {
  const result = num1 + num2;
  //   console.log(num1, num2, result);
}
add(10, 20);

// variable function
const price = function (a, b) {
  const result = a + b;
  //   console.log(result);
};
price(20, 40);

// arrow function
const number = (a, b) => a * b;
const output = number(25, 49);
// console.log(output);

// const sumAll = (a, b, c, d, e, f) => a + b + c + d + e + f; NAN
// const sumAll = (a, b, c, d = 0, e = 0, f = 0) => a + b + c + d + e + f; ans
const total = sumAll(2, 5, 6);
// console.log(a, b, c, d, e, f, total);
console.log(total);
// console.log(total);
