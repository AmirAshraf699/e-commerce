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
                    <div class="open">
                      <span class="price">$4.99 / kg</span>
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
                    <div class="open">
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
                    <div class="open">
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
                    <div class="open">
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
                    <div class="open">
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
                    <div class="open">
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
                    <div class="open">
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
                    <div class="open">
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
                    <div class="open">
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
                    <div class="open">
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
                    <div class="open">
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
                    <div class="open">
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
                    <div class="open">
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
                    <div class="open">
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
                    <div class="open">
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
                    <div class="open">
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
                    <div class="open">
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
                    <div class="open">
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
                    <div class="open">
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
                    <div class="open">
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
                    <div class="open">
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
                    <div class="open">
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
                    <div class="open">
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
                    <div class="open">
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
                    <div class="open">
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
                    <div class="open">
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
                    <div class="open">
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

</style>
