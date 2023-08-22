const menu = document.getElementById("menu");
const cart = document.getElementById("cart");
const checkoutButton = document.getElementById("checkoutButton");
const checkoutModal = document.getElementById("checkoutModal");
const closeCheckout = document.querySelector(".close");
const processPaymentButton = document.getElementById("processPayment");

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

const cartItems = [];
