<template>
  <div class="products-details">
    <div class="categories">
      <h3>Categories</h3>
      <div
        class="caregorty"
        v-for="caregorty in categories"
        :key="caregorty.id"
      >
        <span class="fruits">{{ caregorty.fruitsName }}</span>
        <span class="sell-num">({{ caregorty.sellNum }})</span>
      </div>
    </div>
    <div class="price">
      <h3>Price</h3>
      <form action="">
        <input
          class="range"
          id="range"
          type="range"
          min="0"
          max="500"
          step="1"
          v-model="amount"
        />
        <p>{{ amount }}</p>
      </form>
    </div>
    <div class="addtion">
      <h3>Additional</h3>
      <form action="">
        <div>
          <input type="radio" id="organic" value="organic" name="addtion" />
          <label for="organic">Organic</label>
        </div>
        <div>
          <input type="radio" id="fresh" value="fresh" name="addtion" />
          <label for="fresh">Fresh</label>
        </div>
        <div>
          <input type="radio" id="sales" value="sales" name="addtion" />
          <label for="sales">Sales</label>
        </div>
        <div>
          <input type="radio" id="discont" value="discont" name="addtion" />
          <label for="discont">Discont</label>
        </div>
        <div>
          <input type="radio" id="expired" value="expired" name="addtion" />
          <label for="expired">Expired</label>
        </div>
      </form>
    </div>
    <div class="featured-products">
      <h3>Featured products</h3>
      <div class="feat" v-for="feat in featuredProducts" :key="feat.id">
        <div class="featured-image">
          <img :src="feat.img" alt="" />
        </div>
        <div class="featured-child">
          <h4>{{ feat.name }}</h4>
          <v-rating
            :model-value="feat.rate"
            half-increments
            color="var(--bs-primary)"
            active-color="var(--bs-primary)"
            size="18"
            readonly
          ></v-rating>
          <div class="price">
            <span class="after">{{ feat.price }}</span>
            <span class="before">{{ feat.discount }}</span>
          </div>
        </div>
      </div>
      <a href="#">View More</a>
    </div>
    <div class="image">
      <img src="/images/banner-fruits.jpg" alt="" />
      <p class="fresh">
        Fresh
        <br />
        Fruits
        <br />
        Banner
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: 0,
      categories: [
        {
          id: 1,
          fruitsName: "Apple",
          sellNum: 3,
        },
        {
          id: 2,
          fruitsName: "Orange",
          sellNum: 5,
        },
        {
          id: 3,
          fruitsName: "Strawbery",
          sellNum: 0,
        },
        {
          id: 4,
          fruitsName: "Banana",
          sellNum: 8,
        },
        {
          id: 5,
          fruitsName: "Pumpikn",
          sellNum: 5,
        },
      ],
      featuredProducts: [
        {
          id: 1,
          img: "/images/apple.avif",
          name: "Big Apple",
          rate: "4",
          price: "2.99$",
          discount: "4.11$",
        },
        {
          id: 2,
          img: "/images/strawbery.jpg",
          name: "Big Strawbery",
          rate: "4.5",
          price: "2.77$",
          discount: "4.5$",
        },
        {
          id: 3,
          img: "/images/broccoli.jpg",
          name: "Big Broccoli",
          rate: "5",
          price: "2.88$",
          discount: "4.13$",
        },
      ],
    };
  },
};
</script>
