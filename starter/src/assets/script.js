/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [];

/* Create 3 or more product objects using object literal notation */
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

// Adding product objects to the products array
products.push(cherry, orange, strawberry);

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];

const addProductToCart = (productId) => {
  const product = products.find((product) => product.productId === productId);
  const cartProduct = cart.find((cartItem) => cartItem.productId === productId);

  if (product) {
    product.quantity += 1;
    if (!cartProduct) {
      cart.push(product);
    }
  }
};

const increaseQuantity = (productId) => {
  const product = products.find((product) => product.productId === productId);
  if (product) {
    product.quantity += 1;
  }
};

const decreaseQuantity = (productId) => {
  const product = products.find((product) => product.productId === productId);
  if (product) {
    if (product.quantity > 0) {
      product.quantity -= 1;
      if (product.quantity === 0) {
        const index = cart.findIndex(
          (cartItem) => cartItem.productId === productId
        );
        if (index !== -1) {
          cart.splice(index, 1);
        }
      }
    }
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

const pay = (amount) => {
  totalPaid += amount;
  let totalCost = cartTotal();
  if (totalPaid < totalCost) {
    return totalCost - totalPaid;
  } else {
    return totalPaid - totalCost;
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

// function currencyBuilder() {
//   let currencyPicker = document.querySelector(".currency-selector");
//   let select = document.createElement("select");
//   select.classList.add("currency-select");
//   select.innerHTML = `<option value="USD">USD</option>
//                       <option value="
//                       "EUR">EUR</option>
//                       <option value="YEN">YEN</option>`;
//   currencyPicker.append(select);
// }
// currencyBuilder();


// document
//   .querySelector(".currency-select")
//   .addEventListener("change", function handleChange(event) {
//     let selectedCurrency = event.target.value;
//     switch (selectedCurrency) {
//       case "EUR":
//         currencySymbol = "€";
//         break;
//       case "YEN":
//         currencySymbol = "¥";
//         break;
//       default:
//         currencySymbol = "$";
//         selectedCurrency = "USD";
//         break;
//     }

//     for (let product of products) {
//       product.price = currency(product.price, selectedCurrency);
//     }

//     for (let cartItem of cart) {
//       cartItem.price = currency(cartItem.price, selectedCurrency);
//     }

//     drawProducts();
//     drawCart();
//     drawCheckout();
//   });

  
  function currency(value, currency) {
    return value * exchangeRates[currency];
  }
  

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
  currency,
};
