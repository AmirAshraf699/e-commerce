<template>
  <div class="footer">
    <v-container>
      <div class="top">
        <div class="title">
          <h2>Fruitables</h2>
          <p>Fresh products</p>
        </div>
        <div class="email-parent">
          <form action="">
            <input
              class="email"
              type="email"
              name="email"
              placeholder="Your Email"
            />
            <input
              class="sub"
              type="submit"
              value="Subscribe Now"
              @submit.prevent
            />
          </form>
        </div>
        <div class="icons">
          <ul>
            <li>
              <a href="#"><v-icon>mdi-twitter</v-icon></a>
            </li>
            <li>
              <a href="#"><v-icon>mdi-facebook</v-icon></a>
            </li>
            <li>
              <a href="#"><v-icon>mdi-youtube</v-icon></a>
            </li>
            <li>
              <a href="#"><v-icon>mdi-linkedin</v-icon></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="info">
        <v-row>
          <v-col cols="12" xs="12" sm="6" md="6" lg="3" xl="3" xxl="3">
            <div class="people">
              <h3 class="info-title">Why People Like Us!</h3>
              <p class="desc">
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the like Aldus PageMaker including of Lorem
                Ipsum.
              </p>
              <a href="#" class="read">Read More</a>
            </div>
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="6" lg="3" xl="3" xxl="3">
            <div class="links-parent">
              <h3 class="info-title">Shop Info</h3>
              <ul class="links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Condition</a></li>
                <li><a href="#">Return Policy</a></li>
                <li><a href="#">FAQs & Help</a></li>
              </ul>
            </div>
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="6" lg="3" xl="3" xxl="3">
            <div class="links-parent">
              <h3 class="info-title">Account</h3>
              <ul class="links">
                <li><a href="#">My Account</a></li>
                <li><a href="#">Shop details</a></li>
                <li><a href="#">Shopping Cart</a></li>
                <li><a href="#">Wishlist</a></li>
                <li><a href="#">Order History</a></li>
                <li><a href="#">International Orders</a></li>
              </ul>
            </div>
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="6" lg="3" xl="3" xxl="3">
            <div class="address">
              <h3 class="info-title">Contact</h3>
              <p class="desc">
                Address: 1429 Netus Rd, NY 48247
                <br />
                Email: Example@gmail.com
                <br />
                Phone: +0123 4567 8910
                <br />
                Payment Accepted
              </p>
              <div class="payment">
                <img src="/images/visa.png" alt="" />
                <img src="/images/mastercard.png" alt="" />
                <img src="/images/maestro.png" alt="" />
                <img src="/images/paypal.webp" alt="" />
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="copyright">
        <p class="left">
          <v-icon>mdi-copyright</v-icon> <span>Your sitename</span>, All right
          reserved.
        </p>
        <p class="right">
          Designed By <span>HTML Codex</span>Distributed By
          <span>ThemeWagon.</span>
        </p>
      </div>
    </v-container>
  </div>
</template>

