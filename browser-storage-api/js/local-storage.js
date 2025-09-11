const addNumberLS = () => {
  const number = Math.ceil(Math.random() * 50);
  console.log(number);
  localStorage.setItem("number", number);
};

const setJectToLS = () => {
  const customer = { name: "rabi", products: 3, price: 85 };
  localStorage.setItem("customer", customer);
};

const getNumberLS = () => {
  const number = localStorage.getItem("number");
  console.log("from saved local storage", number);
};
