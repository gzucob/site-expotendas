// Ao clicar no logo, rola suavemente para o topo da página
const logo = document.querySelector(".navbar-logo");
if (logo) {
	logo.addEventListener("click", () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	});
}

// Efeito de fundo ao rolar a página
const navbar = document.querySelector(".navbar");
const navbarLinks = document.querySelector(".navbar-links-mobile");
window.addEventListener("scroll", () => {
	if (window.scrollY > 50) {
		navbar.classList.add("scrolled");
		navbarLinks.classList.add("scrolled");
	} else {
		navbar.classList.remove("scrolled");
		navbarLinks.classList.remove("scrolled");
	}
});

// Destaca o link ativo com base na seção visível na tela
(function () {
  const header = document.querySelector(".navbar");
  const headerH = (header?.offsetHeight || 64) + 8; // respiro
  const sections = Array.from(document.querySelectorAll("section[id]"));
  const links = new Map(
    sections.map((s) => [
      s.id,
      document.querySelector(`.navbar a[href="#${s.id}"]`),
    ]),
  );

  function setActive() {
    let current = null,
      best = Infinity;

    // 1) lógica normal: quem já passou pelo topo do header e está mais próximo dele
    for (const sec of sections) {
      const top = sec.getBoundingClientRect().top - headerH;
      if (top <= 0 && Math.abs(top) < best) {
        best = Math.abs(top);
        current = sec.id;
      }
    }

    // 2) se o usuário chegou (quase) no fim da página,
    // força a ÚLTIMA section como ativa (geralmente o "Fale Conosco")
    const doc = document.documentElement;
    const scrollBottom = window.innerHeight + window.scrollY;
    const pageHeight = doc.scrollHeight;
    const nearBottom = pageHeight - scrollBottom < 10; // margem de 10px

    if (nearBottom && sections.length) {
      current = sections[sections.length - 1].id;
    }

    // 3) fallback: se nenhuma passou do topo e não está no fim, marca a primeira
    if (!current && sections[0]) current = sections[0].id;

    // 4) aplica classe
    links.forEach((a) => a && a.classList.remove("is-active"));
    if (current && links.get(current)) {
      links.get(current).classList.add("is-active");
    }
  }

  // eventos
  window.addEventListener("scroll", setActive, { passive: true });
  window.addEventListener("resize", setActive);
  document.addEventListener("DOMContentLoaded", setActive);
})();
