/* editorial.js – Shared JS for all pages */

/* ── CUSTOM CURSOR ── */
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
let mx = 0, my = 0, fx = 0, fy = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

function animateFollower() {
  fx += (mx - fx) * 0.12;
  fy += (my - fy) * 0.12;
  follower.style.left = fx + 'px';
  follower.style.top  = fy + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

document.querySelectorAll('a, button, input, textarea, .contact-info-item, .fp-item, .pe-item').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '6px';
    cursor.style.height = '6px';
    follower.style.width = '60px';
    follower.style.height = '60px';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '12px';
    cursor.style.height = '12px';
    follower.style.width = '40px';
    follower.style.height = '40px';
  });
});

/* ── HERO ANIMATIONS on load ── */
window.addEventListener('load', () => {
  setTimeout(() => {
    const eyebrow = document.getElementById('eyebrow');
    const heroTitle = document.getElementById('heroTitle');
    if (eyebrow) eyebrow.classList.add('visible');
    if (heroTitle) heroTitle.classList.add('visible');
  }, 200);
  setTimeout(() => {
    const bgText = document.getElementById('bgText');
    if (bgText) bgText.classList.add('visible');
  }, 400);
});

/* ── SCROLL REVEAL ── */
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

/* ── PARALLAX bg text ── */
window.addEventListener('scroll', () => {
  const bgText = document.getElementById('bgText');
  if (bgText) bgText.style.transform = `translateY(${window.scrollY * 0.3}px)`;
});