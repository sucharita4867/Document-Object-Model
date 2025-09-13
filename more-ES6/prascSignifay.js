// const person = {
//   name: "sahil",
//   age: 22,
//   friend: ["monirul", "hasu", "tuhinur", "himadri"],
//   family: {
//     father: "imran",
//     mother: "suhana",
//     brother: "sakil",
//   },
// };
// console.log(person);
// const dataJson = JSON.stringify(person);
// // console.log(dataJson);
// const JsonData = JSON.parse(dataJson);
// console.log(JsonData);

const products = [
  { name: "iphone", price: 50000, color: "sky", brand: "iphone" },
  { name: "samsung", price: 40000, color: "blue", brand: "samsung" },
  { name: "redme", price: 20000, color: "black", brand: "redme" },
  { name: "16promax", price: 60000, color: "gold", brand: "iphone" },
  { name: "poko", price: 15000, color: "red", brand: "poko" },
];
const newObject = {
  name: "nokia",
  price: 10000,
  color: "gray",
  brand: "nokia",
};
// const newArray = [...products, newObject];
// console.log(newArray);

const remainingBrand = products.filter((p) => p.brand !== "iphone");
console.log(...remainingBrand, newObject);
