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

<style lang="scss">
.fresh-products {
  .v-container {
    overflow: hidden;
    padding-bottom: 100px;
    h2 {
      font-size: 60px;
      color: var(--bs-dark);
      font-weight: 700;
    }
    .swiper {
      position: relative;
      overflow: visible;
      .swiper-wrapper {
        .swiper-slide {
          .v-card {
            overflow: hidden;
            position: relative;
            border-radius: 10px;
            transition: 0.3s;
            border: 1px solid var(--bs-primary);
            &:hover {
              box-shadow: 0 0 30px 3px rgba(0, 0, 0, 0.6) !important;
            }
            .related-card {
              position: relative;
              height: 100%;
              width: 100%;
              .related-logo {
                position: absolute;
                top: 15px;
                right: 15px;
                border-right-color: 15px;
                z-index: 3;
                font-size: 18px;
                padding: 3px 14px;
                border-radius: 8px;
                color: var(--bs-white);
                background-color: var(--bs-primary);
              }
              .related-image {
                width: 100%;
                height: 220px;
                overflow: hidden;
                img {
                  width: 100%;
                  height: 100%;
                  transition: 0.3s;
                  &:hover {
                    scale: 1.2;
                  }
                }
              }
              .related-info {
                padding: 30px 20px;
                h4 {
                  text-align: left;
                  font-size: 25px;
                  color: var(--bs-dark);
                  font-weight: normal;
                }
                .related-desc {
                  color: var(--bs-gray);
                  text-align: left;
                  margin-top: 15px;
                  margin-bottom: 20px;
                  font-size: 18px;
                  line-height: 1.5;
                  max-width: 100%;
                }
                .related-buy {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  .related-price {
                    color: var(--bs-dark);
                    font-size: 16px;
                    font-weight: bold;
                  }
                }
              }
            }
          }
        }
      }
      .swiper-button-next,
      .swiper-button-prev {
        position: absolute;
        width: 60px;
        height: 30px;
        border: 2px solid var(--bs-secondary);
        border-radius: 20px;
        top: -30px;
        z-index: 5;
        &::after {
          font-size: 16px;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--bs-primary);
        }
      }
      .swiper-button-next {
        right: 100px;
      }
      .swiper-button-prev {
        left: calc(100% - 90px);
      }
      .swiper-pagination {
        position: absolute;
        bottom: -60px;
      }
    }
  }
}

@media (max-width: 991px) {
  .fresh-products {
    h2 {
      text-align: center;
    }
    .v-container {
      .swiper {
        .swiper-button-next,
        .swiper-button-prev {
          display: none;
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .fresh-products {
    h2 {
      font-size: 40px;
    }
  }
}

@media (max-width: 600px) {
  .fresh-products {
    h2 {
      font-size: 30px;
    }
  }
}
</style>
