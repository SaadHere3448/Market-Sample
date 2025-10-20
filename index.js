// =======================
// GROCERY STORE DATA
// =======================
const products = [
    { id: 1, name: "Rice (1kg)", price: 1.29, oldPrice: 1.59, img: "https://tse2.mm.bing.net/th/id/OIP.XFLvw67e2kLlSFEukk_EmQHaHa?pid=Api&P=0&h=220" },
    { id: 2, name: "Olpers Packet", price: 2.49, oldPrice: 2.99, img: "https://tse4.mm.bing.net/th/id/OIP.utFVVH86j7N9zPyVwmlpnAAAAA?pid=Api&P=0&h=220" },
    { id: 3, name: "Brown Bread", price: 2.99, oldPrice: 3.49, img: "https://tse2.mm.bing.net/th/id/OIP.4vVrr3ScuPURq_150LH4IwHaHa?pid=Api&P=0&h=220" },
    { id: 4, name: "Organic Eggs (12pcs)", price: 4.99, oldPrice: 5.49, img: "https://tse1.mm.bing.net/th/id/OIP.csCxWDZ4f-OB3XbZQKbLjAHaF7?pid=Api&P=0&h=220" },
    { id: 5, name: "Cheddar Cheese", price: 5.99, oldPrice: 6.99, img: "https://tse3.mm.bing.net/th/id/OIP.iolxfc6Iz3y2-QtlwxU74wHaHa?pid=Api&P=0&h=220" },
];

// Selectors
const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

// =======================
// RENDER PRODUCTS
// =======================
function renderProducts(items) {
    productGrid.innerHTML = '';

    if (items.length === 0) {
        productGrid.innerHTML = '<p style="text-align:center; grid-column: 1 / -1;">No products found.</p>';
        return;
    }

    items.forEach(p => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p class="price">$${p.price.toFixed(2)} <span>$${p.oldPrice.toFixed(2)}</span></p>
      <button class="add-cart">Add to Cart</button>
    `;
        productGrid.appendChild(card);
    });

    attachCartListeners();
}

// =======================
// FAKE CART INTERACTION
// =======================
function attachCartListeners() {
    document.querySelectorAll('.add-cart').forEach(btn => {
        btn.addEventListener('click', e => {
            const name = e.target.parentElement.querySelector('h3').innerText;
            alert(`${name} added to cart!`);
        });
    });
}

// =======================
// SEARCH FUNCTIONALITY
// =======================
function searchProducts() {
    const query = searchInput.value.toLowerCase().trim();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    renderProducts(filtered);
}

// =======================
// EVENT LISTENERS
// =======================
searchInput.addEventListener('input', searchProducts);
searchBtn.addEventListener('click', searchProducts);

// Initial render
renderProducts(products);
