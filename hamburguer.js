const btnMobile = document.getElementById('btn-mobile');
const navLinks = document.querySelectorAll('#menu a');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.innerHTML = '<i class="fas fa-times"></i>';
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.innerHTML = '<i class="fas fa-bars"></i>';
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

function closeMenu() {
  const nav = document.getElementById('nav');
  nav.classList.remove('active');
  const btnMobile = document.getElementById('btn-mobile');
  btnMobile.setAttribute('aria-expanded', false);
  btnMobile.innerHTML = '<i class="fas fa-bars"></i>';
  btnMobile.setAttribute('aria-label', 'Abrir Menu');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

navLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});
