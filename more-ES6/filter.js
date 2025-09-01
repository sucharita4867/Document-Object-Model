const numbers = [2, 3, 54, 63, 7, 85, 9, 13];

const graterThan10 = numbers.filter((x) => x > 5);
const even = numbers.filter((num) => num % 2 === 0);
// console.log(even);
const multiplay = numbers.filter((i) => i < 10);
// console.log(multiplay);
const oddNumber = numbers.filter((z) => z % 2 !== 0);
console.log(oddNumber);
