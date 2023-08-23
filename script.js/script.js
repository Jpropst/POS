const menu = document.getElementById("menu");
const cart = document.getElementById("cart");
const checkoutButton = document.getElementById("checkoutButton");
const checkoutModal = document.getElementById("checkoutModal");
const closeCheckout = document.querySelector(".close");
const paymentMethodSelect = document.getElementById("paymentMethod");
const processPaymentButton = document.getElementById("processPayment");
const modalClose = document.getElementsByClassName("close")[0];

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

products.forEach((product) => {
  const item = document.createElement("div");
  item.className = "menu-item";
  item.textContent = `${product.name} - $${product.price.toFixed(2)}`;
  item.addEventListener("click", () => addToCart(product));
  menu.appendChild(item);
});

const cartItems = [];

function addToCart(product) {
  cartItems.push(product);
  updateCartDisplay();
}
function updateCartDisplay() {
  cart.innerHTML = "";
  cartItems.forEach((product) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.textContent = product.name;
    cart.appendChild(cartItem);
  });
}
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
