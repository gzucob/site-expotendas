//Sandwich Menu Funtion
document.addEventListener("DOMContentLoaded", function () {
	const navbarLinksSocial = document.getElementById("navbarLinksMobile");
	const navbarToggle = document.getElementById("navbarToggle");

	window.toggleMenu = function () {
		if (navbarLinksSocial.classList.contains("show")) {
			navbarLinksSocial.classList.remove("show");
			navbarToggle.innerHTML = '<i class="bi bi-list"></i>';
		} else {
			navbarLinksSocial.classList.add("show");
			navbarToggle.innerHTML = '<i class="bi bi-x"></i>';
		}
	};

	window.closeMenu = function () {
		navbarLinksSocial.classList.remove("show");
		navbarToggle.innerHTML = '<i class="bi bi-list"></i>';
	};

	window.addEventListener("scroll", () => {
		if (window.scrollY > 400) {
			navbarLinksSocial.classList.remove("show");
			navbarToggle.innerHTML = '<i class="bi bi-list"></i>';
		}
	});
});
