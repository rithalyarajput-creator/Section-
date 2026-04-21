# Product Card Section

A clean, modern, reusable product card built with pure HTML, CSS, and vanilla JavaScript.

## Preview

![Product Card](https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80)

## Features

- Glassmorphism card with frosted transparent background
- Hover image swap (main image → second image, smooth fade)
- Best Seller badge (top left)
- Brand logo circle (top right)
- Clickable slider dots
- Price pill + Buy Now button with arrow animation
- Deep realistic shadow
- Fully static card (no tilt or movement)
- Responsive and lightweight — no libraries or frameworks

## How to Use in Any Project

1. Copy the `product-card` folder into your project
2. Link the files in your HTML:

```html
<link rel="stylesheet" href="product-card/style.css" />
<script src="product-card/script.js"></script>
```

3. Paste the card HTML where needed
4. Customize the following in `index.html`:

| Field | Where to change |
|---|---|
| Main image | `<img class="img-main" src="YOUR_IMAGE_URL">` |
| Hover image | `<img class="img-hover" src="YOUR_SECOND_IMAGE_URL">` |
| Product name | `<h2 class="product-name">` |
| Subtitle | `<p class="product-sub">` |
| Description | `<p class="product-desc">` |
| Price | `<div class="price-pill">` |

## File Structure

```
product-card/
├── index.html   → Card markup
├── style.css    → All styles (glass, shadow, animations)
├── script.js    → Dot click interaction
└── README.md    → This file
```

## Tech Stack

- HTML5
- CSS3 (backdrop-filter, transitions, flexbox)
- Vanilla JavaScript
