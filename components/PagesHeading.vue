<template>
  <div class="page-heading" id="page-heading">
    <v-container fluid>
      <div class="page-heading-content">
        <h2>{{ title }}</h2>
        <div class="page-name">
          <span class="green">Home</span>
          <span class="dash"> / </span>
          <span class="green">Pages</span>
          <span class="dash"> / </span>
          <span class="white">{{ title }}</span>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

