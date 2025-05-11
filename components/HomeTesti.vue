<template>
  <div class="testimonials">
    <v-container>
      <div class="title">
        <h2 class="head">Our Testimonial</h2>
        <p class="desc">Our Client Saying</p>
      </div>
      <Swiper
        :pagination="{ el: '.swiper-pagination', clickable: true }"
        :modules="modules"
        :slides-per-view="2"
        :space-between="10"
        :navigation="{ prevIcon: '.swiper-prev', nextIcon: '.swiper-next' }"
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
        <div class="swiper-prev"></div>
        <div class="swiper-next"></div>
        <div class="swiper-pagination"></div>
      </Swiper>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Autoplay, Navigation, Pagination } from "swiper";
import { useCounterStore } from "~/store/counter";
import { mapState } from "pinia";
export default {
  setup() {
    return {
      modules: [Navigation, Autoplay, Pagination],
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
