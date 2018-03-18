<template>
  <main class="home">
    <app-logo></app-logo>
    <div class="wrapper">
      <section class="text-block">
        <h1 class="name">
          <span class="first-name">{{first_name}}</span><br>
          <span class="last-name">{{last_name}}</span>
        </h1>
        <p class="hello-text">{{text}}</p>
        <router-link :to="{ name : 'portfolio', params : {category : 'works'}}" class="go-portfolio" active-class="active">{{link}}</router-link>
      </section>
      <div class="bg">
        <img src="https://1.bp.blogspot.com/-RUyakYiZZ0w/VEJ9k4c0AgI/AAAAAAAD7j0/L0FsTuukX3w/s1600/Jeremy%2BLipking%2BTutt'Art%40%2B(38).jpg" alt="">
      </div>
    </div>
    <div class="social-wrapper">
      <a href="mailto:myemail@gmail.com?subject=Вопрос со страницы портфолио" class="social email" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="15">
          <path fill-rule="evenodd" d="M631.794271,1998 L655.166666,1998 L643.536135,2008.92358 L631.794271,1998 Z M631,1999.58981 L637.498374,2005.54903 L631,2011.39545 L631,1999.58981 Z M656,1999.50238 L656,2011.39545 L649.323762,2005.53267 L656,1999.50238 Z M648.218128,2006.52421 L655.200585,2013 L631.817779,2013 L638.728949,2006.52421 L643.509182,2010.90789 L648.218128,2006.52421 Z" transform="translate(-631 -1998)"/>
        </svg>
      </a>
      <a href="" class="social inst" target="_blank">
        <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <g id="UI-Kit" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-737.000000, -1993.000000)">
            <path d="M742.527787,1999 L737,1999 L737,1996 C737,1994.695 737.835041,1993.5812 739,1993.16969 L739,1997 L740,1997 L741,1997 L741,1993 L742,1993 L742,1997 L743,1997 L743,1993 L754.005798,1993 C755.656688,1993 757,1994.34315 757,1996 L757,1999 L751.472213,1999 C750.373572,1997.7725 748.777,1997 747,1997 C745.223,1997 743.626428,1997.7725 742.527787,1999 Z M741.802693,2000 C741.292183,2000.88252 741,2001.90714 741,2003 C741,2006.31371 743.686291,2009 747,2009 C750.313709,2009 753,2006.31371 753,2003 C753,2001.90714 752.707817,2000.88252 752.197307,2000 L757,2000 L757,2006.99469 C757,2010.30639 754.313413,2013 750.999341,2013 L743.000659,2013 C739.676536,2013 737,2010.31133 737,2006.99469 L737,2000 L741.802693,2000 Z M752.998957,1994 C752.447248,1994 752,1994.44266 752,1994.99896 L752,1996.00104 C752,1996.55275 752.44266,1997 752.998957,1997 L754.001043,1997 C754.552752,1997 755,1996.55734 755,1996.00104 L755,1994.99896 C755,1994.44725 754.55734,1994 754.001043,1994 L752.998957,1994 Z M747,2007 C744.790861,2007 743,2005.20914 743,2003 C743,2000.79086 744.790861,1999 747,1999 C749.209139,1999 751,2000.79086 751,2003 C751,2005.20914 749.209139,2007 747,2007 Z" id="instagram_s" fill="#000000"></path>
          </g>
        </svg>
      </a>
    </div>
  </main>
</template>


<script>
  import Logo from '@/components/logo_main.vue'

export default {
  components: {
    'app-logo': Logo,
  },
  computed: {
    first_name() {
      return this.translate('first_name');
    },
    last_name() {
      return this.translate('last_name');
    },
    text() {
      return this.translate('text');
    },
    link() {
      return this.translate('link');
    }
  },
  name: 'home'
}
</script>


<style lang="scss" scoped>

  @import "../assets/scss/variebles";
  @import "../assets/scss/templates";


  .home {
    @extend %grid;
    @extend %container;
    @extend %flex-center;
    height: 70vh;
  }

  .text-block {
    max-width: 340px;
  }

  .name {
    line-height: 45px;
    margin-bottom: 8vh;
    padding-top: 10vh;
  }

  .hello-text {
    margin-bottom: 5vh;
    animation: text-block 1.7s ease-in-out;
  }

  .first-name {
    display: inline-block;
    font-family: $family;
    font-size: $sub-heading;
    color: $light_black;
    animation: firstName 1s ease-in-out;
  }

  .last-name {
    display: inline-block;
    padding-left: 40px;
    font-family: $family;
    font-size: $heading;
    color: $black;
    animation: lastName 1s ease-in-out;
    animation-fill-mode: forwards
  }

  .go-portfolio {
    position: relative;
    display: inline-block;
    margin-left: -20px;
    padding: 20px;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 800;
    font-size: 22px;
    color: #000;
    transition: opacity .05s ease-in-out, transform .1s ease-in-out, color .2s ease-in-out;
    animation: text-block 2.3s ease-in-out;
  }

  .go-portfolio:hover {
    color: $blue;
  }

  .go-portfolio:active {
    opacity: .6;
    transform: scale(.95);
    transition: transform .1s ease-in-out;
  }


  .bg {
    position: absolute;
    text-align: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -10;
    overflow: hidden;
  }

  .bg::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,.7);
    z-index: 1;
  }

  .bg img {
    min-height: 100%;
    min-width: 100%;
    max-width: 200vh;
    transition: margin-left .2s ease-in-out;
  }

  .social-wrapper {
    display: none;
  }

  @media only screen and (max-width: 1140px) {

    .home {
      height: 100%;
    }

    .bg {
      height: 100%;
    }

    .text-block {
      max-width: 300px;
    }

    .name {
      line-height: 20px;
      margin-top: 20vh;
      padding-top: 0;
    }

    .hello-text {
      margin-bottom: 3vh;
    }

    .first-name {
      font-size: $sub-heading-m;
    }

    .last-name {
      padding-left: 23px;
      font-size: $heading-m;
    }

    .go-portfolio {
      padding-bottom: 100px!important;
      text-transform: uppercase;
      font-size: 18px;
    }

    .social {
      display: inline-flex;
      align-items: center;
      padding: 15px;
    }

    .social svg path {
      transition: fill .2s ease-in-out;
    }

    .social:hover svg path {
      fill: $blue;
    }

    .social-wrapper {
      position: absolute;
      bottom: 5vh;
      padding-right: 30px;
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }

  @media only screen and (max-width: 768px) {
    .text-block {
      max-width: 215px;
    }

    .name {
      line-height: 20px;
      margin-top: 20vh;
      padding-top: 0;
    }

    .hello-text {
      margin-bottom: 3vh;
    }

    .first-name {
      font-size: $sub-heading-m;
    }

    .last-name {
      padding-left: 23px;
      font-size: $heading-m;
      line-height: 32px;
    }

    .go-portfolio {
      padding-bottom: 100px!important;
      text-transform: uppercase;
      font-size: $p-m;
    }

    .bg img {
      margin-left: -50%;
      min-height: 100%;
      min-width: 100%;
      max-width: 200vh;
    }

    .social-wrapper {
      padding-right: 0;
    }
  }

  @media only screen and (orientation: landscape) {

    .bg img {
      margin-left: 0;
    }
  }

  /***Animation***/
  @keyframes firstName {
    0% {
      opacity: 0;
      transform: translateX(-3vw);
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @keyframes lastName {
    0% {
      opacity: 0;
      transform: translateX(3vw);
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }

</style>
