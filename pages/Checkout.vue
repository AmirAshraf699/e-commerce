<template>
  <div class="checkout">
    <PagesHeading title="Checkout" />
    <v-container>
      <div class="checkout-content">
        <div class="billing-details">
          <form action="" class="main-form">
            <div class="first-name">
              <label for="first-name">First Name</label>
              <input type="text" name="first-name" />
            </div>
            <div class="last-name">
              <label for="last-name">Last Name</label>
              <input type="text" name="last-name" />
            </div>
            <div class="address">
              <label for="address">Address</label>
              <input
                type="text"
                name="address"
                placeholder="House number Street Name"
              />
            </div>
            <div class="town">
              <label for="town">Town / City</label>
              <input type="text" name="town" />
            </div>
            <div class="country">
              <label for="country">Country</label>
              <input type="text" name="country" />
            </div>
            <div class="postcode">
              <label for="postcode">Postcode</label>
              <input type="text" name="postcode" />
            </div>
            <div class="mobile">
              <label for="mobile">Mobile</label>
              <input type="tel" name="mobile" />
            </div>
            <div class="email">
              <label for="email">Email</label>
              <input type="email" name="email" />
            </div>
            <div class="checkbox">
              <div class="top">
                <input type="checkbox" name="data" />
                <label for="create">Create an account?</label>
              </div>
              <div class="bottom">
                <input type="checkbox" name="data" />
                <label for="ship">Ship to a different adderes?</label>
              </div>
            </div>
            <div class="textarea">
              <textarea name="messaege" placeholder="Order Notes"></textarea>
            </div>
          </form>
        </div>
        <div class="billing-data">
          <div class="checkout-table-holder">
            <table class="checkout-table">
              <thead>
                <tr>
                  <th>Products</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
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
                    <span>{{ cartItem.count }}</span>
                  </td>
                  <td>{{ cartItem.price * cartItem.count }}$</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="subtotal">
            <span>Subtotal</span>
            <span class="price">$414.00</span>
          </div>
          <div class="shipping">
            <h3>shipping</h3>
            <form action="" class="shipping-form">
              <div>
                <input type="checkbox" name="total" />
                <label for="create">Free Shipping</label>
              </div>
              <div>
                <input type="checkbox" name="total" />
                <label for="ship">Flat rate: $15.00</label>
              </div>
              <div>
                <input type="checkbox" name="total" />
                <label for="ship">Local Pickup: $8.00</label>
              </div>
            </form>
          </div>
          <div class="total">
            <span>Total</span>
            <span class="price">$135.00</span>
          </div>
          <form action="" class="finish">
            <div>
              <input type="checkbox" name="payment" />
              <label for="create">Direct Bank Transfer</label>
              <p>
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            </div>
            <div>
              <input type="checkbox" name="payment" />
              <label for="create">Check Payments</label>
            </div>
            <div>
              <input type="checkbox" name="payment" />
              <label for="create">Cash On Delivery</label>
            </div>
            <div>
              <input type="checkbox" name="payment" />
              <label for="create">Paypal</label>
            </div>
            <input type="submit" value="place order" class="finish-submit" />
          </form>
        </div>
      </div>
      <RelatedProducts />
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
          count: 2,
        },
        {
          id: 2,
          img: "/images/Potatos.webp",
          name: "Botatos",
          price: 2.88,
          count: 2,
        },
        {
          id: 3,
          img: "/images/broccoli.jpg",
          name: "Brocoli",
          price: 2.77,
          count: 2,
        },
      ],
    };
  },
};
</script>
