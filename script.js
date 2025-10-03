
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const closeModal = document.getElementById('closeModal');
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        modalTitle.textContent = card.querySelector('h3').textContent;
        modalDesc.textContent = card.getAttribute('data-description');
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => { modal.style.display = 'none'; });
window.addEventListener('click', (e) => { if(e.target == modal) modal.style.display = 'none'; });
