const nav = document.querySelector('.nav');
const toggle = document.querySelector('.menu-toggle');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.textContent = open ? 'Close' : 'Menu';
});
document.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('open')));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelectorAll('.project-link').forEach((card) => {
  const openProject = () => window.open(card.dataset.projectUrl, '_blank', 'noopener');
  card.addEventListener('click', (event) => { if (!event.target.closest('a')) openProject(); });
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openProject(); }
  });
});
