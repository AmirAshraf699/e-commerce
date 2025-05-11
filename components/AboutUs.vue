<template>
  <div class="about-us">
    <v-container>
      <div class="about-content">
        <div class="about-parent">
          <div class="about-child" v-for="el in about" :key="el.id">
            <v-icon>mdi-account-group</v-icon>
            <h3>{{ el.title }}</h3>
            <p>{{ el.num }}</p>
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
      about: [
        {
          id: 1,
          title: "satisfied customers",
          num: "1963",
        },
        {
          id: 2,
          title: "quality of service",
          num: "99%",
        },
        {
          id: 3,
          title: "quality certificates",
          num: "33",
        },
        {
          id: 4,
          title: "Available Products",
          num: "789",
        },
      ],
    };
  },
};
</script>
