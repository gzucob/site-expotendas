import Swiper from "swiper";
import { Autoplay } from "swiper/modules";

const logoSwiper = new Swiper(".carousel-swiper", {

  modules: [Autoplay],

	loop: true,
	slidesPerView: "auto",
	spaceBetween: 40,
	allowTouchMove: false,
	speed: 2500, // maior = movimento mais contínuo
	autoplay: { delay: 0, disableOnInteraction: false },
});
