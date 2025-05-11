<template>
  <div class="fresh-products">
    <v-container>
      <h2>Fresh Products</h2>
      <Swiper
        :pagination="{ el: '.swiper-pagination', clickable: true }"
        :modules="modules"
        :slides-per-view="4"
        :space-between="30"
        :navigation="{ prevIcon: '.swiper-prev', nextIcon: '.swiper-next' }"
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
import { mapState } from "pinia";
import { useCounterStore } from "~/store/counter";

export default {
  setup() {
    return {
      modules: [Navigation, Pagination, Autoplay],
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