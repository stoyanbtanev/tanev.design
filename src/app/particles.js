// Particle Canvas Animation - Optimized for Performance
/* global requestAnimationFrame */

(function () {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d', { alpha: true });
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let w, h;
  let particles = [];
  let mouseX = -9999, mouseY = -9999;
  let mouseActive = false;

  /* ── Color palettes ── */
  const DARK_COLORS = [
    [0, 212, 255],   // cyan
    [0, 119, 255],   // blue
    [124, 58, 237],  // purple
    [0, 196, 140],   // teal
    [99, 179, 237],  // sky
    [167, 139, 250], // lavender
  ];

  const LIGHT_COLORS = [
    [0, 85, 204],    // blue
    [0, 119, 255],   // blue-bright
    [124, 58, 237],  // purple
    [5, 150, 105],   // emerald
    [139, 92, 246],  // violet
    [59, 130, 246],  // sky
  ];

  function getColors() {
    return document.documentElement.classList.contains('dark') ? DARK_COLORS : LIGHT_COLORS;
  }

  function randomColor() {
    const colors = getColors();
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.scale(dpr, dpr);
  }

  class Particle {
    constructor() {
      this.reset();
      this.y = Math.random() * h;
      this.opacity = Math.random() * 0.5 + 0.3;
    }

    reset() {
      this.x = Math.random() * w;
      this.y = -10;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = Math.random() * 0.3 + 0.2;
      this.size = Math.random() * 2.5 + 0.5;
      this.color = randomColor();
      this.opacity = Math.random() * 0.5 + 0.3;
      this.life = 1;
      this.decay = Math.random() * 0.003 + 0.001;
    }

    update() {
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (mouseActive && dist < 150) {
        const force = (150 - dist) / 150;
        this.vx -= (dx / dist) * force * 0.08;
        this.vy -= (dy / dist) * force * 0.08;
      }

      this.vx *= 0.98;
      this.vy *= 0.99;
      this.vy += 0.02;

      this.x += this.vx;
      this.y += this.vy;

      this.life -= this.decay;
      this.opacity = this.life * (Math.random() * 0.3 + 0.7);

      if (this.y > h + 10 || this.x < -10 || this.x > w + 10 || this.life <= 0) {
        this.reset();
      }
    }

    draw() {
      ctx.fillStyle = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function init() {
    resize();
    const count = Math.min(Math.floor((w * h) / 15000), 60);
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  canvas.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    mouseActive = true;
  });

  canvas.addEventListener('mouseleave', () => {
    mouseActive = false;
    mouseX = -9999;
    mouseY = -9999;
  });

  window.addEventListener('resize', resize, { passive: true });
  init();
  animate();
})();
