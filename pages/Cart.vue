<template>
  <div class="cart">
    <PagesHeading title="Cart" />
    <v-container>
      <div class="cart-content">
        <div class="table">
          <table class="cart-table">
            <thead>
              <tr>
                <th>Products</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cartItem in cartProducts" :key="cartItem.id">
                <td class="image">
                  <img :src="cartItem.img" alt="" width="100px" />
                </td>
                <td>{{ cartItem.name }}</td>
                <td>{{ cartItem.price }}</td>
                <td class="button">
                  <button
                    class="count"
                    @click="
                      cartItem.count > 0
                        ? cartItem.count--
                        : cartItem.count == 0
                    "
                  >
                    <v-icon>mdi-minus</v-icon>
                  </button>
                  <span>{{ cartItem.count }}</span>
                  <button class="count" @click="cartItem.count++">
                    <v-icon>mdi-plus</v-icon>
                  </button>
                </td>
                <td>{{ cartItem.price * cartItem.count }}$</td>
                <td class="end">
                  <button class="close">
                    <v-icon>mdi-close</v-icon>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="coupon">
          <form action="">
            <input
              type="text"
              class="coupon-input"
              name="coupon"
              placeholder="Coupon Code"
            />
            <input
              type="submit"
              value="Apply Coupon"
              class="coupon-button"
              @submit.stop.prevent
            />
          </form>
        </div>
        <div class="cart-total">
          <h3>Cart Total</h3>
          <div class="cart-info">
            <div class="subtotal">
              <span class="title">Subtotal:</span>
              <span class="desc">$96.00</span>
            </div>
            <div class="shipping">
              <span class="title">Shipping:</span>
              <span class="desc">$3.00</span>
            </div>
            <div class="total">
              <span class="title">Total:</span>
              <span class="desc">$99.00</span>
            </div>
            <div class="link">
              <a href="#" class="checkout">proceed checkout</a>
            </div>
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
      cartProducts: [
        {
          id: 1,
          img: "/images/Banana.jpg",
          name: "Banana",
          price: 2.99,
          count: 1,
        },
        {
          id: 2,
          img: "/images/potatos.webp",
          name: "Botatos",
          price: 2.88,
          count: 1,
        },
        {
          id: 3,
          img: "/images//broccoli.jpg",
          name: "Brocoli",
          price: 2.77,
          count: 1,
        },
      ],
    };
  },
};
</script>
