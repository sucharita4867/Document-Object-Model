const student = [
  { id: 1, name: "anu", marks: 50 },
  { id: 2, name: "sucho", marks: 85 },
  { id: 3, name: "racho", marks: 75 },
  { id: 4, name: "farish", marks: 90 },
];
const names = student.map((student) => student.marks * 4);
// console.log(names);
const goodStudents = student.filter((student) => student.marks > 80);
// console.log(goodStudents);
const goodStudent = student.find((student) => student.marks > 80);
console.log(goodStudent);
