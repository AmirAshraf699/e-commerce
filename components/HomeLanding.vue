<template>
  <div class="home-landing" id="home-landing">
    <v-container>
      <div class="landing-content">
        <div class="landing-title">
          <p class="landing-organic">100% Organic Foods</p>
          <h1>Organic Veggies & Fruits Foods</h1>
          <form class="landing-form" @submit.prevent>
            <input type="search" name="search" placeholder="Search" />
            <button type="submit">Submit Now</button>
          </form>
        </div>
        <Swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="50"
          navigation
          :autoplay="{ delay: 3000 }"
        >
          <SwiperSlide>
            <div class="slide-content">
              <img
                src="/images/fruits.webp"
                alt="Fresh organic fruits"
                loading="lazy"
              />
              <router-link to="/fruits">Fruits</router-link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="slide-content">
              <img
                src="/images/vegetables.webp"
                alt="Fresh organic vegetables"
                loading="lazy"
              />
              <router-link to="/vegetables">Vegetables</router-link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </v-container>
  </div>
</template>

<script>
import { Navigation, Autoplay ,A11y } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Autoplay, A11y],
    };
  },
};
</script>
