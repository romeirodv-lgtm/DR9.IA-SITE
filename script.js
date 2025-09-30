// Seleciona os botões de contato
const whatsappBtn = document.querySelector('.btn-primary');
const telegramBtn = document.querySelector('.btn-outline');

// Mensagem de saudação
const greetingMessage = `
Olá! 👋 Bem-vindo à DR9.AI.
Aqui você pode escolher os serviços que deseja conhecer ou contratar.
Por favor, selecione uma opção do menu abaixo:
1️⃣ Licenças Técnicas
2️⃣ Unclock Chimera
3️⃣ Licenças para Computador (Adobe, Office, etc.)
4️⃣ IMEI Unlock (somente privado)
5️⃣ Fluxo de Perguntas IA
6️⃣ Postagem Programada
Digite o número da opção desejada para continuar.
`;

// Função para abrir WhatsApp com mensagem predefinida
whatsappBtn.addEventListener('click', () => {
    const phone = '5562991476973'; // Seu número
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(greetingMessage)}`;
    window.open(url, '_blank');
});

// Função para abrir Telegram com mensagem predefinida
telegramBtn.addEventListener('click', () => {
    const username = 'dr9iSuporte';
    const url = `https://t.me/${username}?start=${encodeURIComponent('menu')}`;
    window.open(url, '_blank');
});