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

<style scoped lang="scss">
.page-heading {
  width: 100%;
  height: 200px;
  margin-top: 0;
  background-image: url("/images/empty.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  color: white;
  transition: 0.3;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .v-container {
    position: relative;
    z-index: 2;
    .page-heading-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      h2 {
        font-size: 35px;
        margin-bottom: 10px;
      }
      .page-name {
        .green {
          color: var(--bs-primary);
        }
        .dash {
          color: var(--bs-light);
        }
      }
    }
  }
}
</style>
