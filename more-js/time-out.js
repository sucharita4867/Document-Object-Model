console.log(1);
console.log(2);
const timeOutId = setTimeout(() => {
  console.log(3);
}, 5000);
const timeOutId2 = setTimeout(() => {
  console.log(35);
}, 5000);

console.log("timeoutId", timeOutId, timeOutId2);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
