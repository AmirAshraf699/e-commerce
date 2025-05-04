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

<style lang="scss">
.best-saller {
  padding: {
    top: 100px;
    bottom: 100px;
  }
  .best-title {
    margin-bottom: 40px;
    h2 {
      font-size: 60px;
      color: var(--bs-dark);
      font-weight: 700;
    }
    p {
      width: 700px;
      max-width: 100%;
      color: var(--bs-gray);
    }
  }
  .best-first {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 20px;
    margin-bottom: 20px;
    .best-first-products {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 50px;
      width: 100%;
      background-color: var(--bs-light);
      padding: 20px;
      border-radius: 10px;
      .best-image {
        img {
          width: 140px;
          height: 140px;
          border-radius: 50%;
        }
      }
      .best-info {
        h3 {
          color: var(--bs-dark);
          font-weight: 500;
          font-size: 20px;
          margin-bottom: 10px;
        }
        p {
          font-size: 18px;
          font-weight: bold;
          color: var(--bs-dark);
          margin-top: 10px;
          margin-bottom: 10px;
        }
      }
    }
  }
  .best-last {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    .best-second-products {
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 0 5px 1px var(--bs-primary);
      img {
        width: 100%;
        max-width: 100%;
        height: 200px;
        border-radius: 10px 10px 0 0;
      }
    }
    .best-info {
      padding: 20px;
      h3 {
        color: var(--bs-dark);
        font-weight: 500;
        font-size: 20px;
        margin-bottom: 10px;
      }
      p {
        font-size: 18px;
        font-weight: bold;
        color: var(--bs-dark);
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }
  }
}

@media (max-width: 991px) {
  .best-saller {
    .best-title {
      text-align: center;
      p {
        width: 100%;
      }
    }
  }
}

@media (max-width: 767px) {
  .best-saller {
    .best-title {
      h2 {
        font-size: 40px;
      }
    }
  }
}

@media (max-width: 600px) {
  .best-saller {
    .best-title {
      h2 {
        font-size: 30px;
        margin-bottom: 10px;
      }
    }
    .v-row.best-first {
      .best-first-products {
        width: 100%;
        .image {
          img {
            width: 120px;
            height: 120px;
          }
        }
      }
    }
    .v-row.best-last {
      .best-second-products {
        width: 100%;
        img {
          width: 100%;
          height: 300px;
        }
      }
    }
  }
}
</style>
