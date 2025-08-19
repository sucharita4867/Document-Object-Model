// const section = document.getElementsByTagName("section");
const sections = document.querySelectorAll("section");
for (let section of sections) {
  //   console.log(section);
  section.style.backgroundColor = "lightblue";
  section.style.border = "3px solid green";
  section.style.padding = "20px";
  section.style.marginBottom = "8px";
  section.style.borderRadius = "16px";
}

// const playersSections = document.getElementById("players-container");
// for (let playersContainer of playersSections) {
//   console.log(playersContainer);
//   playersContainer.style.backgroundColor = "blue";
// }
// dynamic class
// for (const section of sections) {
//   section.classList.add("section-card");
// }
