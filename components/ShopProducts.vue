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

<style lang="scss" scoped>
.products-details {
  width: 260px;
  text-align: left;
  h3 {
    font-size: 25px;
    color: var(--bs-dark);
    margin-bottom: 15px;
    font-weight: 600;
  }
  .categories {
    margin-bottom: 40px;
    width: 100%;
    .caregorty {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--bs-primary);
      font-size: 18px;
      &:not(:last-of-type) {
        margin-bottom: 15px;
      }
    }
  }
  > .price {
    margin-bottom: 40px;
    form {
      width: 100%;
      input[type="range"] {
        width: 100%;
      }
    }
  }
  .addtion {
    margin-bottom: 40px;
    h3 {
      margin-bottom: 0;
    }
    form {
      margin-top: 0;
      > div {
        display: flex;
        align-items: center;
        gap: 15px;
        font-size: 16px;
        color: var(--bs-gray);
        margin-top: 10px;
      }
    }
  }
  .featured-products {
    .feat {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 10px;
      .featured-image {
        img {
          width: 80px;
          height: 80px;
          border-radius: 10px;
        }
      }
      .featured-child {
        flex: 1;
        > .price {
          span {
            font-size: 18;
            margin: 5px;
          }
          .after {
            font-weight: 900;
            color: var(--bs-dark);
          }
          .before {
            font-weight: bold;
            color: red;
            text-decoration: line-through;
          }
        }
      }
    }
    a {
      display: block;
      text-align: center;
      width: 100%;
      color: var(--bs-primary);
      padding-top: 15px;
      padding-bottom: 15px;
      border-radius: 30px;
      margin-top: 40px;
      margin-bottom: 40px;
      border: 1px solid var(--bs-secondary);
      font-weight: bold;
      transition: 0.3s;
      &:hover {
        color: var(--bs-white);
        background-color: var(--bs-secondary);
      }
    }
  }
  .image {
    width: 100%;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      border-radius: 15px;
    }
    .fresh {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 10px;
      z-index: 2;
      color: var(--bs-secondary);
      font-size: 25px;
      font-weight: 900;
      line-height: 1.1;
    }
  }
}

@media (max-width: 991px) {
  .products-details {
    width: 100%;
  }
}
</style>
