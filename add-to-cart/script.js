const products = [
  {
    name: 'Whole Wheat Loaf',
    desc: 'Nutritious, fiber-rich, and wholesome loaves.',
    price: 374,
    stock: 40,
    img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80'
  },
  {
    name: 'Sweet Berry Muffin',
    desc: 'Soft muffin filled with fresh, juicy blueberries.',
    price: 540,
    stock: 40,
    img: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&q=80'
  },
  {
    name: 'Red Velvet Treat',
    desc: 'Rich, moist red velvet with creamy frosting.',
    price: 582,
    stock: 40,
    img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80'
  },
  {
    name: 'Frosted Bliss Donut',
    desc: 'Soft blue donut with vibrant pink sprinkles delight.',
    price: 415,
    stock: 10,
    img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=80'
  }
];

const list = document.getElementById('productList');

products.slice(0, 1).forEach((p, i) => {
  const isLow = p.stock <= 15;
  const badgeClass = isLow ? 'low-stock' : 'in-stock';
  const badgeLabel = isLow ? `Low Stock : ${p.stock}` : `In Stock : ${p.stock}`;

  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <div class="card-img">
      <img src="${p.img}" alt="${p.name}" loading="lazy"/>
    </div>
    <div class="card-content">
      <div class="card-top">
        <p class="product-name">${p.name}</p>
        <span class="badge ${badgeClass}">${badgeLabel}</span>
      </div>
      <p class="product-desc">${p.desc}</p>
      <div class="card-bottom">
        <div>
          <p class="product-price" id="price-${i}">₹${p.price.toLocaleString('en-IN')}</p>
          <div class="qty-row" style="margin-top:6px">
            <button class="qty-btn" id="dec-${i}">−</button>
            <span class="qty-value" id="qty-${i}">1</span>
            <button class="qty-btn" id="inc-${i}">+</button>
          </div>
        </div>
        <button class="cart-btn" id="cart-${i}" aria-label="Add to cart">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="18" height="18">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
        </button>
      </div>
    </div>
  `;

  list.appendChild(card);

  let qty = 1;
  const qtyEl   = document.getElementById(`qty-${i}`);
  const priceEl = document.getElementById(`price-${i}`);
  const incBtn  = document.getElementById(`inc-${i}`);
  const decBtn  = document.getElementById(`dec-${i}`);
  const cartBtn = document.getElementById(`cart-${i}`);

  function updateDisplay() {
    qtyEl.textContent = qty;
    const total = p.price * qty;
    priceEl.textContent = '₹' + total.toLocaleString('en-IN');
  }

  incBtn.addEventListener('click', () => {
    qty++;
    updateDisplay();
  });

  decBtn.addEventListener('click', () => {
    if (qty > 1) { qty--; updateDisplay(); }
  });

  cartBtn.addEventListener('click', () => {
    cartBtn.classList.add('pop', 'added');
    cartBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="18" height="18">
        <polyline points="20 6 9 17 4 12"/>
      </svg>`;
    cartBtn.addEventListener('animationend', () => cartBtn.classList.remove('pop'), { once: true });

    setTimeout(() => {
      cartBtn.classList.remove('added');
      cartBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="18" height="18">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 01-8 0"/>
        </svg>`;
    }, 1800);
  });
});
