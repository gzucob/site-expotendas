import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';

Swiper.use([Autoplay]);

document.addEventListener('DOMContentLoaded', function () {
  const logos = [
    '/assets/logo-bento.svg',
    '/assets/logo-caxias.svg',
    '/assets/logo-fenamassa.svg',
    '/assets/logo-festadauva.svg',
    '/assets/logo-garibaldi.svg',
    '/assets/logo-hyva.svg',
    '/assets/logo-marcopolo.svg',
    '/assets/logo-mercopar.svg',
    '/assets/logo-weg.svg',
  ];

  const wrapper = document.querySelector('.portfolio-swiper .swiper-wrapper');
  if (!wrapper) {
    console.error('Elemento .portfolio-swiper .swiper-wrapper não encontrado.');
    return;
  }

  // Duplica o array pra garantir loop contínuo visualmente perfeito
  const slides = logos.concat(logos);

  slides.forEach((logo) => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');

    const img = document.createElement('img');
    img.src = logo;
    img.alt = '';
    img.classList.add('portfolio-logo');

    slide.appendChild(img);
    wrapper.appendChild(slide);
  });

  const swiper = new Swiper('.portfolio-swiper', {
    loop: true,
    slidesPerView: 'auto',
    speed: 2500, // quanto maior, mais lento o movimento contínuo
    spaceBetween: 40,
    centeredSlides: false,
    allowTouchMove: false,
    autoplay: {
      delay: 0, // sem pausa
      disableOnInteraction: false,
    },
  });
});
