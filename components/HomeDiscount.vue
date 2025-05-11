<template>
  <div class="home-discount">
    <v-container>
      <div class="discount">
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="4"
            xl="4"
            xxl="4"
            v-for="offer in offers"
            :key="offer.id"
          >
            <div :class="`discount-parent ${offer.parentClass}`">
              <div class="image">
                <img :src="offer.img" alt="" />
              </div>
              <div :class="`discount-child ${offer.childClass}`">
                <h3>{{ offer.title }}</h3>
                <p>{{ offer.offer }}</p>
              </div>
              <div class="discount-empty"></div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offers: [
        {
          id: 1,
          title: "Freash Apples",
          offer: "20% OFF",
          img: "/images/apple.avif",
          parentClass: "orange",
          childClass: "green",
          titleClass: "white",
        },
        {
          id: 2,
          title: "Tasty Fruits",
          offer: "Free Delivery",
          img: "/images/strawbery.jpg",
          parentClass: "grey",
          childClass: "white",
          titleClass: "green",
        },
        {
          id: 3,
          title: "Exotic Vegitable",
          offer: "Discount 30$",
          img: "/images/broccoli.jpg",
          parentClass: "green",
          childClass: "orange",
          titleClass: "white",
        },
      ],
    };
  },
};
</script>
