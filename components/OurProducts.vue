<template>
  <div class="our-products">
    <v-container>
      <div class="products-top">
        <h2>Our Products</h2>
          <div class="buttons">
            <v-btn @click="showProducts = 'all'">All</v-btn>
            <v-btn @click="showProducts = 'fruit'">Fruit</v-btn>
            <v-btn @click="showProducts = 'vegetables'">Vegetables</v-btn>
            <v-btn @click="showProducts = 'herps'">Herps</v-btn>
          </div>
      </div>
      <div class="products-holder">
        <div class="product" v-if="(showProducts == 'fruit' || showProducts == 'all')">
          <v-card elevation="0">
            <div class="product-card">
              <span class="product-logo product-fruit-logo">Fruit</span>
              <div class="product-image">
                <img src="/images/apple.avif" alt="" />
              </div>
              <div class="product-info">
                <h4>Apple</h4>
                <p class="product-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                </p>
                <div class="product-buy">
                  <span class="product-price">$4.99 / kg</span>
                  <AddButton />
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="product" v-if="(showProducts == 'fruit' || showProducts == 'all')">
          <v-card elevation="0">
            <div class="product-card">
              <span class="product-logo product-fruit-logo">Fruit</span>
              <div class="product-image">
                <img src="/images/graps.jpeg" alt="" />
              </div>
              <div class="product-info">
                <h4>Graps</h4>
                <p class="product-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                </p>
                <div class="product-buy">
                  <span class="product-price">$4.55 / kg</span>
                  <AddButton />
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="product" v-if="(showProducts == 'fruit' || showProducts == 'all')">
          <v-card elevation="0">
            <div class="product-card">
              <span class="product-logo product-fruit-logo">Fruit</span>
              <div class="product-image">
                <img src="/images/strawbery.jpg" alt="" />
              </div>
              <div class="product-info">
                <h4>Strawbery</h4>
                <p class="product-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                </p>
                <div class="product-buy">
                  <span class="product-price">$3.99 / kg</span>
                  <AddButton />
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="product" v-if="(showProducts == 'fruit' || showProducts == 'all')">
          <v-card elevation="0">
            <div class="product-card">
              <span class="product-logo product-fruit-logo">Fruit</span>
              <div class="product-image">
                <img src="/images/apricot.jpg" alt="" />
              </div>
              <div class="product-info">
                <h4>Apricot</h4>
                <p class="product-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                </p>
                <div class="product-buy">
                  <span class="product-price">$3.89 / kg</span>
                  <AddButton />
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="product" v-if="(showProducts == 'fruit' || showProducts == 'all')">
          <v-card elevation="0">
            <div class="product-card">
              <span class="product-logo product-fruit-logo">Fruit</span>
              <div class="product-image">
                <img src="/images/Banana.jpg" alt="" />
              </div>
              <div class="product-info">
                <h4>Banana</h4>
                <p class="product-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                </p>
                <div class="product-buy">
                  <span class="product-price">$5.99 / kg</span>
                  <AddButton />
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="product" v-if="(showProducts == 'fruit' || showProducts == 'all')">
          <v-card elevation="0">
            <div class="product-card">
              <span class="product-logo product-fruit-logo">Fruit</span>
              <div class="product-image">
                <img src="/images/orange.jpg" alt="" />
              </div>
              <div class="product-info">
                <h4>orange</h4>
                <p class="product-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                </p>
                <div class="product-buy">
                  <span class="product-price">$5.50 / kg</span>
                  <AddButton />
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="product" v-if="(showProducts == 'fruit' || showProducts == 'all')">
          <v-card elevation="0">
            <div class="product-card">
              <span class="product-logo product-fruit-logo">Fruit</span>
              <div class="product-image">
                <img src="/images/berries.webp" alt="" />
              </div>
              <div class="product-info">
                <h4>Berries</h4>
                <p class="product-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                </p>
                <div class="product-buy">
                  <span class="product-price">$4.30 / kg</span>
                  <AddButton />
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="product" v-if="(showProducts == 'fruit' || showProducts == 'all')">
          <v-card elevation="0">
            <div class="product-card">
              <span class="product-logo product-fruit-logo">Fruit</span>
              <div class="product-image">
                <img src="/images/mango.webp" alt="" />
              </div>
              <div class="product-info">
                <h4>Apple</h4>
                <p class="product-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                </p>
                <div class="product-buy">
                  <span class="product-price">$6.99 / kg</span>
                  <AddButton />
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="product" v-if="(showProducts == 'fruit' || showProducts == 'all')">
          <v-card elevation="0">
            <div class="product-card">
              <span class="product-logo product-fruit-logo">Fruit</span>
              <div class="product-image">
                <img src="/images/blueberry.jfif" alt="" />
              </div>
              <div class="product-info">
                <h4>Blueberry</h4>
                <p class="product-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                </p>
                <div class="product-buy">
                  <span class="product-price">$4.99 / kg</span>
                  <AddButton />
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="product" v-if="(showProducts == 'vegetables' || showProducts == 'all')">
          <v-card elevation="0">
            <div class="product-card">
              <span class="product-logo product-vegetables-logo">Vegetables</span>
              <div class="product-image">
                <img src="/images/cucumber.webp" alt="" />
              </div>
              <div class="product-info">
                <h4>Cucmber</h4>
                <p class="product-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                </p>
                <div class="product-buy">
                  <span class="product-price">$4.99 / kg</span>
                  <AddButton />
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="product" v-if="(showProducts == 'vegetables' || showProducts == 'all')">
          <v-card elevation="0">
            <div class="product-card">
              <span class="product-logo product-vegetables-logo">Vegetables</span>
              <div class="product-image">
                <img src="/images/broccoli.jpg" alt="" />
              </div>
              <div class="product-info">
                <h4>Broccoli</h4>
                <p class="product-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                </p>
                <div class="product-buy">
                  <span class="product-price">$4.55 / kg</span>
                  <AddButton />
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="product" v-if="(showProducts == 'vegetables' || showProducts == 'all')">
          <v-card elevation="0">
            <div class="product-card">
              <span class="product-logo product-vegetables-logo">Vegetables</span>
              <div class="product-image">
                <img src="/images/potatos.webp" alt="" />
              </div>
              <div class="product-info">
                <h4>Potatos</h4>
                <p class="product-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                </p>
                <div class="product-buy">
                  <span class="product-price">$3.99 / kg</span>
                  <AddButton />
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="product" v-if="(showProducts == 'vegetables' || showProducts == 'all')">
          <v-card elevation="0">
            <div class="product-card">
              <span class="product-logo product-vegetables-logo">Vegetables</span>
              <div class="product-image">
                <img src="/images/tomato.avif" alt="" />
              </div>
              <div class="product-info">
                <h4>Tomato</h4>
                <p class="product-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                </p>
                <div class="product-buy">
                  <span class="product-price">$5.50 / kg</span>
                  <AddButton />
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="product" v-if="(showProducts == 'vegetables' || showProducts == 'all')">
          <v-card elevation="0">
            <div class="product-card">
              <span class="product-logo product-vegetables-logo">Vegetables</span>
              <div class="product-image">
                <img src="/images/Onion.jpg" alt="" />
              </div>
              <div class="product-info">
                <h4>Onion</h4>
                <p class="product-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                </p>
                <div class="product-buy">
                  <span class="product-price">$4.30 / kg</span>
                  <AddButton />
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="product" v-if="(showProducts == 'vegetables' || showProducts == 'all')">
          <v-card elevation="0">
            <div class="product-card">
              <span class="product-logo product-vegetables-logo">Vegetables</span>
              <div class="product-image">
                <img src="/images/Carrot.webp" alt="" />
              </div>
              <div class="product-info">
                <h4>Carrot</h4>
                <p class="product-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                </p>
                <div class="product-buy">
                  <span class="product-price">$6.99 / kg</span>
                  <AddButton />
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="product" v-if="(showProducts == 'herps' || showProducts == 'all')">
          <v-card elevation="0">
            <div class="product-card">
              <span class="product-logo product-herps-logo">Herps</span>
              <div class="product-image">
                <img src="/images/mint.jpg" alt="" />
              </div>
              <div class="product-info">
                <h4>Apple</h4>
                <p class="product-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                </p>
                <div class="product-buy">
                  <span class="product-price">$3.89 / kg</span>
                  <AddButton />
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="product" v-if="(showProducts == 'herps' || showProducts == 'all')">
          <v-card elevation="0">
            <div class="product-card">
              <span class="product-logo product-herps-logo">Herps</span>
              <div class="product-image">
                <img src="/images/thyme.webp" alt="" />
              </div>
              <div class="product-info">
                <h4>Thymp</h4>
                <p class="product-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                </p>
                <div class="product-buy">
                  <span class="product-price">$5.99 / kg</span>
                  <AddButton />
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="product" v-if="(showProducts == 'herps' || showProducts == 'all')">
          <v-card elevation="0">
            <div class="product-card">
              <span class="product-logo product-herps-logo">Herps</span>
              <div class="product-image">
                <img src="/images/Lettuce.jpg" alt="" />
              </div>
              <div class="product-info">
                <h4>Lettuce</h4>
                <p class="product-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                </p>
                <div class="product-buy">
                  <span class="product-price">$4.99 / kg</span>
                  <AddButton />
                </div>
              </div>
            </div>
          </v-card>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showProducts: "fruit",
    };
  },
};
</script>

<style lang="scss" scoped>
.our-products {
  .products-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    h2 {
    font-size: 60px;
    color: var(--bs-dark);
    font-weight: 700;
    }
    .buttons {
      margin: 20px 0; 
      display: flex;
      gap: 20px;
    }
  }
  .products-holder {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    .product {
      .v-card {
        overflow: hidden;
        position: relative;
        border-radius: 10px;
        transition: 0.3s;
        border: 1px solid var(--bs-primary);
        width: 100%;
        &:hover {
          box-shadow: 0 0 30px 3px rgba(0, 0, 0, 0.6) !important;
        }
        .product-card {
          position: relative;
          height: 100%;
          width: 100%;
          .product-logo {
            position: absolute;
            top: 15px;
            right: 15px;
            border-right-color: 15px;
            z-index: 3;
            font-size: 18px;
            padding: 3px 10px;
            border-radius: 8px;
            color: var(--bs-white);
            text-align: center;
            &.product-fruit-logo {
                background-color: var(--bs-secondary);
            }
            &.product-vegetables-logo {
                background-color: var(--bs-danger);
            }
            &.product-herps-logo {
                background-color: var(--bs-primary);
            }
          }
          .product-image {
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
          .product-info {
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
}

@media(max-width: 991px) {
  .our-products {
    .products-top {
      flex-direction: column;
      justify-content: center;
      gap: 20px;
      h2 {
      font-size: 60px;
      }
      .buttons {
        margin:0; 
      }
    }
  }
}

@media(max-width: 767px) {
  .our-products {
    .products-top {
      gap: 10px;
      h2 {
        font-size: 40px;
      }
    }
  }
}

@media (max-width: 600px) {
  .our-products {
    .products-top {
      gap: 10px;
      h2 {
        font-size: 30px;
      }
    }
  }
}
</style>
