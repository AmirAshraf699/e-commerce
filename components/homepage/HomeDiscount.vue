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

<style lang="scss">
.home-discount {
  padding: {
    top: 100px;
    bottom: 100px;
  }
  .discount-parent {
    position: relative;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    .image {
      height: 300px;
      width: 100%;
      img {
        height: inherit;
        width: inherit;
      }
    }
    .discount-child {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 230px;
      width: 250px;
      height: 130px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 10px;
      h3 {
        font-size: 20px;
        margin-bottom: 10px;
      }
      p {
        font-size: 28px;
        font-weight: 500;
        color: var(--bs-dark);
        margin-top: 0;
      }
    }
  }
}

$offers: (
  "orange" "--bs-secondary" "--bs-primary" "--bs-white",
  "grey" "--bs-dark" "--bs-white" "--bs-primary",
  "green" "--bs-primary" "--bs-secondary" "--bs-white"
);

@each $parent, $parentColor, $childColor, $titleColor in $offers {
  .home-discount {
    .discount-parent.#{$parent} {
      border: 2px solid var(#{$parentColor});
      .discount-empty {
        height: 150px;
        background-color: var(#{$parentColor});
      }
      .discount-child {
        background-color: var(#{$childColor});
        h3 {
          color: var(#{$titleColor});
        }
      }
    }
  }
}
</style>
