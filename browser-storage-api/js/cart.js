const handleProduct = () => {
  const productEl = document.getElementById("product");
  const QuantityEl = document.getElementById("Quantity");
  const product = productEl.value;
  const quantity = parseInt(QuantityEl.value);
  //   console.log("product Add", product, quantity);

  displayProduct(product, quantity);
  addProductToCart(product, quantity);

  productEl.value = "";
  QuantityEl.value = "";
};

const getCart = () => {
  let cart = {};
  const cartJSON = localStorage.getItem("cart");
  if (cartJSON) {
    cart = JSON.parse(cartJSON);
  }
  return cart;
};

const addProductToCart = (product, quantity) => {
  const cart = getCart();
  if (cart[product]) {
    cart[product] = cart[product] + quantity;
  } else {
    cart[product] = quantity;
  }

  console.log("cart", cart);
  const cartJSON = JSON.stringify(cart);
  localStorage.setItem("cart", cartJSON);
};

const displayProduct = (product, quantity) => {
  const li = document.createElement("li");
  li.innerText = `${product}: ${quantity}`;

  const ul = document.getElementById("product-container");
  ul.append(li);
};

//display product from stored local storage

const displayStoredProducts = () => {
  const cart = getCart();
  for (const product in cart) {
    const quantity = cart[product];
    console.log(product, quantity);
    displayProduct(product, quantity);
  }
};
displayStoredProducts();
/**
 *   To save object in the local storage
 *  1. convert the object to JSON string by using JSON . stringify
 *  2. localstorage.setItem()
 ***/

/**
 *  to get object/array from the local storage
 * 1. get the item from the local storage and it will be in JSON string
 * 2. convert the JSON string to js object by using JSON. parse
 *
 *
 * */
