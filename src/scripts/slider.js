// slider.js
// Cria o slider de logos no home/quem-somos
document.addEventListener("DOMContentLoaded", function() {
    // Array com os caminhos das imagens
    const logos = [
        "/assets/logo-bento.svg",
        "/assets/logo-caxias.svg",
        "/assets/logo-fenamassa.svg",
        "/assets/logo-festadauva.svg",
        "/assets/logo-garibaldi.svg",
        "/assets/logo-hyva.svg",
        "/assets/logo-marcopolo.svg",
        "/assets/logo-mercopar.svg",
        "/assets/logo-weg.svg"
    ];

    // Cria imagens para layout mobile
    const mobilePortfolio = document.querySelector('.mobile-portfolio');
    logos.forEach(logo => {
        const img = document.createElement('img');
        img.src = logo;
        img.alt = "";
        img.classList.add('mobile-portfolio-img');
        mobilePortfolio.appendChild(img);
    });

    // Cria slides para o slider
    const slideTrack = document.querySelector('.slide-track');
    logos.concat(logos).forEach(logo => {
        const slideDiv = document.createElement('div');
        slideDiv.classList.add('slide-portfolio');
        const img = document.createElement('img');
        img.src = logo;
        img.height = 200;
        img.width = 350;
        img.alt = "";
        slideDiv.appendChild(img);
        slideTrack.appendChild(slideDiv);
    });

    // Variáveis de controle da animação
    let position = 0;
    const slideWidth = 350;
    const totalSlides = logos.length * 2;

    // Função que anima o slider
    function animateSlider() {
        position -= 1; // move 1px por ciclo
        if (Math.abs(position) >= slideWidth * totalSlides / 2) {
            position = 0; // reseta quando chega ao final
        }
        slideTrack.style.transform = `translateX(${position}px)`;
    }

    // Inicia a animação
    setInterval(animateSlider, 10);
});