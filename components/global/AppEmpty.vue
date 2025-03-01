<template>
  <div class="app-empty" ref="appEmpty"></div>
</template>

<script setup>
const appEmpty = ref(null) 

onMounted(() => {
  window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        appEmpty.value.classList.add("hide");
      } else {
        appEmpty.value.classList.remove("hide");
      }
    })
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss">
.app-empty {
  width: 100%;
  height: 142px;
  position: relative;
  background-color: var(--bs-white);
  transition: 0.3s;
  &.hide {
    transform: translateY(-60px);
  }
}

@media (max-width: 991px) {
  .app-empty {
    height: 82px;
    &.hide {
    transform: translateY(0);
  }
  }
}
</style>
