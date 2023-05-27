/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

const products = [];

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

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

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

const addProductToCart = (productId) => {
  const product = products.find((product) => product.productId === productId);

  const cartProduct = cart.find((cartItem) => cartItem.productId === productId);

  if (product) {
    product.quantity += 1;

    if (!cartProduct) {
      cart.push(product);
    }

    console.log("Product added to cart");
  } else {
    console.log("Product not found");
  }
};

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

const increaseQuantity = (productId) => {
  const product = products.find((product) => product.productId === productId);

  if (product) {
    product.quantity += 1;
    console.log("Quantity increased for product:", product.name);
  } else {
    console.log("Product not found.");
  }
};

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

const decreaseQuantity = (productId) => {
  const product = products.find((product) => product.productId === productId);

  if (product) {
    if (product.quantity > 0) {
      product.quantity -= 1;
      console.log("Quantity decreased for product:", product.name);
      if (product.quantity === 0) {
        const index = cart.findIndex(
          (cartItem) => cartItem.productId === productId
        );
        if (index !== -1) {
          cart.splice(index, 1);
          console.log("Product removed from cart:", product.name);
        }
      }
    } else {
      console.log("Product quantity is already 0.");
    }
  } else {
    console.log("Product not found.");
  }
};

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

const removeProductFromCart = (productId) => {
  const product = products.find((product) => product.productId === productId);

  if (product) {
    product.quantity = 0;
    const index = cart.findIndex(
      (cartItem) => cartItem.productId === productId
    );
    if (index !== -1) {
      cart.splice(index, 1);
      console.log("Product removed from cart:", product.name);
    }
  } else {
    console.log("Product not found.");
  }
};

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
const cartTotal = () => {
  let total = 0;
  for (const product of cart) {
    total += product.price * product.quantity;
  }
  return total;
};

/* Create a function called emptyCart that empties the products from the cart */

const emptyCart = () => {
  cart.length = 0;
  console.log("Cart emptied successfully.");
};

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to the customer
*/

let totalPaid = 0; // Variable to keep track of the total amount paid

const pay = (amount) => {
  const cartTotal = calculateCartTotal();
  const balance = Number(amount) - cartTotal;

  if (balance < 0) {
    console.log("Remaining balance: $" + Math.abs(balance).toFixed(2));
    return balance;
  } else if (balance === 0) {
    console.log("Payment complete. No change.");
    return balance;
  } else {
    console.log(
      "Payment insufficient. You owe: $" + Math.abs(balance).toFixed(2)
    );
    return balance;
  }
};

const calculateCartTotal = () => {
  let total = 0;
  for (const product of cart) {
    total += product.price * product.quantity;
  }
  return total;
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
/* End all items from cart */

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
