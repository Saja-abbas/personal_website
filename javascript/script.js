// Theme toggle
const root = document.documentElement;
const themeBtn = document.querySelector('.theme-toggle');
const saved = localStorage.getItem('theme');
if (saved) root.setAttribute('data-theme', saved);
themeBtn?.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'light' ? '' : 'light';
  if (next) root.setAttribute('data-theme', next); else root.removeAttribute('data-theme');
  localStorage.setItem('theme', next);
});

// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-menu');
toggle?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();
 
// Active link highlight by pathname
(function(){
  const current = location.pathname.split('/').pop() || 'home.html';
  document.querySelectorAll('.nav-right a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    // treat contact.html primary separately, but still highlight when active
    if (href.endsWith(current)) a.classList.add('active');
  });
})();
// ++++++++++++++++++++++++++++++++++++

// Section reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
