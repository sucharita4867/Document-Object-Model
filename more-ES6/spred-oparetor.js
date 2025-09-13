const numbers = [3, 7, 3, 9, 9, 5, 8, 3];
// console.log(...numbers);
const even = numbers.filter((num) => num % 2 == 0);
const oddNum = numbers.filter((num) => num % 2 === 1);
// console.log(oddNum);
// numbers.forEach((num) => num > 10)
const array = numbers.map((num) => num + 10);
// console.log(array);
const num = numbers.find((number) => number < 10);
// console.log(num);
// const double = numbers.map((x) => x * 4);
console.log(...numbers);
