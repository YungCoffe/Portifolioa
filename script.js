const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
const year = document.querySelector('#year');
const revealElements = document.querySelectorAll('.reveal');

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem('theme', theme);
  themeToggle.setAttribute('aria-pressed', String(theme === 'light'));
}

function getCurrentTheme() {
  return root.dataset.theme === 'light' ? 'light' : 'dark';
}

if (year) {
  year.textContent = new Date().getFullYear();
}

if (themeToggle) {
  themeToggle.setAttribute('aria-pressed', String(getCurrentTheme() === 'light'));
  themeToggle.addEventListener('click', () => {
    setTheme(getCurrentTheme() === 'light' ? 'dark' : 'light');
  });
}

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  nav.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      document.body.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Abrir menu');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.body.classList.contains('nav-open')) {
      document.body.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Abrir menu');
      navToggle.focus();
    }
  });
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}
