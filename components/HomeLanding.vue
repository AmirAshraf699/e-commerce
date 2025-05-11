<template>
  <div class="home-landing" id="home-landing">
    <v-container>
      <div class="landing-content">
        <div class="landing-title">
          <p class="landing-organic">100% Organic Foods</p>
          <h1>Organic Veggies & Fruits Foods</h1>
          <form class="landing-form" @submit.prevent="handleSearch">
            <input type="search" name="search" placeholder="Search" v-model="searchQuery" />
            <button type="submit">Submit Now</button>
          </form>
        </div>
        <Swiper
          :modules="modules"
          :slides-per-view="1"
          :navigation="{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev'
          }"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false
          }"
        >
          <SwiperSlide>
            <div class="slide-content">
              <img src="/images/fruits.webp" alt="Fresh organic fruits" loading="lazy" />
              <router-link to="/fruits">Fruits</router-link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="slide-content">
              <img src="/images/vegetables.webp" alt="Fresh organic vegetables" loading="lazy" />
              <router-link to="/vegetables">Vegetables</router-link>
            </div>
          </SwiperSlide>
          <div class="swiper-prev"><v-icon>mdi-chevron-left</v-icon></div>
          <div class="swiper-next"><v-icon>mdi-chevron-right</v-icon></div>
        </Swiper>
      </div>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

export default {
  data() {
    return {
      searchQuery: '',
      modules: [Autoplay, Navigation]
    }
  },
  methods: {
    handleSearch() {
      if (this.searchQuery.trim()) {
        console.log('Searching for:', this.searchQuery)
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>