<template>
  <div id="app">
    <nav>
      <img class="logo" src="static/img/svg/logo.svg" alt="ULYANOV'S">
      <app-lang id="lang"></app-lang>
    </nav>
    <router-view></router-view>
    <footer>
      <img class="logo" src="static/img/svg/footer-logo.svg" alt="ULYANOV'S">
      <p class="copyright">&copy;2018 ULYANOV'S - modern web development </p>
    </footer>
  </div>
</template>


<script>
  import Lang from '@/components/lang.vue'
export default {
  components: {
    'app-lang': Lang,
  },
  data: function  () {
    return {
      show: true,
      modal: true
    }
  },
  methods: {
  },
  created() {
  },
  name: 'App'
}
</script>


<style lang="scss">

  @import "assets/scss/main.scss";


  /*****Global*****/
  *, *::after,*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *::selection {
    color: $white;
    background: $red;
  }
  html {
    min-width: 320px;
    scroll-behavior: smooth;
    background: $white;
  }

  body {
    margin-bottom: 385px;
    position: relative;
    @extend %grid;
    min-width: 320px;
    max-width: 100%;
    min-height: 100vh;
  }

  #app {
    @extend %base-typography;
    min-height: 100vh;
    background: $white;
    box-shadow:  0 15px 60px 0 $black;
  }

  h1 {
    font-size: $h1;
    font-weight: $extra_bold;
  }

  a {
    font-family: $family;
    text-decoration: none;
    font-weight: $extra_bold;
    color: $black;
    transition: color .3s ease-in-out;
    cursor: pointer;
  }

  a:hover {
    color: $red;
  }

  nav {
     display: flex;
     @extend %container-fluid;
     justify-content: space-between;
     align-items: flex-end;
     height: 160px;
   }

  .logo {
    width: 450px;
    animation: logo 1.2s ease-in-out;
  }

  @keyframes logo {
    0% {
      transform: translateX(-100vw);
    }
    100% {
      transform: translateX(0);
    }
  }

  footer {
    position: fixed;
    left: 0;
    bottom: 0;
    @extend %grid;
    @extend %container-fluid;
    @extend %flex-center;
    height: 385px;
    background: $black;
    z-index: -10;
  }

  .copyright {
    margin-top: 45px;
    font-family: $family-pharagraph;
    font-size: $copyright;
    line-height: 25px;
    color: $black-red;
  }

  .hidden {
    overflow: hidden;
  }

  @media only screen and (max-width: 1249px) {

    body {
      margin-bottom: 330px !important;
    }

    h1 {
      font-size: $h1-l;
    }

    nav {
      height: 130px;
    }

    .logo {
      width: 350px;
    }

    footer {
      height: 330px;
    }

    .copyright {
      margin-top: 30px;
      font-size: $copyright-l;
      line-height: 25px;
    }
  }

  @media only screen and (max-width: 1040px) {

    body {
      margin-bottom: 250px !important;
    }

    h1 {
      font-size: $h1-t;
    }

    nav {
      height: 100px;
    }

    .logo {
      width: 250px;
    }

    footer {
      height: 250px;
    }

    .copyright {
      margin-top: 20px;
      font-size: $copyright-t;
      line-height: 18px;
    }
  }

  @media only screen and (max-width: 768px) {

    body {
      margin-bottom: 170px !important;
    }

    h1 {
      font-size: $h1-m;
      line-height: $h1-height-m;
    }

    nav {
      height: 70px;
    }

    .logo {
      width: 170px;
    }

    footer {
      height: 170px;
    }

    .copyright {
      margin-top: 20px;
      font-size: $copyright-m;
      line-height: 18px;
    }
  }


  /*Animation*/


</style>