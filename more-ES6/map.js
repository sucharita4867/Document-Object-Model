const numbers = [2, 4, 6, 8];
// const num = [];
// for (const key of numbers) {
//   const dubul = key * 2;
//   num.push(dubul);
// }
// console.log(num);

// const dubulIt = (x) => x * 2;
// const double = numbers.map(dubulIt);

const double = numbers.map((x) => x * 4);
const squer = numbers.map((num) => num * num);
// console.log(squer);
const friends = ["Anu", "Sucho", "Racho", "Farsh", "Sabana", "Saniya"];
const nameLength = friends.map((name) => name.length);
const firstLatter = friends.map((name) => name[0].toLowerCase());
// console.log(firstLatter);

const result = numbers.map((num, index) => {
  console.log(num * index);
});
console.log(result);
