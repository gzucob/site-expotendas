// //Ao clicar em uma ancora fecha o offcanvasMenu
// document.addEventListener("DOMContentLoaded", function () {
//   const menuLinks = document.querySelectorAll(".navbar-nav .nav-link");
//   const offcanvasMenu = document.getElementById("offcanvasNavbar")

//   menuLinks.forEach(link => {
//     link.addEventListener("click", () => {
//       offcanvasMenu.classList.remove("show");
//     })
//   })
// })


document.addEventListener("DOMContentLoaded", function () {
	const menuLinks = document.querySelectorAll(".navbar-nav .nav-link");
	const offcanvasMenu = document.getElementById("offcanvasNavbar");

	menuLinks.forEach(link => {
		link.addEventListener("click", () => {
			// Verificar se o menu offcanvas está aberto
			if (offcanvasMenu.classList.contains("show")) {
				// Fechar o menu offcanvas
				offcanvasMenu.classList.remove("show");

				// Adicionar um ouvinte de evento 'transitionend' ao menu offcanvas
				offcanvasMenu.addEventListener("transitionend", () => {
					// Habilitar o rolamento da tela após a transição do menu ser concluída
					document.body.style.overflow = "auto";
				}, { once: true }); // Remove o ouvinte após ser executado uma vez
			}
		});
	});
});
