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
