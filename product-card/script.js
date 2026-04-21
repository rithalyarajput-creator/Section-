// Wishlist toggle
const wishlistBtn = document.getElementById('wishlistBtn');
wishlistBtn.addEventListener('click', () => {
  wishlistBtn.classList.toggle('active');
  wishlistBtn.classList.add('pop');
  wishlistBtn.addEventListener('animationend', () => {
    wishlistBtn.classList.remove('pop');
  }, { once: true });
});
