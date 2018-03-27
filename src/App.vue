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
    menuNoneKey() {
      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          this.show = !this.show;
          this.modal = !this.modal;
          body.classList.remove('hidden')
        }
      });
      }
  },
  created() {
  this.menuNoneKey();
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

  @media only screen and (max-width: 1140px) {
  }

  @media only screen and (max-width: 768px) {

  }

  .hidden {
    overflow: hidden;
  }


  /*Animation*/


</style>