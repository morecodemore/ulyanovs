<template>
  <div class="link-logo">
    <a><img class="logo" width="385" src="../../static/img/logo.svg"/></a>
  </div>
</template>

<script>
  export default {
    name: "logo_main"
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