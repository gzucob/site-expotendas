// slider.js
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';

const logos = [
  '/assets/logos/logo-caxias.svg',
  '/assets/logos/logo-bento.svg',
  '/assets/logos/logo-fenamassa.svg',
  '/assets/logos/logo-festadauva.svg',
  '/assets/logos/logo-garibaldi.svg',
  '/assets/logos/logo-hyva.svg',
  '/assets/logos/logo-marcopolo.svg',
  '/assets/logos/logo-mercopar.svg',
  '/assets/logos/logo-weg.svg',
];

function initPortfolioSlider() {
  const wrapper = document.querySelector('.carousel-swiper .swiper-wrapper');
  if (!wrapper) return; // página sem o componente? segue a vida

  // Evita duplicar slides caso essa função rode mais de uma vez
  if (wrapper.children.length === 0) {
    const slides = [...logos, ...logos]; // duplica para efeito contínuo
    const frag = document.createDocumentFragment();

    for (const logo of slides) {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';

      const img = document.createElement('img');
      img.src = logo;
      img.alt = 'Portfolio de clientes Expotendas';
      img.className = 'portfolio-logo';
      img.decoding = 'async';

      slide.appendChild(img);
      frag.appendChild(slide);
    }

    wrapper.appendChild(frag);
  }

  // Evita criar 2x se alguém chamar de novo
  if (wrapper.__swiperInstance) return;

  const swiper = new Swiper('.carousel-swiper', {
    modules: [Autoplay],
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 40,
    centeredSlides: false,
    allowTouchMove: false,
    speed: 2500, // maior = movimento mais contínuo
    autoplay: { delay: 0, disableOnInteraction: false },
  });

  // Guarda referência para não reinicializar
  wrapper.__swiperInstance = swiper;
}
initPortfolioSlider();

