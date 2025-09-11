const addNumberLS = () => {
  const number = Math.ceil(Math.random() * 50);
  console.log(number);
  localStorage.setItem("number", number);
};

const setJectToLS = () => {
  const customer = { name: "rabi", products: 3, price: 85 };
  const customerJSON = JSON.stringify(customer);
  localStorage.setItem("customer", customerJSON);
};
const readObjectFromLs = () => {
  const customerJSON = localStorage.getItem("customer");
  const customerObject = JSON.parse(customerJSON);
  console.log(customerObject);
};
const getNumberLS = () => {
  const number = localStorage.getItem("number");
  console.log("from saved local storage", number);
};
