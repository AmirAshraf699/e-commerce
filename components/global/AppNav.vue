<template>
  <div class="parent-nav" ref="parentNav">
    <v-container class="top-container pa-0">
      <div class="top" id="nav-top">
        <div class="city">
          <span><v-icon>mdi-map-marker</v-icon>123 Street, New York</span>
          <span><v-icon>mdi-email</v-icon>Email@Example.com</span>
        </div>
        <div class="privacy">
          <a href="#">Privacy Policy</a> / <a href="#">Terms of Use</a> /
          <a href="#">Sales and Refunds</a>
        </div>
      </div>
    </v-container>
    <v-container>
      <div class="main-nav">
        <div class="title">
          <nuxt-link :to="{ name: 'index' }">Fruitable</nuxt-link>
        </div>
        <nav id="navbar">
          <nuxt-link
            v-for="link in links"
            :key="link.id"
            :to="{ name: link.name }"
            >{{ link.text }}</nuxt-link
          >
        </nav>
        <div class="icons">
          <v-icon>mdi-magnify</v-icon>
          <v-icon>mdi-shopping</v-icon>
          <v-icon>mdi-account</v-icon>
        </div>
        <div class="nav-icon" id="app-nav-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <v-menu activator="#app-nav-icon">
        <v-list style="width: 1000px; max-width: 100%">
          <v-list-item v-for="link in links" :key="link.id">
            <nuxt-link
              :to="{ name: link.name }"
              style="
                color: #0000008c;
                margin: 0;
                text-decoration: none;
                font-weight: 600;
              "
              >{{ link.text }}</nuxt-link
            >
          </v-list-item>
          <v-list-item>
            <div class="icons" style="display: flex; gap: 10px">
              <v-icon style="color: var(--bs-primary); font-size: 30px"
                >mdi-magnify</v-icon
              >
              <v-icon style="color: var(--bs-primary); font-size: 30px"
                >mdi-shopping</v-icon
              >
              <v-icon style="color: var(--bs-primary); font-size: 30px"
                >mdi-account</v-icon
              >
            </div>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-container>
  </div>
</template>

<script setup>
const links = ref([
  {
    id: 1,
    name: "index",
    text: "Home",
  },
  {
    id: 2,
    name: "Shop",
    text: "Shop",
  },
  {
    id: 3,
    name: "Cart",
    text: "Cart",
  },
  {
    id: 4,
    name: "Checkout",
    text: "Checkout",
  },
  {
    id: 5,
    name: "Testimonials",
    text: "Testimonials",
  },
  {
    id: 6,
    name: "ContactUs",
    text: "Contact us",
  },
]);

const parentNav = ref(null) 

onMounted(() => {
  window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        parentNav.value.classList.add("show");
      } else {
        parentNav.value.classList.remove("show");
      }
    })
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
.parent-nav {
  transition: 0.5s;
  background-color: white;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 1px 5px var(--bs-primary);
  width: 100%;
  &.show {
    transform: translateY(-60px);
  }
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--bs-primary);
    position: relative;
    padding: 15px 30px;
    border-radius: 40px 15px 40px 15px;
    color: var(--bs-light);
    transition: 0.5s;
    .city span,
    .privacy a {
      letter-spacing: 1.7px;
      font-size: 13px;
      color: var(--bs-light);
    }
    .city {
      span {
        display: inline-block;
        margin-right: 20px;
        .v-icon {
          margin-right: 10px;
          color: var(--bs-secondary);
        }
      }
    }
    .privacy a {
      transition: 0.3s;
      &:hover {
        color: var(--bs-secondary);
      }
    }
  }
  .main-nav {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      a {
        color: var(--bs-primary);
        font-size: 40px;
        font-weight: 900;
        margin: 0;
        text-decoration: none;
      }
    }
    nav {
      display: flex;
      a {
        padding: 0 10px;
      }
    }
    .icons {
      display: flex;
      gap: 20px;
      .v-icon {
        display: block;
        color: var(--bs-primary);
        font-size: 30px;
      }
    }
    .nav-icon {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 5px;
      padding: 8px;
      border: 2px solid var(--bs-primary);
      border-radius: 6px;
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        border-color: var(--bs-secondary);
      }
      span {
        display: block;
        width: 25px;
        height: 3px;
        background-color: var(--bs-primary);
      }
    }
  }
}

@media (max-width: 991px) {
  .parent-nav {
    &.show {
      transform: translateY(0);
    }
    .top {
      display: none;
    }
    .main-nav {
      .title {
        a {
          font-size: 40px;
          font-weight: 900;
        }
      }
      nav {
        display: none;
      }
      .icons {
        display: none;
      }
      .nav-icon {
        display: flex;
      }
    }
  }
}
</style>
