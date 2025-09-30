// ===== Menu de serviços automático para WhatsApp e Telegram =====
const greetingMessage = `
Olá! 👋 Bem-vindo à DR9.AI.
Aqui você pode escolher os serviços que deseja conhecer ou contratar:

1️⃣ Licenças Técnicas
2️⃣ Unclock Chimera
3️⃣ Licenças para Computador (Adobe, Office, etc.)
4️⃣ IMEI Unlock (somente privado)
5️⃣ Fluxo de Perguntas IA
6️⃣ Postagem Programada

Digite o número da opção desejada para continuar.
`;

const whatsappNumbers = ['5562991476973']; // Pode adicionar outros números
const telegramUsername = 'dr9iSuporte';

// Função abrir WhatsApp
function openWhatsApp(phone) {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(greetingMessage)}`;
    window.open(url, '_blank');
}

// Função abrir Telegram
function openTelegram(username) {
    const url = `https://t.me/${username}?start=${encodeURIComponent('menu')}`;
    window.open(url, '_blank');
}

// Botões
document.querySelectorAll('#whatsappBtn, #whatsappBtnFooter').forEach(btn => {
    btn.addEventListener('click', () => openWhatsApp(whatsappNumbers[0]));
});

document.querySelectorAll('#telegramBtn, #telegramBtnFooter').forEach(btn => {
    btn.addEventListener('click', () => openTelegram(telegramUsername));
});