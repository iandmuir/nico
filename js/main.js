// ---- Header scroll state ----
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ---- Scroll reveal ----
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(el => io.observe(el));
}

// ---- Project card staggered reveal ----
const cards = document.querySelectorAll('.pcard');
if (cards.length) {
  const cardIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const idx = parseInt(e.target.dataset.idx || 0);
        e.target.style.transitionDelay = `${idx * 0.06}s`;
        e.target.classList.add('visible');
        cardIO.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  cards.forEach((c, i) => {
    c.dataset.idx = i;
    c.style.opacity = '0';
    c.style.transform = 'translateY(28px)';
    c.style.transition = 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)';
    cardIO.observe(c);
  });
}

// Add visible class setter
document.addEventListener('DOMContentLoaded', () => {
  // Make cards visible when observed
  document.querySelectorAll('.pcard').forEach(c => {
    c.style.setProperty('--visible-opacity', '1');
  });
});

// Override for cards: add visible class properly
const styleSheet = document.createElement('style');
styleSheet.textContent = '.pcard.visible { opacity: 1 !important; transform: none !important; }';
document.head.appendChild(styleSheet);

// ---- Year ----
const yr = document.getElementById('yr');
if (yr) yr.textContent = new Date().getFullYear();
