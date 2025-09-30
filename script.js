document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobileMenu');
    const mainNav = document.getElementById('mainNav');

    mobileMenu.addEventListener('click', () => {
        mainNav.classList.toggle('open');
    });

    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if(window.scrollY > 50){
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
});