<template>
  <div class="testimonials">
    <v-container>
      <div class="title">
        <h2 class="head">Our Testimonial</h2>
        <p class="desc">Our Client Saying</p>
      </div>
      <Swiper
        :pagination="{ clickable: true }"
        :modules="modules"
        :slides-per-view="2"
        :space-between="30"
        navigation
        :autoplay="{ delay: 3000 }"
        :breakpoints="breakpoints"
      >
        <swiper-slide v-for="testi in testimonials" :key="testi.id">
          <p>{{ testi.desc }}</p>
          <div class="line"></div>
          <div class="content">
            <img :src="testi.img" alt="" />
            <div class="info">
              <h3>{{ testi.name }}</h3>
              <p>{{ testi.state }}</p>
              <v-rating
                :model-value="testi.rate"
                half-increments
                color="var(--bs-dark)"
                active-color="var(--bs-primary)"
                size="18"
                readonly
              ></v-rating>
            </div>
            <div class="comma">
              <v-icon>mdi-comma</v-icon>
              <v-icon>mdi-comma</v-icon>
            </div>
          </div>
        </swiper-slide>
      </Swiper>
    </v-container>
  </div>
</template>

<script>
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useCounterStore } from "~/store/counter";
import { mapState } from "pinia";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/autoplay";

export default {
  setup() {
    return {
      modules: [Navigation, Autoplay, Pagination, A11y],
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30
        },
      }
    };
  },
  computed: {
    ...mapState(useCounterStore, ["testimonials"]),
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
