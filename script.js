// MENU MOBILE
const mobileMenu = document.getElementById('mobileMenu');
const mainNav = document.getElementById('mainNav');

mobileMenu.addEventListener('click', () => {
  mainNav.classList.toggle('active');
});
