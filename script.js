// const menu = document.getElementById("menu");
// const cart = document.getElementById("cart");
// const checkoutButton = document.getElementById("checkoutButton");
// const checkoutModal = document.getElementById("checkoutModal");
// const closeCheckout = document.querySelector(".close");
// const paymentMethodSelect = document.getElementById("paymentMethod");
// const processPaymentButton = document.getElementById("processPayment");
// const modalClose = document.getElementsByClassName("close")[0];

// const menuItems = [
//   { name: "Candy Land", price: 12.99, quantity: 10 },
//   { name: "Scrabble", price: 19.95, quantity: 10 },
//   { name: "The Game of Life", price: 21.99, quantity: 10 },
//   { name: "Wingspan", price: 47.69, quantity: 10 },
//   { name: "Terraforming Mars", price: 70.52, quantity: 10 },
//   { name: "Pathfinders", price: 35.97, quantity: 10 },
//   { name: "Uno", price: 11.95, quantity: 10 },
//   { name: "Monopoly", price: 35.53, quantity: 10 },
//   { name: "Cards Against Humanity", price: 29.0, quantity: 10 },
//   { name: "Settlers of Catan", price: 41.99, quantity: 10 },
// ];

// menuItems.forEach((product) => {
//   const item = document.createElement("div");
//   item.className = "menu-item";
//   item.textContent = `${product.name} - $${product.price.toFixed(2)}`;
//   item.addEventListener("click", () => addToCart(product));
//   menu.appendChild(item);
// });

// const cartItems = [];

// const addToCart = (product) => {
//   cartItems.push(product);
//   updateCartDisplay();
// };
// const updateCartDisplay = () => {
//   cart.innerHTML = "";
//   cartItems.forEach((product) => {
//     const cartItem = document.createElement("div");
//     cartItem.className = "cart-item";
//     cartItem.textContent = product.name;
//     cart.appendChild(cartItem);
//   });
// };
// checkoutButton.addEventListener("click", () => {
//   updateCheckoutSummary();
//   checkoutModal.style.display = "block";
// });
// processPaymentButton.addEventListener("click", () => {
//   const paymentMethod = paymentMethodSelect.value;
//   processPayment(paymentMethod);
// });
// modalClose.addEventListener("click", () => {
//   checkoutModal.style.display = "none";
// });

// const updateCheckoutSummary = () => {
//   checkoutSummary.innerHTML = "";
//   let subtotal = 0;
//   cartItems.forEach((product) => {
//     const cartSummaryItem = document.createElement("div");
//     cartSummaryItem.textContent = `${product.name} - $${product.price.toFixed(
//       2
//     )}`;
//     checkoutSummary.appendChild(cartSummaryItem);
//     subtotal += product.price;
//   });
//   const salesTax = subtotal * 0.08;
//   const total = subtotal + salesTax;
//   const summaryTotal = document.createElement("div");
//   summaryTotal.textContent = `Subtotal: $${subtotal.toFixed(
//     2
//   )} | Sales Tax: $${salesTax.toFixed(2)} | Total: $${total.toFixed(2)}`;
//   checkoutSummary.appendChild(summaryTotal);
// };

// const processPayment = (paymentMethod) => {
//   let subtotal = 0;
//   let salesTax = 0;
//   let total = 0;
//   if (paymentMethod === "cash") {
//     const amountTendered = +prompt("Enter amount tendered:") * 100;
//     const subtotal = cartItems.reduce((sum, product) => sum + product.price, 0);
//     const salesTax = subtotal * 0.08;
//     const total = subtotal + salesTax;
//     if (amountTendered < total) {
//       alert("Amount tendered is not enough.");
//     } else {
//       const change = amountTendered - total;
//       showReceipt(subtotal, salesTax, total, "Cash", change);
//     }
//   } else if (paymentMethod === "card") {
//     const cardNumber = prompt("Enter card number:");
//     const expiration = prompt("Enter card expiration:");
//     const cvv = prompt("Enter CVV:");
//     showReceipt(subtotal, salesTax, total, "Card");
//   }
//   checkoutModal.style.display = "none";
//   cartItems.length = 0;
//   updateCartDisplay();
// };

const menu = document.getElementById("menu");
const cart = document.getElementById("cart");
const checkoutButton = document.getElementById("checkout-button");
const checkoutModal = document.getElementById("checkout-modal");
const closeCheckout = document.querySelector(".close");
const paymentMethodSelect = document.getElementById("payment-method");
const processPaymentButton = document.getElementById("process-payment");
const modalClose = document.getElementsByClassName("close")[0];
const checkoutSummary = document.getElementById("checkout-summary");

const menuItems = [
  { name: "Candy Land", price: 12.99, quantity: 10 },
  { name: "Scrabble", price: 19.95, quantity: 10 },
  { name: "The Game of Life", price: 21.99, quantity: 10 },
  { name: "Wingspan", price: 47.69, quantity: 10 },
  { name: "Terraforming Mars", price: 70.52, quantity: 10 },
  { name: "Pathfinders", price: 35.97, quantity: 10 },
  { name: "Uno", price: 11.95, quantity: 10 },
  { name: "Monopoly", price: 35.53, quantity: 10 },
  { name: "Cards Against Humanity", price: 29.0, quantity: 10 },
  { name: "Settlers of Catan", price: 41.99, quantity: 10 },
];

menuItems.forEach((product) => {
  const item = document.createElement("div");
  item.className = "menu-item";
  item.textContent = `${product.name} - $${product.price.toFixed(2)}`;
  item.addEventListener("click", () => addToCart(product));
  menu.appendChild(item);
});

const cartItems = [];

const addToCart = (product) => {
  cartItems.push(product);
  updateCartDisplay();
};

const updateCartDisplay = () => {
  cart.innerHTML = "";
  cartItems.forEach((product) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.textContent = product.name;
    cart.appendChild(cartItem);
  });
};

checkoutButton.addEventListener("click", () => {
  updateCheckoutSummary();
  checkoutModal.style.display = "block";
});

processPaymentButton.addEventListener("click", () => {
  const paymentMethod = paymentMethodSelect.value;
  processPayment(paymentMethod);
});

modalClose.addEventListener("click", () => {
  checkoutModal.style.display = "none";
});

const updateCheckoutSummary = () => {
  checkoutSummary.innerHTML = "";
  let subtotal = 0;
  cartItems.forEach((product) => {
    const cartSummaryItem = document.createElement("div");
    cartSummaryItem.textContent = `${product.name} - $${product.price.toFixed(
      2
    )}`;
    checkoutSummary.appendChild(cartSummaryItem);
    subtotal += product.price;
  });
  const salesTax = subtotal * 0.08;
  const total = subtotal + salesTax;
  const summaryTotal = document.createElement("div");
  summaryTotal.textContent = `Subtotal: $${subtotal.toFixed(
    2
  )} | Sales Tax: $${salesTax.toFixed(2)} | Total: $${total.toFixed(2)}`;
  checkoutSummary.appendChild(summaryTotal);
};

const processPayment = (paymentMethod) => {
  let subtotal = 0;
  let salesTax = 0;
  let total = 0;
  if (paymentMethod === "cash") {
    const amountTendered = +prompt("Enter amount tendered:") * 100;
    subtotal = cartItems.reduce((sum, product) => sum + product.price, 0);
    salesTax = subtotal * 0.08;
    total = subtotal + salesTax;
    if (amountTendered < total) {
      alert("Amount tendered is not enough.");
    } else {
      const change = amountTendered - total;
      showReceipt(subtotal, salesTax, total, "Cash", change);
    }
  } else if (paymentMethod === "card") {
    const cardNumber = prompt("Enter card number:");
    const expiration = prompt("Enter card expiration:");
    const cvv = prompt("Enter CVV:");
    showReceipt(subtotal, salesTax, total, "Card");
    if (!/^\d{16}$/.test(cardNumber)) {
      alert("Invalid card number please enter a 16-digit number");
    }
    if (!/^(0[1-9]|1[0-2])\/(\d{2}|\d{4})$/.test(expiration)) {
      alert("Invalid expiration date. Format should be MM/YY or MM/YYYY.");
      return;
    }
    if (!/^\d{3}$/.test(cvv)) {
      alert("Invalid CVV. It should be a 3-digit number.");
      return;
    }
  }
  // checkoutModal.style.display = "none";
  // cartItems.length = 0;
  // updateCartDisplay();
};

const showReceipt = (subtotal, salesTax, total, paymentMethod, change) => {};
