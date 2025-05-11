<template>
  <div class="home-features">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="3"
          xxl="3"
          v-for="feat in features"
          :key="feat.id"
        >
          <div class="features-feat">
            <div class="features-icon">
              <v-icon>{{ feat.icon }}</v-icon>
            </div>
            <p class="features-desc">{{ feat.desc }}</p>
            <span class="features-offer">{{ feat.offer }}</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          id: "1",
          icon: "mdi-car-side",
          desc: "Free Shipping",
          offer: "Free on order over $300",
        },
        {
          id: "2",
          icon: "mdi-shield-account",
          desc: "Security Payment",
          offer: "100% security payment",
        },
        {
          id: "3",
          icon: "mdi-arrow-expand",
          desc: "30 Day Return",
          offer: "30 day money guarantee",
        },
        {
          id: "4",
          icon: "mdi-phone",
          desc: "24/7 Support",
          offer: "Support every time fast",
        },
      ],
    };
  },
};
</script>
