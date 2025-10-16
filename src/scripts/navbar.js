// Configuração do menu hamburguer e overlay
document.addEventListener('DOMContentLoaded', () => {
  const navbarLinksSocial = document.getElementById('navbarLinksSocial');
  const navbarToggle = document.getElementById('navbarToggle');
  const overlay = document.getElementById('overlay');

  // Função para abrir/fechar menu
  window.toggleMenu = () => {
    const ativo = navbarLinksSocial.classList.contains('show');
    navbarLinksSocial.classList.toggle('show', !ativo);
    overlay.classList.toggle('show', !ativo);
    navbarToggle.innerHTML = ativo ? '<i class="bi bi-list"></i>' : '<i class="bi bi-x"></i>';
  };
  
  // Função para fechar menu ao clicar em link
  window.closeMenu = () => {
    navbarLinksSocial.classList.remove('show');
    overlay.classList.remove('show');
    navbarToggle.innerHTML = '<i class="bi bi-list"></i>';
  };
});