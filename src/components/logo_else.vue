<template>
  <div class="link-logo">
    <router-link to="/" active-class="active"><img class="logo" width="385" src="../../static/img/logo.svg" @click="menuView"/></router-link>
  </div>
</template>

<script>
  export default {
    methods: {
      menuView() {
        let
          burger = document.querySelector(".burger"),
          menu = document.getElementById("menu"),
          body = document.querySelector("body");
        function displayNone() {
          menu.classList.add("menu-none");
        }

        if (burger.classList.contains("exit")) {
          body.classList.remove("hidden");
          burger.classList.remove("exit");
          menu.classList.add("menu-none-transition");
          setTimeout(displayNone, 300);
        }
        body.classList.remove("hidden");
      }
    },
    name: "logo_else"
  }
</script>

<style lang="scss" scoped>

  @import "../assets/scss/variebles";
  @import "../assets/scss/templates";

  .logo {
    @extend %logo;
  }

  .link-logo {
    position: absolute;
    top: 7vh;
    left: 10vw;
    @extend %logo;
    z-index: 500;
    @extend %logo-transition;
  }

  .link-logo:hover {
    @extend %logo-hover
  }

  .link-logo:active {
    @extend %logo-active
  }

  @media only screen and (max-width: 1140px) {
    .link-logo {
      top: 35px;
    }
  }

  @media only screen and (max-width: 768px) {
    .link-logo {
      top: 30px;
      left: 7.5vw;
    }
  }
</style>