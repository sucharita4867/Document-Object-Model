const numbers = [2, 3, 5, 6, 7, 8, 9, 1];
const total = numbers.reduce((acc, curr) => acc + curr);
console.log(total);

function min(nums) {
  return Math.min(nums);
}
console.log(min([1, 3, 2]));
const cube = (x) => x * x * x;
console.log(cube(2));
const [a, b] = [1, 2, 3, 4, 45, 5];
console.log(a + b);
const { x, y, z } = { x: 1, y1: 2, z: 3 };
console.log(x, y, z);
const nums = [1, 2, 3, 4, 5];
let output = nums.filter((n) => n % 2);
console.log(output);
const friends = ["Moushumi", "Misha", "Manna", "mimi", "mahiya"];

friends.find((friend) => friend.length == 5);
console.log(friends);
