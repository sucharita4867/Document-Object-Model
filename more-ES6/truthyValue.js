// const num = "10";
// console.log(typeof +num, num);

const number = "110";
// if (number > 20) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// const numbers = number > 20 ? console.log("true") : console.log("false");
const isActive = false;
const isTrue = () => {
  console.log("show green light");
};
const isFalse = () => {
  console.log("show red light");
};
// const result = isActive ? isTrue() : isFalse();
isActive && isTrue();
isActive || isFalse();
