# Blog Card Section

A modern glass-style blog card with a soft image fade, neumorphic 3D buttons, date, and Read More + Watch Demo actions. Built with pure HTML and CSS — no JavaScript needed.

## Features

- Frosted white glass card (backdrop-filter blur)
- Landscape image with soft white shadow fade at bottom
- Large bold title + gray description with bold highlights
- Date with calendar icon
- Two neumorphic 3D buttons — Read More (dark) + Watch Demo (light)
- Smooth hover: card lifts, image zooms slightly
- Pastel gradient background to showcase glass effect
- Fully reusable — just change image, title, description, date in HTML

## How to Use in Any Project

1. Copy the `blog-card` folder into your project
2. Link in your HTML:

```html
<link rel="stylesheet" href="blog-card/style.css" />
```

3. Paste the card HTML where needed
4. Customize in `index.html`:

| Field | Where to change |
|---|---|
| Image | `<img src="YOUR_IMAGE_URL">` |
| Title | `<h2 class="blog-title">` |
| Description | `<p class="blog-desc">` |
| Date | `<span class="blog-date">` |
| Button labels | `.btn-dark` and `.btn-outline` text |

## File Structure

```
blog-card/
├── index.html   → Card markup
├── style.css    → Glass card, image fade, neumorphic buttons
└── README.md    → This file
```

## Tech Stack

- HTML5
- CSS3 (backdrop-filter, glassmorphism, neumorphism, gradients)
