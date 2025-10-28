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
		])
	);

	function setActive() {
		let current = null,
			best = Infinity;
		for (const sec of sections) {
			const top = sec.getBoundingClientRect().top - headerH;
			// pega quem já passou do topo e está mais próximo dele
			if (top <= 0 && Math.abs(top) < best) {
				best = Math.abs(top);
				current = sec.id;
			}
		}
		// fallback: se nenhuma passou do topo, marca a primeira
		if (!current && sections[0]) current = sections[0].id;

		// aplica classe
		links.forEach((a) => a && a.classList.remove("is-active"));
		if (current && links.get(current))
			links.get(current).classList.add("is-active");
	}

	// chama nos eventos essenciais
	window.addEventListener("scroll", setActive, { passive: true });
	window.addEventListener("resize", setActive);
	document.addEventListener("DOMContentLoaded", setActive);
})();
