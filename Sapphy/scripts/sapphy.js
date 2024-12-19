// Initialize an empty cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update the cart in localStorage
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Add to Cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const id = product.getAttribute('data-id');
        const name = product.getAttribute('data-name');
        const price = parseInt(product.getAttribute('data-price'));

        // Check if item is already in the cart
        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ id, name, price, quantity: 1 });
        }

        updateCart();
        alert(`${name} has been added to your cart!`);
    });
});

// Display Cart functionality
function displayCart() {
    const cartModal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    // Clear existing items
    cartItems.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ₦${item.price} x ${item.quantity}`;
        cartItems.appendChild(listItem);

        total += item.price * item.quantity;
    });

    cartTotal.textContent = total;
}

// Open Cart Modal
document.getElementById('viewCart').addEventListener('click', () => {
    document.getElementById('cartModal').style.display = 'flex';
    displayCart();
});

// Close Cart Modal
document.getElementById('closeCart').addEventListener('click', () => {
    document.getElementById('cartModal').style.display = 'none';
});

// Initial Display
updateCart();

// Shop
const productDetails = document.getElementById('productDetails');

// Fetch the JSON data
fetch('products.json')
  .then(response => response.json())
  .then(products => {
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'product-detail';

      productDiv.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
          <p><strong>SKU:</strong> ${product.sku}</p>
          <p><strong>Categories:</strong> ${product.category}</p>
          <p><strong>Price:</strong> ${product.price}</p>
        </div>
        <div class="product-options">
          <p><strong>Select your size:</strong></p>
          <select>
            ${product.size.map(size => `<option value="${size}">${size}</option>`).join('')}
          </select>
          <p><strong>Custom Measurements (optional):</strong></p>
          <textarea placeholder="You can add your custom measurements here"></textarea>
          <button>Add to Cart</button>
        </div>
        <div class="product-description">
          <h3>Description</h3>
          <p>${product.description}</p>
          <h4>Additional Information</h4>
          <p>${product.additional_info}</p>
        </div>
      `;

      productDetails.appendChild(productDiv);
    });
  })
  .catch(error => {
    console.error('Error loading products:', error);
  });


  // Modal
  let previewContainer = document.querySelector('.product-preview');
  let previewBox = previewContainer.querySelectorAll('.preview');

  document.querySelectorAll('.product-list .product').forEach(product =>{
    product.onclick = () =>{
      previewContainer.style.display = 'flex';
      let name = product.getAttribute('data-name');
      previewBox.forEach(preview =>{
        let target = preview.getAttribute('data-target');
        if(name == target){
          preview.classList.add('active');
        }
      })
    }
  })
  