import Swiper from "swiper";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";

const images = [
	"/assets/carousel/evento-noturno01.svg",
	"/assets/carousel/evento-noturno02.svg",
	"/assets/carousel/evento-noturno03.svg",
	"/assets/carousel/evento01.svg",
	"/assets/carousel/feira-livro-antonio-prado.svg",
	"/assets/carousel/feira-livro-cxs01.svg",
	"/assets/carousel/feira-livro-cxs02.svg",
	"/assets/carousel/fenamassa.svg",
	"/assets/carousel/festa-uva.svg",
	"/assets/carousel/interior01.svg",
	"/assets/carousel/interior02.svg",
	"/assets/carousel/interior03.svg",
	"/assets/carousel/maesa.svg",
	"/assets/carousel/parque-estacao-carlos-barbosa.svg",
	"/assets/carousel/tendas-size-cima.svg",
	"/assets/carousel/tendas-size-pov.svg",
];

// 1) Popular antes de inicializar
const wrapper = document.querySelector(".gallery-swiper .gallery-wrapper");
if (wrapper) {
	wrapper.innerHTML = images
		.map(
			(src, i) => `
    <div class="swiper-slide" aria-label="Slide ${i + 1}">
      <img src="${src}" alt="Imagem ${
				i + 1
			}: eventos realizados com os produtos da expotendas" decoding="async" />
    </div>
  `
		)
		.join("");
}

const swiper = new Swiper(".gallery-swiper", {

	modules: [Autoplay, EffectFade, Navigation, Pagination],
	
	effect: "fade",
	fadeEffect: { crossFade: true },
	speed: 700,
	slidesPerView: 1,
	loop: true,
	autoplay: { delay: 3000, disableOnInteraction: false },
	navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
	pagination: { clickable: true },
});
