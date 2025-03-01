import SwiperClass, { Navigation, Pagination, Autoplay, Parallax, Scrollbar } from 'Swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

// import custom style
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import "swiper/css/parallax";

SwiperClass.use([Navigation, Pagination, Autoplay, Parallax, Scrollbar])
export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(VueAwesomeSwiper, SwiperClass, Swiper, SwiperSlide)
})