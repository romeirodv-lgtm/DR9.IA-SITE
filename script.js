// ABRIR MODAL
const modal = document.getElementById("serviceModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}

// FUNÇÃO DE WHATSAPP
function contactWhatsApp(service) {
    const number = "5562991476973";
    const text = encodeURIComponent(`Olá, quero mais informações sobre: ${service}`);
    window.open(`https://wa.me/${number}?text=${text}`, "_blank");
}