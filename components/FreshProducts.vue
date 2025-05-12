<template>
  <div class="fresh-products">
    <v-container>
      <h2>Fresh Products</h2>
      <Swiper
        :pagination="{ clickable: true }"
        :modules="modules"
        :slides-per-view="4"
        :space-between="30"
        navigation
        :autoplay="{ delay: 3000 }"
        :breakpoints="breakpoints"
      >
        <swiper-slide v-for="product in products" :key="product.id">
          <v-card elevation="0" :to="{ name: 'product-id', params: { id: product.id } }">
            <div class="related-card">
              <span class="related-logo">Fresh</span>
              <div class="related-image">
                <img :src="product.img" alt="" />
              </div>
              <div class="related-info">
                <h4>{{ product.title }}</h4>
                <p class="related-desc">{{ product.desc }}</p>
                <div class="related-buy">
                  <span class="related-price">{{ product.price }}</span>
                  <AddButton />
                </div>
              </div>
            </div>
          </v-card>
        </swiper-slide>
      </Swiper>
    </v-container>
  </div>
</template>

<script>
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { mapState } from "pinia";
import { useCounterStore } from "~/store/counter";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/autoplay";

export default {
  setup() {
    return {
      modules: [Navigation, Pagination, Autoplay, A11y],
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      }
    };
  },
  computed: {
    ...mapState(useCounterStore, ["products"]),
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>