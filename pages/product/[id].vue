<template>
  <div class="shop-details">
    <PagesHeading title="Shop Details" />
    <v-container>
      <div class="content">
        <div class="details">
          <div class="product-detail">
            <div class="image">
              <img :src="productDetail.img" alt="" />
            </div>
            <div class="info">
              <h3>{{ productDetail.title }}</h3>
              <p class="cate">Category: Fresh</p>
              <p class="price">{{ productDetail.price }}</p>
              <v-rating
                model-value="4"
                half-increments
                size="18"
                color="var(--bs-dark)"
                active-color="var(--bs-primary)"
              ></v-rating>
              <div class="desc">
                <p class="top">
                  The generated Lorem Ipsum is therefore always free from
                  repetition injected humour, or non-characteristic words etc
                </p>
                <p class="bottom">
                  Susp endisse ultricies nisi vel quam suscipit. Sabertooth
                  peacock flounder; chain pickerel hatchetfish, pencilfish
                  snailfish
                </p>
              </div>
              <div class="count-holder">
                <button class="minus" @click="decreaseCount">
                  <v-icon>mdi-minus</v-icon>
                </button>
                <span class="count">{{ count }}</span>
                <button class="plus" @click="increaseCount">
                  <v-icon>mdi-plus</v-icon>
                </button>
              </div>
              <AddButton />
            </div>
          </div>
          <div class="review-parent">
            <v-container fluid>
              <div class="buttons">
                <button class="desc" @click="show = 'description'">
                  Description
                </button>
                <button class="rev" @click="show = 'reviews'">Reviews</button>
              </div>
              <div class="review-content">
                <div class="description" v-if="show == 'description'">
                  <p class="one">
                    The generated Lorem Ipsum is therefore always free from
                    repetition injected humour, or non-characteristic words etc.
                    Susp endisse ultricies nisi vel quam suscipit
                  </p>
                  <p class="two">
                    Sabertooth peacock flounder; chain pickerel hatchetfish,
                    pencilfish snailfish filefish Antarctic icefish goldeye
                    aholehole trumpetfish pilot fish airbreathing catfish,
                    electric ray sweeper.
                  </p>
                  <table class="product-desc">
                    <tbody>
                      <tr class="light">
                        <td>Weight</td>
                        <td>1 kg</td>
                      </tr>
                      <tr>
                        <td>Country of Origin</td>
                        <td>Agro Farm</td>
                      </tr>
                      <tr class="light">
                        <td>Quality</td>
                        <td>Organic</td>
                      </tr>
                      <tr>
                        <td>Сheck</td>
                        <td>Healthy</td>
                      </tr>
                      <tr class="light">
                        <td>Min Weight</td>
                        <td>250 Kg</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="reviews" v-else-if="show == 'reviews'">
                  <div class="review" v-for="rev in reviews" :key="rev.id">
                    <img :src="rev.img" alt="" />
                    <div class="info">
                      <span class="date">{{ rev.date }}</span>
                      <div class="rate">
                        <h3 class="name">{{ rev.name }}</h3>
                        <v-rating
                          :model-value="rev.rate"
                          color="var(--bs-gray)"
                          active-color="var(--bs-secondary)"
                          size="20"
                          readonly
                        >
                        </v-rating>
                      </div>
                      <p class="comment">{{ rev.comment }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="replay">
                <h3>Leave a Replay</h3>
                <div class="form">
                  <form action="">
                    <div class="top">
                      <div class="name">
                        <input
                          type="text"
                          class="name"
                          name="name"
                          placeholder="Your Name"
                        />
                        <span class="outline"></span>
                      </div>
                      <div class="email">
                        <input
                          type="email"
                          class="email"
                          name="email"
                          placeholder="Your Email"
                        />
                        <span class="outline"></span>
                      </div>
                    </div>
                    <div class="textarea">
                      <textarea
                        name="review"
                        placeholder="your review"
                      ></textarea>
                      <span class="outline"></span>
                    </div>
                    <div class="post">
                      <div class="post-rate">
                        <span>Please rate :</span>
                        <div class="stars">
                          <v-icon>mdi-star</v-icon>
                          <v-icon>mdi-star</v-icon>
                          <v-icon>mdi-star</v-icon>
                          <v-icon>mdi-star</v-icon>
                          <v-icon>mdi-star</v-icon>
                        </div>
                      </div>
                      <input
                        type="submit"
                        class="post-comment"
                        value="Post Comment"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </v-container>
          </div>
        </div>
        <ShopProducts />
      </div>
      <RelateProducts />
    </v-container>
  </div>
</template>

<script setup>
import { mapState } from 'pinia';
import { useCounterStore } from '~/store/counter';

const count = ref(0);
const show = ref("description");
const reviews = ref( [
        {
          id: 1,
          img: "/images/avater-1.jpg",
          date: "April 12, 2024",
          name: "Jason Smith",
          comment:
            "The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit",
          rate: 4,
        },
        {
          id: 2,
          img: "/images/avatar-2.png",
          date: "April 16, 2024",
          name: "Sam Peters",
          comment:
            "The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit",
          rate: 3,
        },
      ],)

const route = useRoute()
const productDetail = computed(() => useCounterStore().products[route.params.id]);

const increaseCount = () => {
  this.count++;
}

const decreaseCount = () => {
  this.count--;
  if (this.count < 0) {
        this.count = 0;
      }
}
</script>