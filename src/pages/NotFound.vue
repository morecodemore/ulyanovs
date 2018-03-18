<template>
  <main class="not_found">
    <app-logo></app-logo>
    <h1><span class="number">4</span><span class="number">0</span><span class="number">4</span></h1>
    <p class="title" v-lang.NotFound.title>Упс, здесь больше ничего нет</p>
    <div class="button-wrapper">
      <a href="#/" class="back-button" v-lang.NotFound.button></a>
      <span class="arrow"></span>
    </div>
  </main>
</template>

<script>
  import Logo from '@/components/logo_else.vue'

  export default {
    components: {
      'app-logo': Logo,
    },
    name: "404"
  }
</script>

<style lang="scss" scoped>

  @import "../assets/scss/variebles";
  @import "../assets/scss/templates";

  .not_found {
    @extend %grid;
    align-items: center;
    justify-content: center;
    height: 70vh;
  }

  .not_found h1 {
    font-size: 100px;
    letter-spacing: .5vw;
    color: $thin_black;
    @extend %h1-animation
  }

  .not_found .number {
    display: inline-block;
    animation: infinity 2s ease-out;
    animation-iteration-count: infinite;
  }

  .not_found .number:nth-child(2) {
    animation-delay: .6s;
  }

  .not_found .number:nth-child(3) {
    animation-delay: 1.2s;
  }

  .not_found .title {
    padding: 15vh 0 calc(15vh - 20px);
    font-size: 40px;
    color: $grey;
    text-align: center;
    animation: text-block 1.2s ease-in-out;
  }

  .button-wrapper {
    position: relative;
    display: inline-flex;
    align-items: center;
  }

  .not_found .back-button {
    padding: 20px;
    text-transform: uppercase;
    font-family: $family;
    font-weight: $extra_bold;
    font-size: 22px;
    line-height: 22px;
    color: $black;
    text-decoration: none;
    transition: opacity .05s ease-in-out, transform .1s ease-in-out, color .2s ease-in-out;
    cursor: pointer;
    animation: text-block 1.5s ease-in-out;
  }

  .not_found .back-button:hover {
    color: #4bcaff;
  }

  .not_found .back-button:active {
    opacity: .6;
    transform: scale(.95);
    transition: transform .1s ease-in-out;
  }

  .arrow {
    position: relative;
    left: -10px;
    display: block;
    width: 26px;
    height: 1px;
    background: $black;
    opacity: .6;
    transition: background .1s ease-in-out, opacity .2s ease-in-out;
    animation: text-block 1.5s ease-in-out;
  }

  .arrow::before,
  .arrow::after {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    width: 40%;
    display: block;
    height: 1px;
    background: #000;
    transform: translate(2px, -3.5px) rotate(45deg);
    transition: width .15s ease-in-out, transform .2s ease-in-out;
  }

  .arrow::after {
    transform: translate(2px, 3.5px) rotate(-45deg);
  }

  .back-button:hover + .arrow {
    background: transparent;
    transform: translateX(10px);
    opacity: 1;
  }

  .back-button:hover + .arrow::before,
  .back-button:hover + .arrow::after {
    width: 60%;
    transform: translate(3px, -5.5px) rotate(45deg);
  }

  .back-button:hover + .arrow::after {
    transform: translate(3px, 5.5px) rotate(-45deg);
  }

  @media only screen and (max-width: 1140px) {
    .not_found h1 {
      font-size: 80px;
    }

    .not_found .title {
      font-size: 32px;
    }

    .not_found .back-button {
      font-size: 20px;
    }

    .arrow {
      width: 22px;
    }

    .arrow::before,
    .arrow::after {
      transform: translate(1px, -3px) rotate(45deg);
    }

    .arrow::after {
      transform: translate(1px, 3px) rotate(-45deg);
    }

    .back-button:hover + .arrow::before,
    .back-button:hover + .arrow::after {
      transform: translate(2px, -4.5px) rotate(45deg);
    }

    .back-button:hover + .arrow::after {
      transform: translate(2px, 4.5px) rotate(-45deg);
    }
  }

  @media only screen and (max-width: 768px) {
    .not_found h1 {
      font-size: 60px;
    }

    .not_found .title {
      font-size: 20px;
    }

    .not_found .back-button {
      font-size: $p-m;
    }

    .arrow {
      left: -15px;
      width: 14px;
    }

    .arrow::before,
    .arrow::after {
      transform: translate(1px, -2.2px) rotate(45deg);
    }

    .arrow::after {
      transform: translate(1px, 2.2px) rotate(-45deg);
    }

    .back-button:hover + .arrow {
      transform: translateX(5px);
    }

    .back-button:hover + .arrow::before,
    .back-button:hover + .arrow::after {
      width: 60%;
      transform: translate(2px, -2.6px) rotate(45deg);
    }

    .back-button:hover + .arrow::after {
      transform: translate(2px, 2.6px) rotate(-45deg);
    }
  }


  /***Animation***/
  @keyframes infinity {
    0% {
      transform: translateY(0px);
    }
    25% {
      transform: translateY(-5px);
    }
    50% {
      transform: translateY(0px);
    }
    75% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(0px);
    }
  }


</style>