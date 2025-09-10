console.log("one");
console.log("tow");
// callThree();

setTimeout(() => {
  console.log("new three");
}, 2000);

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => dataUsername(data));
// for (const item of data) {
//   console.log(item);
// }
console.log("four");
console.log("five");

function callThree() {
  console.log("three");
}
