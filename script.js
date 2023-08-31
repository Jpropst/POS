const menu = document.getElementById("menu");
const cart = document.getElementById("cart");
const checkoutButton = document.getElementById("checkout-button");
const checkoutModal = document.getElementById("checkout-modal");
const closeCheckout = document.querySelector(".close");
const paymentMethodSelect = document.getElementById("payment-method");
const processPaymentButton = document.getElementById("process-payment");
const modalClose = document.getElementsByClassName("close")[0];
const checkoutSummary = document.getElementById("checkout-summary");
const addToCartButton = document.getElementById("add-to-cart");

const menuItems = [
  {
    name: "Candy Land",
    price: 12.99,
    quantity: 10,
    description:
      "A simple race-to-the-finish board game for young children. Players move their piece by drawing cards and moving to the next space that matches the card's color or icon.",
    imgSrc: "imgs/cl.jpg",
  },
  {
    name: "Scrabble",
    price: 19.99,
    quantity: 10,
    description:
      "A word game in which two to four players score points by placing tiles bearing a single letter onto a board. The objective is to form valid words in a crossword-like fashion. The score of each word is determined by its length and the value of its letters.",
    imgSrc: "imgs/scrabble.jpg",
  },
  {
    name: "The Game of Life",
    price: 21.99,
    quantity: 10,
    description:
      "A classic family game where players navigate life events such as schooling, marriage, having children, and retirement. Players earn and spend money, and the player with the most money at the end of the game wins.",
    imgSrc: "imgs/gol.jpg",
  },
  {
    name: "Wingspan",
    price: 47.99,
    quantity: 10,
    description:
      "A strategy card-driven board game about birdwatching. Players attract birds to their wildlife preserves, lay eggs, and use unique bird powers, all in an effort to achieve the most points by the end of four rounds.",
    imgSrc: "imgs/Wingspan.jpg",
  },
  {
    name: "Terraforming Mars",
    price: 70.99,
    quantity: 10,
    description:
      "A complex strategy game where players act as corporations working to develop Mars. Players spend resources to build projects, raise the temperature, create oceans, and cultivate green areas with flora. Points are earned for various achievements and the player with the most points at the end wins.",
    imgSrc: "imgs/tm.jpg",
  },
  {
    name: "Pathfinders",
    price: 35.99,
    quantity: 10,
    description:
      "A cooperative strategy game based on the Pathfinder Roleplaying Game. Players choose characters and work together to defeat challenges, acquire weapons, allies, and more.",
    imgSrc: "imgs/pf.jpg",
  },
  {
    name: "Uno",
    price: 11.99,
    quantity: 10,
    description:
      "A card game where players try to play all their cards by matching the top card of the discard pile either by number, color, or symbol. There are also special action cards to shake up the game. The first player to get rid of all their cards wins the round.",
    imgSrc: "imgs/uno.jpg",
  },
  {
    name: "Monopoly",
    price: 35.99,
    quantity: 10,
    description:
      "A real estate trading game where players buy, sell, and trade properties, develop them with houses and hotels, and collect rent from opponents with the goal of bankrupting them. The game is won by the last player remaining with assets.",
    imgSrc: "imgs/monopoly.jpg",
  },
  {
    name: "Cards Against Humanity",
    price: 28.99,
    quantity: 10,
    description:
      "A party game where players complete fill-in-the-blank statements using words or phrases, often risqué or politically incorrect, on cards. The game is known for its dark humor and is intended for mature audiences.",
    imgSrc: "imgs/cah.jpg",
  },
  {
    name: "Settlers of Catan",
    price: 41.99,
    quantity: 10,
    description:
      "A strategy board game where players collect and trade resources like wood, grain, brick, sheep, and ore to build roads, settlements, and cities to earn points. The first player to reach a predetermined number of points wins.",
    imgSrc: "imgs/catan.jpg",
  },
];

// this now generates the HTML elements and makes it easier to use and display
menuItems.forEach((product) => {
  // creates the list
  const listItem = document.createElement("li");
  listItem.className = "products";
  listItem.id = product.name.replace(/\s+/g, "-").toLowerCase();
  // creates the images
  const img = document.createElement("img");
  img.src = product.imgSrc;
  img.alt = product.name;
  img.setAttribute("data-name", product.name);
  listItem.appendChild(img);
  // creates the menu items
  const menuItem = document.createElement("div");
  menuItem.className = "menu-item";
  menuItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
  listItem.appendChild(menuItem);

  menu.appendChild(listItem);
  // added the click event to the menu item
  menuItem.addEventListener("click", () => addToCart(product));
  //
});

const cartItems = [];

document.addEventListener("DOMContentLoaded", function () {
  const productImages = document.querySelectorAll(".products img");
  productImages.forEach((img) => {
    img.addEventListener("click", (e) => displayModal(e, img.dataset.name));
  });
});

function displayModal(event, name) {
  const productName = event.target.getAttribute("data-name");
  const product = menuItems.find((item) => item.name === productName);

  if (!product) return;

  const modal = document.getElementById("productmodal");
  const modalImg = document.getElementById("productmodal-img");
  const modalName = document.getElementById("productmodal-name");
  const modalPrice = document.getElementById("productmodal-price");
  const modalDescription = document.getElementById("productmodal-description");

  modalImg.src = event.target.src;
  modalName.textContent = product.name;
  modalPrice.textContent = `$${product.price.toFixed(2)}`;
  modalDescription.textContent = product.description;
  // seperated the add to cart from the display modal and added click event to menu item
  modal.style.display = "block";
  // addToCart(product);
}

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
  // added these two lines to clear cart after checking out
  updateCartDisplay();
  checkoutModal.style.display = "block";
});

processPaymentButton.addEventListener("click", () => {
  const paymentMethod = paymentMethodSelect.value;
  processPayment(paymentMethod);
});

modalClose.addEventListener("click", () => {
  // added these two lines to clear cart after pressing 'x'
  cartItems.length = 0;
  updateCartDisplay();
  // checkoutModal.style.display = "none";
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
  let subtotal = cartItems.reduce((sum, product) => sum + product.price, 0);
  let salesTax = subtotal * 0.08;
  let total = subtotal + salesTax;

  if (paymentMethod === "cash") {
    const amountTendered = +prompt("Enter amount tendered:");
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
  }
};

const showReceipt = (subtotal, salesTax, total, paymentMethod, change) => {
  cartItems.length = 0;
  // added these two lines to clear cart after checking out
  updateCartDisplay();
  checkoutModal.style.display = "block";
  document.getElementById(
    "receipt-subtotal"
  ).textContent = `Subtotal: $${subtotal.toFixed(2)}`;
  document.getElementById(
    "receipt-tax"
  ).textContent = `Sales Tax (8%): $${salesTax.toFixed(2)}`;
  document.getElementById(
    "receipt-total"
  ).textContent = `Total: $${total.toFixed(2)}`;
  document.getElementById(
    "receipt-payment-method"
  ).textContent = `Payment Method: ${paymentMethod}`;

  if (paymentMethod === "Cash") {
    document.getElementById(
      "receipt-tendered"
    ).textContent = `Amount Tendered: $${(change + total).toFixed(2)}`;
    document.getElementById(
      "receipt-change"
    ).textContent = `Change: $${change.toFixed(2)}`;
  } else {
    document.getElementById("receipt-tendered").style.display = "none";
    document.getElementById("receipt-change").style.display = "none";
  }

  document.getElementById("receipt-section").style.display = "block";
};
