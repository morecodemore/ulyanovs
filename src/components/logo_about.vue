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
    name: "logo_about"
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
    display: block;
    bottom: 7vh;
    right: 10vw;
    @extend %logo;
    max-height: 104px;
    z-index: 500;
    @extend %logo-transition
  }

  .link-logo:hover {
    @extend %logo-hover
  }

  .link-logo:active {
    @extend %logo-active
  }

  @media only screen and (max-width: 992px) {
    .link-logo {
      display: none;
    }
  }
</style>