import Swiper from 'swiper';
import { Navigation, Pagination, FreeMode,} from 'swiper/modules';

import 'swiper/css/bundle';

const swiper = new Swiper(".cardsSwiper", {
  modules: [Navigation, Pagination, FreeMode,],
  loop: false,
  freeMode: false,
  direction: 'horizontal',
  pagination: {
    clickable: true,
  },

  breakpoints: {
    // 0px a 479px: Swiper ativado (1 card por vez)
    0: {
      enabled: true,
      slidesPerView: 3,
      direction: 'vertical',
    },
    // 480px a 767px: Swiper desativado (cards em linha)
    768: {
      enabled: false,
      slidesPerView: '3',
      direction: 'horizontal',
    },
    // 768px+: Swiper desativado (layout em grid)
    768: {
      enabled: false,
      slidesPerView: '3',
      direction: 'horizontal',
    }
  }
});

export default swiper;