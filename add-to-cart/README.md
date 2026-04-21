# Add to Cart — Product Card Section

A clean, realistic horizontal product card with live quantity controls and dynamic INR pricing. Built with pure HTML, CSS, and vanilla JavaScript — no libraries needed.

## Preview

![Add to Cart Card](https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80)

## Features

- Horizontal card layout (square image left, content right)
- Live quantity increase / decrease buttons (− / +)
- Price updates automatically based on quantity (Indian Rupee ₹)
- In Stock (green) and Low Stock (yellow) badge
- Add to Cart button — turns green with ✓ on click, resets after 1.8s
- Smooth hover effects (card lifts, image zooms)
- Ultra realistic shadow and clean white card design
- Fully reusable — just change product data in `script.js`

## How to Use in Any Project

1. Copy the `add-to-cart` folder into your project
2. Link files in your HTML:

```html
<link rel="stylesheet" href="add-to-cart/style.css" />
<script src="add-to-cart/script.js"></script>
```

3. Open `script.js` and edit the `products` array:

```js
const products = [
  {
    name: 'Your Product Name',
    desc: 'Short description here.',
    price: 499,        // price in INR (₹)
    stock: 40,         // stock <= 15 shows "Low Stock" badge
    img: 'YOUR_IMAGE_URL'
  }
];
```

4. To show more cards, just add more objects to the `products` array and change `slice(0, 1)` to `slice(0, N)` where N is how many you want.

## File Structure

```
add-to-cart/
├── index.html   → Card markup and layout
├── style.css    → All styles (card, badge, qty buttons, animations)
├── script.js    → Product data + quantity/price/cart logic
└── README.md    → This file
```

## Customization

| What to change | Where |
|---|---|
| Product name, desc, price, image | `products` array in `script.js` |
| Number of cards shown | `slice(0, N)` in `script.js` |
| Card width | `.page max-width` in `style.css` |
| Low stock threshold | `p.stock <= 15` in `script.js` |
| Currency symbol | Replace `₹` with any symbol in `script.js` |

## Tech Stack

- HTML5
- CSS3 (flexbox, transitions, keyframe animations)
- Vanilla JavaScript (DOM rendering, event listeners)
