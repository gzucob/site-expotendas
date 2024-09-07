// Config Navbar Hamburguer
document.addEventListener('DOMContentLoaded', function() {
    const navbarLinksSocial = document.getElementById('navbarLinksSocial');
    const navbarToggle = document.getElementById('navbarToggle');
    const overlay = document.getElementById('overlay');

    window.toggleMenu = function() {
        if (navbarLinksSocial.classList.contains('show')) {
            navbarLinksSocial.classList.remove('show');
            overlay.classList.remove('show');
            navbarToggle.innerHTML = '<i class="bi bi-list"></i>';
        } else {
            navbarLinksSocial.classList.add('show');
            overlay.classList.add('show');
            navbarToggle.innerHTML = '<i class="bi bi-x"></i>';
        }
    }

    window.closeMenu = function() {
        navbarLinksSocial.classList.remove('show');
        overlay.classList.remove('show');
        navbarToggle.innerHTML = '<i class="bi bi-list"></i>';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Array com os caminhos das imagens
    const logos = [
        "assets/logo-bento.svg",
        "assets/logo-caxias.svg",
        "assets/logo-fenamassa.svg",
        "assets/logo-festadauva.svg",
        "assets/logo-garibaldi.svg",
        "assets/logo-hyva.svg",
        "assets/logo-marcopolo.svg",
        "assets/logo-mercopar.svg",
        "assets/logo-weg.svg"
    ];

    // Função para criar as imagens para o layout mobile
    const mobilePortfolio = document.querySelector('.mobile-portfolio');
    logos.forEach(logo => {
        const img = document.createElement('img');
        img.src = logo;
        img.alt = "";
        img.classList.add('mobile-portfolio-img');
        mobilePortfolio.appendChild(img);
    });

    // Função para criar as imagens para o slider
    const slideTrack = document.querySelector('.slide-track');
    logos.concat(logos).forEach(logo => { // Duplica as imagens para o loop contínuo
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
    const slideWidth = 350; // Largura de cada slide
    const totalSlides = logos.length * 2; // Considerando o array duplicado

    // Função para animar o slider
    function animateSlider() {
        position -= 1; // Move 1px por ciclo de animação
        if (Math.abs(position) >= slideWidth * totalSlides / 2) {
            // Quando chegar ao final, reseta a posição
            position = 0;
        }
        slideTrack.style.transform = `translateX(${position}px)`;
    }

    // Iniciar a animação com intervalo
    setInterval(animateSlider, 10); // Velocidade controlada pela frequência do intervalo
});

// Config Galeria Imagens Desktop/Mobile
const images = document.querySelectorAll('.galeria-img');
let currentIndex = 0;

images.forEach((img, index) => {
	img.addEventListener('click', () => {
		openOverlayGaleria(index);
	});
});

function openOverlayGaleria(index) {
	currentIndex = index;
	const overlay = document.getElementById('overlay-galeria');
	const overlayImg = document.getElementById('overlay-galeria-img');
	overlayImg.src = images[index].src;
	overlay.classList.add('show');
	document.body.style.overflow = 'hidden'; // Bloqueia a rolagem da página
	addGestureControls();
}

function closeOverlayGaleria() {
	const overlay = document.getElementById('overlay-galeria');
	overlay.classList.remove('show');
	document.body.style.overflow = 'auto'; // Desbloqueia a rolagem da página
	removeGestureControls();
}

function showPrev() {
	currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
	const overlayImg = document.getElementById('overlay-galeria-img');
	overlayImg.src = images[currentIndex].src;
}

function showNext() {
	currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
	const overlayImg = document.getElementById('overlay-galeria-img');
	overlayImg.src = images[currentIndex].src;
}

function addGestureControls() {
	const overlay = document.getElementById('overlay-galeria');
	overlay.addEventListener('touchstart', handleTouchStart, false);
	overlay.addEventListener('touchmove', handleTouchMove, false);
}

function removeGestureControls() {
	const overlay = document.getElementById('overlay-galeria');
	overlay.removeEventListener('touchstart', handleTouchStart, false);
	overlay.removeEventListener('touchmove', handleTouchMove, false);
}

let xDown = null;
let yDown = null;

function getTouches(evt) {
	return evt.touches || evt.originalEvent.touches;
}

function handleTouchStart(evt) {
	const firstTouch = getTouches(evt)[0];
	xDown = firstTouch.clientX;
	yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
	if (!xDown || !yDown) {
		return;
	}

	let xUp = evt.touches[0].clientX;
	let yUp = evt.touches[0].clientY;

	let xDiff = xDown - xUp;
	let yDiff = yDown - yUp;

	if (Math.abs(xDiff) > Math.abs(yDiff)) {
		if (xDiff > 0) {
			showNext();
		} else {
			showPrev();
		}
	}

	xDown = null;
	yDown = null;
}

document.addEventListener('DOMContentLoaded', function() {
    var btnGaleria = document.getElementById('btnGaleria');
    var collapseElement = document.getElementById('collapseExample');

    collapseElement.addEventListener('show.bs.collapse', function() {
        btnGaleria.textContent = 'Fechar Galeria de Imagens';
    });

    collapseElement.addEventListener('hide.bs.collapse', function() {
        btnGaleria.textContent = 'Abrir Galeria de Imagens';
    });
});