<template>
  <div class="home">
    <HomeLanding />
    <HomeFeatures />
    <OurProducts />
    <HomeDiscount />
    <FreshProducts />
    <EmptyProducts />
    <ExoticFruits />
    <BestSaller />
    <AboutUs />
    <HomeTesti />
  </div>
</template>

<script>
import FreshProducts from "@/components/homepage/FreshProducts.vue";
import OurProducts from "@/components/homepage/OurProducts.vue";
import AboutUs from "@/components/homepage/AboutUs.vue";
import BestSaller from "@/components/homepage/BestSaller.vue";
import ExoticFruits from "@/components/homepage/ExoticFruits.vue";
import EmptyProducts from "@/components/global/EmptyProducts.vue";
import HomeDiscount from "@/components/homepage/HomeDiscount.vue";
import HomeFeatures from "@/components/homepage/HomeFeatures.vue";
import HomeLanding from "@/components/homepage/HomeLanding.vue";
import HomeTesti from "@/components/homepage/HomeTesti.vue";
export default {
  components: {
    HomeLanding,
    HomeFeatures,
    HomeDiscount,
    EmptyProducts,
    FreshProducts,
    ExoticFruits,
    BestSaller,
    AboutUs,
    HomeTesti,
    OurProducts,
  },
};
</script>