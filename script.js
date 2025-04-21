// // Cart array to hold selected products
// const cart = [];

// window.addEventListener("load", function () {
//     setTimeout(() => {
//       document.getElementById("popupModal").classList.remove("hidden");
//     }, 20000); // 20 seconds = 20000 milliseconds
//   });

//   // Function to close the popup
//   function closePopup() {
//     document.getElementById("popupModal").classList.add("hidden");
//   }

// // Function to add a product to the cart
// function addToCart(productName, productPrice) {
// cart.push({ name: productName, price: productPrice });
// updateCartSummary();
// }

// // Function to update the cart summary in the header
// function updateCartSummary() {
// const totalItems = cart.length;
// const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

// // Update cart count and total price
// document.getElementById('cart-count').textContent = totalItems;
// document.getElementById('cart-total-price').textContent = `Total: Rs. ${totalPrice}`;
// }

// // Function to view cart details
// function viewCart() {
// if (cart.length === 0) {
// alert('Your cart is empty!');
// return;
// }

// const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);
// if (confirm(`Proceed to checkout with total: Rs. ${totalAmount}?`)) {
// window.location.href = `buy.html?amount=${totalAmount}`;
// }
// }

// // Function to toggle dropdown menu
// function toggleDropdown() {
// document.getElementById("dropdown-menu").classList.toggle("hidden");
// }

// // Function to close dropdown menu
// function closeDropdown() {
// document.getElementById("dropdown-menu").classList.add("hidden");
// }

// // Function to close mobile menu
// function closeMobileMenu() {
// document.getElementById("mobile-menu").classList.add("hidden");
// }

// // Event listener for mobile menu toggle
// document.getElementById("menu-toggle").addEventListener("click", function () {
// document.getElementById("mobile-menu").classList.toggle("hidden");
// });

// // Smooth scrolling for anchor links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
// anchor.addEventListener('click', function (e) {
// e.preventDefault();
// document.querySelector(this.getAttribute('href')).scrollIntoView({
// behavior: 'smooth'
// });
// });
// });

// Load cart from localStorage or initialize it
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Show popup after 20 seconds
window.addEventListener("load", function () {
  setTimeout(() => {
    document.getElementById("popupModal").classList.remove("hidden");
  }, 20000);
});

function closePopup() {
  document.getElementById("popupModal").classList.add("hidden");
}

// Add product to cart
function addToCart(productName, productPrice) {
  const existingItem = cart.find(item => item.name === productName);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name: productName, price: productPrice, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartSummary();
}

// Update header cart summary
function updateCartSummary() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  document.getElementById('cart-count').textContent = totalItems;
  document.getElementById('cart-total-price').textContent = `Total: Rs. ${totalPrice}`;
}

// View cart and go to cart page
function viewCart() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  window.location.href = 'cart.html'; // This is the new cart page
}

// Mobile menu logic
function toggleDropdown() {
  document.getElementById("dropdown-menu").classList.toggle("hidden");
}
function closeDropdown() {
  document.getElementById("dropdown-menu").classList.add("hidden");
}
function closeMobileMenu() {
  document.getElementById("mobile-menu").classList.add("hidden");
}
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.toggle("hidden");
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Update cart count on load
updateCartSummary();
