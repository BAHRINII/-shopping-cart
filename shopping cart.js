// Get all the quantity input fields and price elements
const quantityInputs = document.querySelectorAll('.quantity');
const priceElements = document.querySelectorAll('.price');

// Add event listeners to increase buttons
const increaseButtons = document.querySelectorAll('.increase');
increaseButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    increaseQuantity(index);
    updateTotalPrice();
  });
});

// Add event listeners to decrease buttons
const decreaseButtons = document.querySelectorAll('.decrease');
decreaseButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    decreaseQuantity(index);
    updateTotalPrice();
  });
});

// Add event listeners to remove buttons
const removeButtons = document.querySelectorAll('.remove');
removeButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    removeItem(index);
    updateTotalPrice();
  });
});

// Add event listeners to like buttons
const likeButtons = document.querySelectorAll('.like');
likeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    toggleLike(button);
  });
});

// Add event listeners to add to cart buttons
const addToCartButtons = document.querySelectorAll('.addToCart');
addToCartButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    addToCart(index);
    updateTotalPrice();
  });
});

function increaseQuantity(index) {
  const input = quantityInputs[index];
  input.value = parseInt(input.value) + 1;
}

function decreaseQuantity(index) {
  const input = quantityInputs[index];
  if
// Add event listeners to increase buttons
const increaseButtons = document.querySelectorAll('.increase');
increaseButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    increaseQuantity(index);
    updateTotalPrice();
  });
});

// Add event listeners to decrease buttons
const decreaseButtons = document.querySelectorAll('.decrease');
decreaseButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    decreaseQuantity(index);
    updateTotalPrice();
  });
});

// Add event listeners to remove buttons
const removeButtons = document.querySelectorAll('.remove');
removeButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    removeItem(index);
    updateTotalPrice();
  });
});

// Add event listeners to like buttons
const likeButtons = document.querySelectorAll('.like');
likeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    toggleLike(button);
  });
});

// Add event listeners to add to cart buttons
const addToCartButtons = document.querySelectorAll('.addToCart');
addToCartButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    addToCart(index);
    updateTotalPrice();
  });
});

// Define the quantity and unit price of the items
var quantity = 10;
var unitPrice = $3500;

// Calculate the total price
var totalPrice = quantity * unitPrice;

// Display the total price
console.log("Total Price: $" + totalPrice.toFixed(2));





























