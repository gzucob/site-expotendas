document.addEventListener("DOMContentLoaded", function () {
    // Obtém todos os links do menu
    const menuLinks = document.querySelectorAll(".navbar-nav .nav-link");

    // Obtém o elemento do menu offcanvas
    const offcanvasMenu = document.getElementById("offcanvasNavbar");

    // Adiciona um evento de clique para cada link do menu
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            // Fecha o menu offcanvas
            offcanvasMenu.classList.remove("show"); // Remover a classe "show" para esconder o offcanvas
        });
    });
});
