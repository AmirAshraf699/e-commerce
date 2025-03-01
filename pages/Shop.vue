<template>
  <div class="shop-page">
    <PagesHeading title="Shop" />
    <v-container>
      <div class="title">
        <h2>Fresh fruits shop</h2>
        <div class="search">
          <input type="search" placeholder="Keywords" />
          <button><v-icon>mdi-magnify</v-icon></button>
        </div>
      </div>
      <div class="content">
        <ShopProducts />
        <div class="products">
          <div class="products-parent">
            <div class="products-containers" v-if="page == 1">
              <v-card elevation="0">
                <div class="product-card">
                  <span class="logo">Product</span>
                  <div class="image">
                    <img src="/images/apple.avif" alt="" />
                  </div>
                  <div class="info">
                    <h4>Apple</h4>
                    <p class="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                    </p>
                    <div class="add">
                      <span class="price">$4.99 / kg<</span>
                      <AddButton />
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
            <div class="products-containers" v-if="page == 1">
              <v-card elevation="0">
                <div class="product-card">
                  <span class="logo">Product</span>
                  <div class="image">
                    <img src="/images/graps.jpeg" alt="" />
                  </div>
                  <div class="info">
                    <h4>Graps</h4>
                    <p class="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                    </p>
                    <div class="add">
                      <span class="price">$4.55 / kg</span>
                      <AddButton />
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
            <div class="products-containers" v-if="page == 1">
              <v-card elevation="0">
                <div class="product-card">
                  <span class="logo">Product</span>
                  <div class="image">
                    <img src="/images/strawbery.jpg" alt="" />
                  </div>
                  <div class="info">
                    <h4>Strawbery</h4>
                    <p class="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                    </p>
                    <div class="add">
                      <span class="price">>$3.99 / kg</span>
                      <AddButton />
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
            <div class="products-containers" v-if="page == 1">
              <v-card elevation="0">
                <div class="product-card">
                  <span class="logo">Product</span>
                  <div class="image">
                    <img src="/images/apricot.jpg" alt="" />
                  </div>
                  <div class="info">
                    <h4>Apricot</h4>
                    <p class="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                    </p>
                    <div class="add">
                      <span class="price">$3.89 / kg</span>
                      <AddButton />
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
            <div class="products-containers" v-if="page == 1">
              <v-card elevation="0">
                <div class="product-card">
                  <span class="logo">Product</span>
                  <div class="image">
                    <img src="/images/Banana.jpg" alt="" />
                  </div>
                  <div class="info">
                    <h4>Banana</h4>
                    <p class="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                    </p>
                    <div class="add">
                      <span class="price">$5.99 / kg</span>
                      <AddButton />
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
            <div class="products-containers" v-if="page == 1">
              <v-card elevation="0">
                <div class="product-card">
                  <span class="logo">Product</span>
                  <div class="image">
                    <img src="/images/orange.jpg" alt="" />
                  </div>
                  <div class="info">
                    <h4>Orange</h4>
                    <p class="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                    </p>
                    <div class="add">
                      <span class="price">$5.50 / kg</span>
                      <AddButton />
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
            <div class="products-containers" v-if="page == 1">
              <v-card elevation="0">
                <div class="product-card">
                  <span class="logo">Product</span>
                  <div class="image">
                    <img src="/images/berries.webp" alt="" />
                  </div>
                  <div class="info">
                    <h4>Berries</h4>
                    <p class="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                    </p>
                    <div class="add">
                      <span class="price">$4.30 / kg</span>
                      <AddButton />
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
            <div class="products-containers" v-if="page == 1">
              <v-card elevation="0">
                <div class="product-card">
                  <span class="logo">Product</span>
                  <div class="image">
                    <img src="/images/mango.webp" alt="" />
                  </div>
                  <div class="info">
                    <h4>Mango</h4>
                    <p class="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                    </p>
                    <div class="add">
                      <span class="price">$6.99 / kg</span>
                      <AddButton />
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
            <div class="products-containers" v-if="page == 1">
              <v-card elevation="0">
                <div class="product-card">
                  <span class="logo">Product</span>
                  <div class="image">
                    <img src="/images/blueberry.jfif" alt="" />
                  </div>
                  <div class="info">
                    <h4>Blueberry</h4>
                    <p class="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                    </p>
                    <div class="add">
                      <span class="price">$4.99 / kg</span>
                      <AddButton />
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
            <div class="products-containers" v-if="page == 2">
              <v-card elevation="0">
                <div class="product-card">
                  <span class="logo">Product</span>
                  <div class="image">
                    <img src="/images/cucumber.webp" alt="" />
                  </div>
                  <div class="info">
                    <h4>Cucumber</h4>
                    <p class="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                    </p>
                    <div class="add">
                      <span class="price">$4.99 / kg<</span>
                      <AddButton />
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
            <div class="products-containers" v-if="page == 2">
              <v-card elevation="0">
                <div class="product-card">
                  <span class="logo">Product</span>
                  <div class="image">
                    <img src="/images/broccoli.jpg" alt="" />
                  </div>
                  <div class="info">
                    <h4>Broccoli</h4>
                    <p class="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                    </p>
                    <div class="add">
                      <span class="price">$4.55 / kg</span>
                      <AddButton />
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
            <div class="products-containers" v-if="page == 2">
              <v-card elevation="0">
                <div class="product-card">
                  <span class="logo">Product</span>
                  <div class="image">
                    <img src="/images/potatos.webp" alt="" />
                  </div>
                  <div class="info">
                    <h4>Potatos</h4>
                    <p class="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                    </p>
                    <div class="add">
                      <span class="price">$3.99 / kg</span>
                      <AddButton />
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
            <div class="products-containers" v-if="page == 2">
              <v-card elevation="0">
                <div class="product-card">
                  <span class="logo">Product</span>
                  <div class="image">
                    <img src="/images/tomato.avif" alt="" />
                  </div>
                  <div class="info">
                    <h4>Tomato</h4>
                    <p class="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                    </p>
                    <div class="add">
                      <span class="price">$5.50 / kg</span>
                      <AddButton />
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
            <div class="products-containers" v-if="page == 2">
              <v-card elevation="0">
                <div class="product-card">
                  <span class="logo">Products</span>
                  <div class="image">
                    <img src="/images/Onion.jpg" alt="" />
                  </div>
                  <div class="info">
                    <h4>Onion</h4>
                    <p class="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                    </p>
                    <div class="add">
                      <span class="price">$4.30 / kg</span>
                      <AddButton />
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
            <div class="products-containers" v-if="page == 2">
              <v-card elevation="0">
                <div class="product-card">
                  <span class="logo">Product</span>
                  <div class="image">
                    <img src="/images/Carrot.webp" alt="" />
                  </div>
                  <div class="info">
                    <h4>Carrot</h4>
                    <p class="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                    </p>
                    <div class="add">
                      <span class="price">$6.99 / kg</span>
                      <AddButton />
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
            <div class="products-containers" v-if="page == 2">
              <v-card elevation="0">
                <div class="product-card">
                  <span class="logo">vegetables</span>
                  <div class="image">
                    <img src="/images/mint.jpg" alt="" />
                  </div>
                  <div class="info">
                    <h4>Mint</h4>
                    <p class="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                    </p>
                    <div class="add">
                      <span class="price">$3.89 / kg</span>
                      <AddButton />
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
            <div class="products-containers" v-if="page == 2">
              <v-card elevation="0">
                <div class="product-card">
                  <span class="logo">Product</span>
                  <div class="image">
                    <img src="/images/thyme.webp" alt="" />
                  </div>
                  <div class="info">
                    <h4>Thyme</h4>
                    <p class="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                    </p>
                    <div class="add">
                      <span class="price">$5.99 / kg</span>
                      <AddButton />
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
            <div class="products-containers" v-if="page == 2">
              <v-card elevation="0">
                <div class="product-card">
                  <span class="logo">vegetables</span>
                  <div class="image">
                    <img src="/images/Lettuce.jpg" alt="" />
                  </div>
                  <div class="info">
                    <h4>Lettuce</h4>
                    <p class="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                    </p>
                    <div class="add">
                      <span class="price">$4.99 / kg</span>
                      <AddButton />
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
            <div class="products-containers" v-if="page == 3">
              <v-card elevation="0">
                <div class="product-card">
                  <span class="logo">Product</span>
                  <div class="image">
                    <img src="/images/cucumber.webp" alt="" />
                  </div>
                  <div class="info">
                    <h4>Cucumber</h4>
                    <p class="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                    </p>
                    <div class="add">
                      <span class="price">$4.99 / kg<</span>
                      <AddButton />
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
            <div class="products-containers" v-if="page == 3">
              <v-card elevation="0">
                <div class="product-card">
                  <span class="logo">Product</span>
                  <div class="image">
                    <img src="/images/broccoli.jpg" alt="" />
                  </div>
                  <div class="info">
                    <h4>Broccoli</h4>
                    <p class="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                    </p>
                    <div class="add">
                      <span class="price">$4.55 / kg</span>
                      <AddButton />
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
            <div class="products-containers" v-if="page == 3">
              <v-card elevation="0">
                <div class="product-card">
                  <span class="logo">Product</span>
                  <div class="image">
                    <img src="/images/orange.jpg" alt="" />
                  </div>
                  <div class="info">
                    <h4>Orange</h4>
                    <p class="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                    </p>
                    <div class="add">
                      <span class="price">$5.50 / kg</span>
                      <AddButton />
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
            <div class="products-containers" v-if="page == 3">
              <v-card elevation="0">
                <div class="product-card">
                  <span class="logo">vegetables</span>
                  <div class="image">
                    <img src="/images/mint.jpg" alt="" />
                  </div>
                  <div class="info">
                    <h4>Mint</h4>
                    <p class="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                    </p>
                    <div class="add">
                      <span class="price">$3.89 / kg</span>
                      <AddButton />
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
            <div class="products-containers" v-if="page == 3">
              <v-card elevation="0">
                <div class="product-card">
                  <span class="logo">Product</span>
                  <div class="image">
                    <img src="/images/thyme.webp" alt="" />
                  </div>
                  <div class="info">
                    <h4>Thyme</h4>
                    <p class="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                    </p>
                    <div class="add">
                      <span class="price">$5.99 / kg</span>
                      <AddButton />
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
            <div class="products-containers" v-if="page == 3">
              <v-card elevation="0">
                <div class="product-card">
                  <span class="logo">vegetables</span>
                  <div class="image">
                    <img src="/images/Lettuce.jpg" alt="" />
                  </div>
                  <div class="info">
                    <h4>Lettuce</h4>
                    <p class="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                    </p>
                    <div class="add">
                      <span class="price">$4.99 / kg</span>
                      <AddButton />
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
            <div class="products-containers" v-if="page == 3">
              <v-card elevation="0">
                <div class="product-card">
                  <span class="logo">Product</span>
                  <div class="image">
                    <img src="/images/apple.avif" alt="" />
                  </div>
                  <div class="info">
                    <h4>Apple</h4>
                    <p class="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                    </p>
                    <div class="add">
                      <span class="price">$4.99 / kg<</span>
                      <AddButton />
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
            <div class="products-containers" v-if="page == 3">
              <v-card elevation="0">
                <div class="product-card">
                  <span class="logo">Product</span>
                  <div class="image">
                    <img src="/images/graps.jpeg" alt="" />
                  </div>
                  <div class="info">
                    <h4>Graps</h4>
                    <p class="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                    </p>
                    <div class="add">
                      <span class="price">$4.55 / kg</span>
                      <AddButton />
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
            <div class="products-containers" v-if="page == 3">
              <v-card elevation="0">
                <div class="product-card">
                  <span class="logo">Product</span>
                  <div class="image">
                    <img src="/images/strawbery.jpg" alt="" />
                  </div>
                  <div class="info">
                    <h4>Strawbery</h4>
                    <p class="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam iure, itaque ipsa ullam laudantium blanditiis.
                    </p>
                    <div class="add">
                      <span class="price">>$3.99 / kg</span>
                      <AddButton />
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
          </div>
          <v-pagination
            v-model="page"
            length="3"
            color="var(--bs-dark)"
          ></v-pagination>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
.shop-page {
  .title {
    margin-top: 80px;
    margin-bottom: 30px;
    text-align: left;
    h2 {
      color: var(--bs-dark);
      font-size: 40px;
      font-weight: 500;
    }
    .search {
      position: relative;
      display: flex;
      align-items: center;
      width: 300px;
      input[type="search"] {
        flex: 1;
        height: 50px;
        padding-left: 15px;
        border: 1px solid var(--bs-gray);
        border-radius: 10px 0 0 10px;
      }
      button {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--bs-light);
        border: 1px solid;
        border-color: var(--bs-gray) var(--bs-gray) var(--bs-gray) transparent;
        border-radius: 0 10px 10px 0;
        .v-icon {
          color: var(--bs-gray);
        }
      }
    }
  }
  .content {
    display: flex;
    gap: 20px;
    .products {
      flex: 1;
      .products-parent {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        .products-containers {
          .v-card {
            overflow: hidden;
            position: relative;
            border-radius: 15px;
            transition: 0.3s;
            &:hover {
              box-shadow: 0 0 30px 3px rgba(0, 0, 0, 0.6) !important;
            }
            .product-card {
              position: relative;
              height: 100%;
              width: 100%;
              .logo {
                position: absolute;
                top: 15px;
                left: 15px;
                z-index: 3;
                font-size: 18px;
                padding: 3px 14px;
                border-radius: 8px;
                color: var(--bs-white);
                background-color: var(--bs-primary);
              }
              .image {
                width: 100%;
                height: 180px;
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
              .info {
                width: 100%;
                padding: 15px 20px;
                border: 1px solid var(--bs-secondary);
                border-radius: 0 0 14px 14px;
                h4 {
                  text-align: left;
                  font-size: 25px;
                  color: var(--bs-dark);
                  font-weight: normal;
                }
                .desc {
                  color: var(--bs-gray);
                  text-align: left;
                  margin-top: 10px;
                  margin-bottom: 10px;
                  font-size: 18px;
                  line-height: 1.5;
                }
                .add {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  a {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    width: fit-content;
                    color: var(--bs-primary);
                    cursor: pointer;
                    border: 2px solid var(--bs-secondary);
                    padding: 8px 15px;
                    border-radius: 30px;
                    transition: 0.3s;
                    &:hover {
                      background-color: var(--bs-secondary);
                      color: var(--bs-white);
                    }
                  }
                  .price {
                    color: var(--bs-dark);
                    font-size: 18px;
                    font-weight: bold;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 991px) {
  .shop-page {
    margin: {
      left: auto;
      right: auto;
    }
    .title {
      .search {
        width: 100%;
      }
    }
    .options {
      margin: 20px auto;
      width: 100%;
    }
    .content {
      flex-direction: column;
      justify-content: center;
    }
  }
}
@media (max-width: 767px) {
  .shop-page {
    width: 100%;
    margin: 0 auto;
    .content {
      .products {
        .products-parent {
          grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
          .products-containers {
            .v-card {
              .fruits-card {
                .image {
                  height: 400px;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .shop-page {
    width: 100%;
    .content {
      .products {
        .products-parent {
          .products-containers {
            .v-card {
              .fruits-card {
                .image {
                  height: 200px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
