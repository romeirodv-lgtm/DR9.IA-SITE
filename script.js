class Particles {
  constructor() {
    this.canvas = document.getElementById('particles');
    this.ctx = this.canvas.getContext('2d');
    this.particlesArray = [];
    this.mouse = { x: undefined, y: undefined, radius: 100 };
    
    this.init();
    this.animate();
    this.setupEventListeners();
  }

  init() {
    this.resizeCanvas();
    this.createParticles();
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createParticles() {
    this.particlesArray = [];
    const numberOfParticles = Math.min(150, (this.canvas.width * this.canvas.height) / 10000);
    
    for (let i = 0; i < numberOfParticles; i++) {
      this.particlesArray.push(new Particle(this.canvas));
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Update and draw particles
    for (let i = 0; i < this.particlesArray.length; i++) {
      this.particlesArray[i].update(this.mouse);
      this.particlesArray[i].draw(this.ctx);
    }
    
    // Draw connections
    this.drawConnections();
    
    requestAnimationFrame(() => this.animate());
  }

  drawConnections() {
    for (let a = 0; a < this.particlesArray.length; a++) {
      for (let b = a; b < this.particlesArray.length; b++) {
        const dx = this.particlesArray[a].x - this.particlesArray[b].x;
        const dy = this.particlesArray[a].y - this.particlesArray[b].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const opacity = 1 - (distance / 100);
          this.ctx.strokeStyle = `rgba(0, 195, 255, ${opacity * 0.3})`;
          this.ctx.lineWidth = 1;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particlesArray[a].x, this.particlesArray[a].y);
          this.ctx.lineTo(this.particlesArray[b].x, this.particlesArray[b].y);
          this.ctx.stroke();
        }
      }
    }
  }

  setupEventListeners() {
    window.addEventListener('resize', () => {
      this.resizeCanvas();
      this.createParticles();
    });

    window.addEventListener('mousemove', (event) => {
      this.mouse.x = event.x;
      this.mouse.y = event.y;
    });

    window.addEventListener('mouseout', () => {
      this.mouse.x = undefined;
      this.mouse.y = undefined;
    });
  }
}

class Particle {
  constructor(canvas) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.canvas = canvas;
  }

  update(mouse) {
    // Move particle
    this.x += this.speedX;
    this.y += this.speedY;
    
    // Mouse interaction
    if (mouse.x && mouse.y) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < mouse.radius) {
        const force = (mouse.radius - distance) / mouse.radius;
        this.x -= dx * force * 0.05;
        this.y -= dy * force * 0.05;
      }
    }
    
    // Boundary check with smooth bounce
    if (this.x <= 0 || this.x >= this.canvas.width) {
      this.speedX = -this.speedX * 0.9;
      this.x = this.x <= 0 ? 1 : this.canvas.width - 1;
    }
    
    if (this.y <= 0 || this.y >= this.canvas.height) {
      this.speedY = -this.speedY * 0.9;
      this.y = this.y <= 0 ? 1 : this.canvas.height - 1;
    }
    
    // Slow down over time
    this.speedX *= 0.999;
    this.speedY *= 0.999;
  }

  draw(ctx) {
    const gradient = ctx.createRadialGradient(
      this.x, this.y, 0,
      this.x, this.y, this.size
    );
    gradient.addColorStop(0, 'rgba(0, 195, 255, 1)');
    gradient.addColorStop(1, 'rgba(0, 195, 255, 0)');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Initialize particles when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new Particles();
});

// Add loading state
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
