/* Fundo geral */
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  overflow: hidden;
  font-family: 'Arial', sans-serif;
  color: white;
  text-align: center;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

/* Container central */
.container {
  z-index: 1;
  max-width: 600px;
  padding: 20px;
}

/* Logo */
.logo {
  width: 120px;
  margin-bottom: 20px;
}

/* Título em destaque */
.highlight {
  font-size: 3rem;
  font-weight: bold;
  color: #00FFB0;
  text-shadow: 0 0 15px #00FFB0, 0 0 30px #6A1B9A;
  margin-bottom: 10px;
}

/* Subtítulo */
h2 {
  font-size: 1.3rem;
  font-weight: 300;
  color: #ccc;
  margin-bottom: 20px;
}

/* Lista */
ul {
  list-style: none;
  padding: 0;
  margin: 20px 0;
  font-size: 1.1rem;
  line-height: 1.8;
}

/* Botões */
.btn {
  display: block;
  width: 100%;
  margin: 10px auto;
  padding: 15px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  color: white;
  transition: 0.3s;
  box-shadow: 0 4px 12px rgba(0,0,0,0.4);
}

.whatsapp {
  background: #00FFB0;
}

.whatsapp:hover {
  background: #00cc8a;
}

.telegram {
  background: #0D47A1;
}

.telegram:hover {
  background: #082d66;
}

/* QR Code */
.qrcode {
  margin-top: 25px;
}

.qrcode img {
  width: 180px;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0,255,176,0.7);
}

/* Rodapé */
footer {
  margin-top: 30px;
  font-size: 0.9rem;
  color: #aaa;
}

.highlight-footer {
  color: #00FFB0;
  font-weight: bold;
}
