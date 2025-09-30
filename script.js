document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navUl = document.querySelector('nav ul');

    mobileMenu.addEventListener('click', () => {
        navUl.classList.toggle('show');
        mobileMenu.innerHTML = navUl.classList.contains('show') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target){
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
            // Close menu on click
            if(navUl.classList.contains('show')) {
                navUl.classList.remove('show');
                mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });

    // Animate cards on scroll
    const cards = document.querySelectorAll('.feature-card, .checkbox-item');
    function animateOnScroll() {
        cards.forEach(card => {
            const top = card.getBoundingClientRect().top;
            if(top < window.innerHeight - 150){
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }
        });
    }
    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // Particles.js Background
    if(window.particlesJS){
        particlesJS("particles-js", {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 }},
                color: { value: "#ffbb33" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#ffbb33", opacity: 0.2, width: 1 },
                move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out", bounce: false }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true }
            },
            retina_detect: true
        });
    }

    // Pixel Tracking (placeholder IDs)
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Exemplo: Facebook Pixel
            if(typeof fbq === 'function') fbq('track', 'Lead', { content_name: btn.textContent });
            // Exemplo: Google Analytics
