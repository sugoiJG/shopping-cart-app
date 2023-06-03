const products = [];

const cherry = {
  name: "Cherry",
  price: 2.99,
  quantity: 0,
  productId: 1,
  image: "/starter/src/images/cherry.jpg",
};

const orange = {
  name: "Orange",
  price: 1.49,
  quantity: 0,
  productId: 2,
  image: "/starter/src/images/orange.jpg",
};

const strawberry = {
  name: "Strawberry",
  price: 3.49,
  quantity: 0,
  productId: 3,
  image: "/starter/src/images/strawberry.jpg",
};

products.push(cherry, orange, strawberry);

const cart = [];

const addProductToCart = (productId) => {
  const product = products.find((product) => product.productId === productId);

  const cartProduct = cart.find((cartItem) => cartItem.productId === productId);

  if (product) {
    product.quantity += 1;

    if (!cartProduct) {
      cart.push(product);
    }
  } else {
    // Product not found
  }
};

const increaseQuantity = (productId) => {
  let product = products.find((product) => product.productId === productId);

  if (product) {
    product.quantity += 1;
  } else {
    // Product not found
  }
};

const decreaseQuantity = (productId) => {
  let product = products.find((product) => product.productId === productId);

  if (product) {
    product.quantity -= 1;
    if (product.quantity === 0) {
      cart.splice(cart.indexOf(product), 1);
    }
  } else {
    // Product not found
  }
};

const removeProductFromCart = (productId) => {
  const product = products.find((product) => product.productId === productId);

  if (product) {
    product.quantity = 0;
    const index = cart.findIndex(
      (cartItem) => cartItem.productId === productId
    );
    if (index !== -1) {
      cart.splice(index, 1);
    }
  } else {
    // Product not found
  }
};

const cartTotal = () => {
  let total = 0;
  for (const product of cart) {
    total += product.price * product.quantity;
  }
  return total;
};

const emptyCart = () => {
  cart.length = 0;
};

let totalPaid = 0;

const calculateCartTotal = () => {
  let total = 0;
  for (const product of cart) {
    total += product.price * product.quantity;
  }
  return total;
};

const pay = (amount) => {
  totalPaid += amount;
  const remainingBalance = (totalPaid - calculateCartTotal()).toFixed(2);

  if (remainingBalance > 0) {
    return Math.abs(remainingBalance);
  } else if (remainingBalance === "0.00") {
    return 0;
  } else {
    const cashReturned = (remainingBalance - 0).toFixed(2);
    return cashReturned;
  }
};

function dropCart() {
  let shoppingCart = document.querySelector(".empty-btn");
  let div = document.createElement("button");
  div.classList.add("empty");
  div.innerHTML = `Empty Cart`;
  shoppingCart.append(div);
}
dropCart();

document.querySelector(".empty-btn").addEventListener("click", (e) => {
  if (e.target.classList.contains("empty")) {
    emptyCart();
    drawCart();
    drawCheckout();
  }
});

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
};
