<template>
  <PagesHeading title="Testimonials" />
  <div class="testimonials">
    <v-container>
      <div class="title">
        <h2 class="head">Our Testimonial</h2>
        <p class="desc">Our Client Saying!</p>
      </div>
      <v-row>
        <v-col
          cols="12"
          sm="12"
          md="12"
          lg="6"
          xl="6"
          xxl="6"
          v-for="testi in testimonials"
          :key="testi.id"
        >
          <div class="parent">
            <p>{{ testi.desc }}</p>
            <div class="line"></div>
            <div class="content">
              <img :src="testi.img" alt="" />
              <div class="info">
                <h3>{{ testi.name }}</h3>
                <p>{{ testi.state }}</p>
                <v-rating
                  :model-value="testi.rate"
                  half-increments
                  color="var(--bs-dark)"
                  active-color="var(--bs-primary)"
                  size="18"
                  readonly
                ></v-rating>
              </div>
              <div class="comma">
                <v-icon>mdi-comma</v-icon>
                <v-icon>mdi-comma</v-icon>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { useCounterStore } from "~/store/counter";
import { mapState } from "pinia";
export default {
  computed: {
    ...mapState(useCounterStore, ["testimonials"]),
  },
};
</script>
