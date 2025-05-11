<template>
  <div class="contact">
    <PagesHeading title="Contact" />
    <v-container>
      <div class="contact-content">
        <form action="" class="contact-form">
          <div class="contact-input">
            <input type="text" placeholder="Your Name" name="name" />
          </div>
          <div class="contact-input">
            <input type="email" placeholder="Your Email" name="email" />
          </div>
          <div class="contact-input">
            <textarea placeholder="Your Message" name="message"></textarea>
          </div>
          <div class="contact-submit">
            <input type="submit" value="Submit" />
          </div>
        </form>
        <div class="contact-data">
          <div class="address">
            <v-icon>mdi-map-marker</v-icon>
            <div class="info">
              <h3>Address</h3>
              <p>123 Street New York.USA</p>
            </div>
          </div>
          <div class="mail">
            <v-icon>mdi-mail</v-icon>
            <div class="info">
              <h3>Mail Us</h3>
              <p>info@example.com</p>
            </div>
          </div>
          <div class="phone">
            <v-icon>mdi-phone</v-icon>
            <div class="info">
              <h3>Telephone</h3>
              <p>(+012) 3456 7890</p>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>
