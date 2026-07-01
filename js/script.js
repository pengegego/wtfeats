/* ═══════════════════════════════════════
   wtfeats — Dark Neon Night
   ═══════════════════════════════════════ */

// ── Scroll Animation (Intersection Observer) ──
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => {
    card.style.animationPlayState = 'paused';
    observer.observe(card);
  });

  // ── Typewriter subtitle ──
  const sub = document.querySelector('.hero-sub');
  if (sub) {
    const text = sub.innerText;
    sub.innerText = '';
    let i = 0;
    const type = () => {
      if (i < text.length) {
        sub.innerText += text[i];
        i++;
        setTimeout(type, 60);
      }
    };
    setTimeout(type, 800);
  }
});

// ── Console Easter egg ──
console.log('%c🥚 wtfeats', 'font-size:2rem;font-weight:bold');
console.log('%c暗黑料理界，欢迎你。', 'color:#00f0ff;font-size:1rem');
