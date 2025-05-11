<template>
  <div class="best-saller">
    <v-container>
      <div class="best-title">
        <h2>Bestseller Products</h2>
        <p>
          Latin words, combined with a handful of model sentence structures, to
          generate Lorem Ipsum which looks reasonable.
        </p>
      </div>
      <div class="best-first">
        <div
          class="best-first-products"
          v-for="first in firstProducts"
          :key="first.id"
        >
          <div class="best-image">
            <img :src="first.img" alt="" />
          </div>
          <div class="best-info">
            <h3>{{ first.title }}</h3>
            <v-rating
              :model-value="first.value"
              half-increments
              color="var(--bs-primary)"
              active-color="var(--bs-primary)"
              density="compact"
              readonly
            >
            </v-rating>
            <p class="best-price">{{ first.price }}</p>
            <AddButton />
          </div>
        </div>
      </div>
      <div class="best-last">
        <div
          class="best-second-products"
          v-for="second in secondProducts"
          :key="second.id"
        >
          <img :src="second.img" alt="" />
          <div class="best-info">
            <h3>{{ second.title }}</h3>
            <v-rating
              :model-value="second.value"
              half-increments
              color="var(--bs-primary)"
              active-color="var(--bs-primary)"
              density="compact"
              readonly
            >
            </v-rating>
            <p>{{ second.price }}</p>
            <AddButton style="margin: 0 auto" />
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstProducts: [
        {
          id: 1,
          title: "Organic orange",
          value: "4.5",
          price: "3.12 $",
          img: "/images/orange.jpg",
        },
        {
          id: 2,
          title: "Organic berries",
          value: "4",
          price: "4.15 $",
          img: "/images/berries.webp",
        },
        {
          id: 3,
          title: "Organic banaba",
          value: "5",
          price: "2.19 $",
          img: "/images/Banana.jpg",
        },
        {
          id: 4,
          title: "Organic apricot",
          value: "3.5",
          price: "6.44 $",
          img: "/images/apricot.jpg",
        },
        {
          id: 5,
          title: "Organic grapes",
          value: "5",
          price: "2.99 $",
          img: "/images/graps.jpeg",
        },
        {
          id: 6,
          title: "Organic apple",
          value: "4.5",
          price: "3.45 $",
          img: "/images/apple.avif",
        },
      ],
      secondProducts: [
        {
          id: 1,
          title: "Organic orange",
          value: "4.5",
          price: "3.12 $",
          img: "/images/orange.jpg",
        },
        {
          id: 2,
          title: "Organic berries",
          value: "4",
          price: "4.15 $",
          img: "/images/berries.webp",
        },
        {
          id: 3,
          title: "Organic banaba",
          value: "5",
          price: "2.19 $",
          img: "/images/Banana.jpg",
        },
        {
          id: 4,
          title: "Organic apricot",
          value: "3.5",
          price: "6.44 $",
          img: "/images/apricot.jpg",
        },
      ],
    };
  },
};
</script>