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
