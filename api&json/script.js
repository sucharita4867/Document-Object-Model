const person = {
  name: "rabi",
  age: 34,
  money: 20000,
  works: "dev",
  family: {
    son: "ishan",
    girl: "ishani",
    wife: "paromita",
  },
};
// console.log(typeof people);
console.log(person);

// JSON : js object with notation
// JSON.stringify ==> string;
// JSON.parse ==> object;

const personJSON = JSON.stringify(person);
console.log(personJSON, typeof personJSON);

const parseJSON = JSON.parse(personJSON);
console.log(parseJSON, typeof parseJSON);
