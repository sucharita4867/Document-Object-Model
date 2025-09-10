function one() {
  tow();
  console.log(1);
}
function tow() {
  three();
  console.log(2);
}
function three() {
  setTimeout(() => {
    console.log("three inside", 0);
  }, 5000);
  four();
  console.log(3);
}
function four() {
  five();
  console.log(4);
}
function five() {
  setTimeout(() => {
    console.log("five inside", 0);
  }, 3000);
  console.log(5);
}
one();
