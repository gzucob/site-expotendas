// Gerencia overlay de imagens, navegação e gestos
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.galeria-img');
    let currentIndex = 0;

    images.forEach((img, index) => {
        img.addEventListener('click', () => openOverlayGaleria(index));
    });

    function openOverlayGaleria(index) {
        currentIndex = index;
        const overlay = document.getElementById('overlay-galeria');
        const overlayImg = document.getElementById('overlay-galeria-img');
        overlayImg.src = images[index].src;
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
        addGestureControls();
        addKeyboardControls();
    }

    function closeOverlayGaleria() {
        const overlay = document.getElementById('overlay-galeria');
        overlay.classList.remove('show');
        document.body.style.overflow = 'auto';
        removeGestureControls();
        removeKeyboardControls();
    }

    function showPrev() {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        document.getElementById('overlay-galeria-img').src = images[currentIndex].src;
    }

    function showNext() {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        document.getElementById('overlay-galeria-img').src = images[currentIndex].src;
    }

    // Controles de teclado
    function addKeyboardControls() {
        document.addEventListener('keydown', handleKeyDown);
    }
    function removeKeyboardControls() {
        document.removeEventListener('keydown', handleKeyDown);
    }
    function handleKeyDown(event) {
        if (event.key === 'ArrowLeft') showPrev();
        else if (event.key === 'ArrowRight') showNext();
        else if (event.key === 'Escape') closeOverlayGaleria();
    }

    // Controles por toque (gestos)
    let xDown = null, yDown = null;
    function getTouches(evt) { return evt.touches || evt.originalEvent.touches; }
    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX; yDown = firstTouch.clientY;
    }
    function handleTouchMove(evt) {
        if (!xDown || !yDown) return;
        const xUp = evt.touches[0].clientX;
        const yUp = evt.touches[0].clientY;
        const xDiff = xDown - xUp;
        const yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) showNext();
            else showPrev();
        }

        xDown = null; yDown = null;
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

    // Botões
    document.querySelector('.prev-btn').addEventListener('click', showPrev);
    document.querySelector('.next-btn').addEventListener('click', showNext);
    document.querySelector('.close-btn').addEventListener('click', closeOverlayGaleria);

    // Botão collapse da galeria
    const btnGaleria = document.getElementById('btnGaleria');
    const collapseElement = document.getElementById('collapseExample');
    collapseElement.addEventListener('show.bs.collapse', function() {
        btnGaleria.textContent = 'Fechar Galeria de Imagens';
    });
    collapseElement.addEventListener('hide.bs.collapse', function() {
        btnGaleria.textContent = 'Abrir Galeria de Imagens';
    });
});