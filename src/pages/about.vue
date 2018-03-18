<template>
  <main class="about">
    <app-logo-else id="logo-else"></app-logo-else>
    <div class="photo-wrapper">
      <img src="https://www.theepochtimes.com/assets/uploads/2013/12/Lipking_Sonya_12x16_v2.jpg" alt="">
    </div>
    <div class="about-text-wrapper">
      <h1 class="head-title" v-lang.about.title></h1>
      <div class="paragraph-container">
        <div class="paragraph-wrapper">
          <p class="paragraph" v-lang.about.text></p>
        </div>
      </div>
    </div>
    <app-logo></app-logo>
  </main>
</template>

<script>
  import Logo from '@/components/logo_about.vue'
  import LogoEl from '@/components/logo_else.vue'
export default {
  components: {
    'app-logo': Logo,
    'app-logo-else': LogoEl,
  },
  name: 'about'
}
</script>

<style lang="scss" scoped>

  @import "../assets/scss/variebles";
  @import "../assets/scss/templates";


  #logo-else {
    display: none;
  }

  .about {
    display: flex;
    @extend %container;
    height: 70vh;
  }

  /***Photo***/
  .photo-wrapper {
    position: relative;
    display: flex;
    @extend %flex-center;
    top: -15vh;
    left: -10vw;
    width: 60vw;
    height: 80vh;
    overflow: hidden;
    transition: width .2s ease-in-out, height .2s ease-in-out;
    animation: photoView .8s ease-in-out;
  }

  .photo-wrapper img {
    width: auto;
    height: 80vh;
    transition: left .2s ease-in-out, top .2s ease-in-out;
  }

  /***Text***/
  .about-text-wrapper {
    @extend %grid;
  }

  .head-title {
    display: inline-block;
    align-self: flex-start;
    margin-top: 2vh;
    margin-bottom: 2vh;
    line-height: $h1;
    @extend %h1-animation
  }

  .about-text-wrapper {
    margin-left: 3vw;
    width: 37vw;
  }

  .paragraph-container {
    position: relative;
    width: 40vw;
    overflow: hidden;
  }

  .paragraph-container::before,
  .paragraph-container::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 5vh;
    background: linear-gradient(180deg, #fff 0%, rgba(255,255,255,0) 100%);
    z-index: 10;
  }

  .paragraph-container::after {
    height: 10vh;
    top: calc(50vh - 9vh);
    transform: rotate(180deg);
  }

  .paragraph-wrapper {
    width: 42vw;
    height: 50vh;
    overflow: auto
  }

  .paragraph {
    padding: 5vh 5vw 80px 0;
    font-family: $family;
    font-weight: $light;
    font-size: $p;
    line-height: $p-height;
    color: $black;
    cursor: ns-resize;
    animation: text-block 1.3s ease-in-out;
  }

  @media only screen and (max-width: 1350px) {

    .head-title {
      margin-top: 3vh;
      margin-bottom: 2vh;
      font-size: 32px;
      line-height: 35px;
    }

    .photo-wrapper {
      top: 0;
      left: 0;
      width: 60vw;
      height: inherit;
    }

    .photo-wrapper img {
      height: 60vh;
      margin-top: -5vh;
    }

    .about-text-wrapper {
      margin-left: 8vw;
      width: 35vw;
    }

    .paragraph-container {
      width: 35vw;
    }

    .paragraph-wrapper {
      width: 37vw;
    }

    .paragraph {
      padding: 3vh 10px 80px 0;
      font-size: 18px;
      line-height: 30px;
    }
  }

  @media only screen and (max-height: 700px) {

    .head-title {
      margin-top: 3vh;
      margin-bottom: 2vh;
      font-size: 32px;
      line-height: 35px;
    }

    .photo-wrapper {
      top: 0;
      left: 0;
      width: 60vw;
      height: inherit;
    }

    .photo-wrapper img {
      height: 60vh;
      margin-top: -5vh;
    }

    .about-text-wrapper {
      margin-left: 8vw;
      width: 35vw;
    }

    .paragraph-container {
      width: 35vw;
    }

    .paragraph-wrapper {
      width: 37vw;
    }

    .paragraph {
      padding: 3vh 10px 80px 0;
      font-size: 18px;
      line-height: 30px;
    }
  }

  @media only screen and (max-width: 1140px) {

    .head-title {
      margin-top: 6vh;
      margin-bottom: 0;
      font-size: 32px;
      line-height: 35px;
    }

    .photo-wrapper {
      width: 50vw;
    }

    .photo-wrapper img {
      width: inherit;
      height: auto;
      margin-top: 0;
    }


    .paragraph {
      padding: 3vh 10px 80px 0;
      font-size: 16px;
      line-height: 28px;
    }
  }

  @media only screen and (max-width: 992px) {

    #logo-else {
      display: block;
    }

    .about {
      flex-direction: column;
      height: auto;
    }

    .head-title {
      align-self: center;
      margin-top: 30px;
      margin-bottom: 40px;
      line-height: 30px;
    }

    .photo-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 500px;
    }

    .photo-wrapper img {
      position: absolute;
      top: -50%;
      left: -30%;
      max-width: 200vw;
      width: auto;
      min-width: 100vw;
      min-height: 450px;
      height: auto;
    }

    .about-text-wrapper {
      margin-top: 450px;
      margin-left: 0;
      margin-bottom: 80px;
      width: inherit;
    }

    .paragraph-container {
      width: inherit;
      overflow: auto;
    }

    .paragraph-container::before,
    .paragraph-container::after {
      display: none;
    }

    .paragraph-wrapper {
      width: inherit;
      height: auto;
      overflow: auto
    }

    .paragraph {
      padding: 0;
      font-family: $family;
      font-weight: $light;
      font-size: $p;
      line-height: $p-height;
      color: $black;
      cursor: default;
    }
  }

  @media only screen and (max-width: 650px) {

    .about-text-wrapper {
      margin-bottom: 50px;
    }

    .paragraph {
      padding: 0;
      font-size: 16px;
      line-height: 28px;
    }
  }

  @media only screen and (max-width: 550px) {

    .photo-wrapper {
      height: 450px;
    }

    .photo-wrapper img {
      top: -10%;
      left: -30%;
    }

    .about-text-wrapper {
      margin-top: 400px;
    }

    .head-title {
      align-self: center;
      margin-top: 20px;
      margin-bottom: 30px;
      line-height: 30px;
      font-size: 25px;
    }

    .paragraph {
      padding: 0;
      font-size: $p-m;
      line-height: $p-height-m;
    }

  }

  /*Animation*/

  @keyframes photoView {
    0% {
      opacity: 0;
      transform: translateX(10vw);
    }
    70% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
  }
  }

</style>