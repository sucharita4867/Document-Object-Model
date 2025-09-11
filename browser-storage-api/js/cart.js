const handleProduct = () => {
  const productEl = document.getElementById("product");
  const QuantityEl = document.getElementById("Quantity");
  const product = productEl.value;
  const quantity = QuantityEl.value;
  console.log("product Add", product, quantity);

  productEl.value = "";
  QuantityEl.value = "";
};

const displayProduct = (product, quantity) => {
  const li = document.createElement("li");
  li.innerText = `${product}: ${quantity}`;

  const ul = document.getElementById("product-container");
  ul.append(li);
};
