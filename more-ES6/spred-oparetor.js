const numbers = [3, 7, 3, 9, 9, 5, 8, 3];
// console.log(...numbers);
const even = numbers.filter((num) => num % 2 == 0);
const oddNum = numbers.filter((num) => num % 2 === 1);
console.log(oddNum);
