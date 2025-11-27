import Swiper from "swiper";
import { Navigation, Pagination, Keyboard, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom"

// Modal
const modal = document.getElementById("galeria-modal");
const openBtn = document.getElementById("open-gallery");
const closeBtn = document.getElementById("close-gallery");
const filterChips = Array.from(document.querySelectorAll(".chip-outline"));

function openModal() {
	modal.setAttribute("aria-hidden", "false");
	document.body.style.overflow = "hidden";
	// atualiza o swiper após abrir
	setTimeout(() => gallery.update(), 0);
}
function closeModal() {
	modal.setAttribute("aria-hidden", "true");
	document.body.style.overflow = "";
}

openBtn?.addEventListener("click", openModal);
closeBtn?.addEventListener("click", closeModal);
modal?.addEventListener("click", (e) => {
	if (e.target === modal) closeModal();
});
window.addEventListener("keydown", (e) => {
	if (e.key === "Escape") closeModal();
});

// Swiper
const gallery = new Swiper("#swiper-galeria", {
	modules: [Navigation, Pagination, Keyboard, Zoom],

	slidesPerView: 1,
	spaceBetween: 14,
	centeredSlides: true,
	loop: true,
	preloadImages: false,
	lazy: true,
	keyboard: { enabled: true },
	zoom: { maxRatio: 2, toggle: true },
	navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
	pagination: { el: ".swiper-pagination", clickable: true },
	breakpoints: {
		768: { slidesPerView: 1.25 },
		1024: { slidesPerView: 1.5 },
	},
});

// Filtro por categoria (tendas | tablados | montagem)
function applyFilter(cat) {
	const slides = document.querySelectorAll("#swiper-galeria .swiper-slide");
	slides.forEach((slide) => {
		const sCat = slide.getAttribute("data-cat");
		const show = cat === "all" || sCat === cat;
		slide.style.display = show ? "" : "none";
	});
	gallery.update();
}

filterChips.forEach((chip) => {
	chip.addEventListener("click", () => {
		filterChips.forEach((c) => c.setAttribute("aria-pressed", "false"));
		chip.setAttribute("aria-pressed", "true");
		applyFilter(chip.dataset.filter);
	});
});
