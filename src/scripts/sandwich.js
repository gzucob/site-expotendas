//Sandwich Menu Funtion
const navbarLinksMobile = document.getElementById("navbarLinksMobile");
const navbarToggle = document.getElementById("navbarToggle");

const ICON_OPEN = '<i class="bi bi-list" aria-hidden="true"></i>';
const ICON_CLOSE = '<i class="bi bi-x" aria-hidden="true"></i>';

function openMenu() {
  navbarLinksMobile.classList.add("show");
  navbarToggle.innerHTML = ICON_CLOSE;
  navbarToggle.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  navbarLinksMobile.classList.remove("show");
  navbarToggle.innerHTML = ICON_OPEN;
  navbarToggle.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
  if (navbarLinksMobile.classList.contains("show")) {
    closeMenu();
  } else {
    openMenu();
  }
}

// Proteção básica caso o elemento não exista em alguma página
if (navbarToggle && navbarLinksMobile) {
  // Clique abre/fecha o menu
  navbarToggle.addEventListener("click", toggleMenu);

  // Se você ainda usa onclick="closeMenu()" nos links do menu:
  window.closeMenu = closeMenu;

  // Fecha menu ao rolar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      closeMenu();
    }
  });
}

// Sincroniza variáveis CSS com a altura do navbar
(function () {
	const root = document.documentElement;
	const nav = document.querySelector(".navbar");

	function syncNavVars() {
		if (!nav) return;
		root.style.setProperty("--nav-h", nav.offsetHeight + "px");
	}

	// inicializa e atualiza quando necessário
	window.addEventListener("load", syncNavVars);
	window.addEventListener("resize", syncNavVars);
	window.addEventListener("scroll", syncNavVars); // se o nav muda altura ao “scrolled”
})();
