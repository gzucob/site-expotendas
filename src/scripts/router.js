// Mapa de paths -> id da section
const routes = {
  '/': 'home',          
  '/home': 'home',      
  '/sobre-nos': 'sobre-nos',
  '/produtos': 'produtos',
  '/fale-conosco': 'fale-conosco',
};

const ERROR_PAGE = '/error404.html';

const sectionToPath = {
  home: '/home',              
  'sobre-nos': '/sobre-nos',
  produtos: '/produtos',
  'fale-conosco': '/fale-conosco',
};

function scrollToSection(sectionId, behavior = 'instant') {
  const el = document.getElementById(sectionId);
  if (!el) return;

  el.scrollIntoView({
    behavior: behavior === 'smooth' ? 'smooth' : 'auto',
    block: 'start',
  });
}

// Deixa o link ativo no menu conforme a rota
function updateActiveNav(path) {
  const links = document.querySelectorAll('a[data-route]');
  links.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === path) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('is-active');
      link.removeAttribute('aria-current');
    }
  });
}

function handleRoute(options = { behavior: 'instant' }) {
  let path = window.location.pathname || '/';
  if (path === '') path = '/';

  const sectionId = routes[path];

  // Rota desconhecida → manda pra página 404
  if (!sectionId) {
    window.location.href = ERROR_PAGE;
    return;
  }

  const canonicalPath = sectionToPath[sectionId] || path;
  updateActiveNav(canonicalPath);

  if (sectionId === 'home' && path === '/') {
    return;
  }

  scrollToSection(sectionId, options.behavior);
}

// Intercepta cliques em links com data-route
document.addEventListener('click', (event) => {
  const link = event.target.closest('a[data-route]');
  if (!link) return;

  const href = link.getAttribute('href');

  // Ignora links externos
  if (!href || href.startsWith('http')) return;

  event.preventDefault();

  // Atualiza a URL sem recarregar a página
  window.history.pushState({}, '', href);

  // Faz o scroll suave até a section
  handleRoute({ behavior: 'smooth' });
});

// Suporte aos botões voltar/avançar
window.addEventListener('popstate', () => {
  handleRoute({ behavior: 'instant' });
});

// ============================
// Scroll -> atualizar URL
// ============================

function initSectionObserver() {
  if (!('IntersectionObserver' in window)) {
    return; 
  }

  const sectionIds = ['home', 'sobre-nos', 'produtos', 'fale-conosco'];
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if (!sections.length) return;

  let currentSectionId = null;

  const observer = new IntersectionObserver(
    (entries) => {
      let bestEntry = null;

      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        if (
          !bestEntry ||
          entry.intersectionRatio > bestEntry.intersectionRatio
        ) {
          bestEntry = entry;
        }
      });

      if (!bestEntry) return;

      const sectionId = bestEntry.target.id;
      if (sectionId === currentSectionId) return;
      currentSectionId = sectionId;

      const newPath = sectionToPath[sectionId];
      if (!newPath) return;

      const currentPath = window.location.pathname;
      if (currentPath === newPath) return;

      // Atualiza a URL sem criar novo histórico
      window.history.replaceState({}, '', newPath);

      // Atualiza estado do menu
      updateActiveNav(newPath);
    },
    {
      threshold: 1 // % visível já conta como "ativa"
    }
  );

  sections.forEach((sec) => observer.observe(sec));
}

// Inicializa tudo
document.addEventListener('DOMContentLoaded', () => {
  handleRoute({ behavior: 'instant' });
  initSectionObserver();
});
