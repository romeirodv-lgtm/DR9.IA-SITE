// Menu Mobile Toggle
const mobileMenu = document.getElementById('mobileMenu');
const mainNav = document.getElementById('mainNav');

mobileMenu.addEventListener('click', () => {
  mainNav.querySelector('ul').classList.toggle('show');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Botões WhatsApp e Telegram
document.getElementById('whatsappBtn').addEventListener('click', () => {
  window.open('https://wa.me/message/JLUZNOGJKK4UK1','_blank');
});
document.getElementById('telegramBtn').addEventListener('click', () => {
  window.open('https://t.me/dr9iSuporte','_blank');
});
document.getElementById('whatsappBtnFooter').addEventListener('click', () => {
  window.open('https://wa.me/message/JLUZNOGJKK4UK1','_blank');
});
document.getElementById('telegramBtnFooter').addEventListener('click', () => {
  window.open('https://t.me/dr9iSuporte','_blank');
});