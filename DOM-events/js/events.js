// <!-- option 2 for click events handler -->
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}
function MakeRed() {
  document.body.style.backgroundColor = "red";
}
// <!-- option 3 : get element by id and then set onclick to a function-->

const btnMakeBlue = document.getElementById("btn-make-blue");
// console.log(btnMakeBlue)
btnMakeBlue.onclick = function makeBlue() {
  document.body.style.backgroundColor = "blue";
};
// option 3 : different version
const btnMakePurple = document.getElementById("btn-make-purple");
// console.log(btnMakePurple)

btnMakePurple.onclick = makeBtnpurple;
function makeBtnpurple() {
  document.body.style.backgroundColor = "purple";
}
