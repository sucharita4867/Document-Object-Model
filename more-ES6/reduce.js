const numbers = [2, 3, 5, 6, 7, 8, 9, 1];
const total = numbers.reduce((acc, curr) => acc + curr);
console.log(total);

function min(nums) {
  return Math.min(nums);
}
console.log(min([1, 3, 2]));
const cube = (x) => x * x * x;
console.log(cube(2));
