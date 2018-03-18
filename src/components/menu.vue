<template>
  <div>
    <div class="wrapper-burger">
      <button id="button" type="button" @click="menuView"></button>
      <div class="burger"></div>
    </div>
    <div id="menu" class="menu-block">

      <div class="link-wrapper">
        <app-lang id="menu-lang"></app-lang>
        <ul class="menu-list">
          <li class="list-item">
            <router-link to="/about" active-class="active"><span class="link-text" @click="menuView" v-lang.menu.about></span></router-link>
          </li>
          <li class="list-item">
            <router-link to="/portfolio/works" active-class="active"><span class="link-text" @click="menuView" v-lang.menu.portfolio>Портфолио</span></router-link>
          </li>
          <li class="list-item">
            <router-link to="/contacts" active-class="active"><span class="link-text" @click="menuView" v-lang.menu.contact>Контакты</span></router-link>
          </li>
        </ul>
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
      </div>
    </div>
  </div>
</template>

<script>
  import Lang from '@/components/lang.vue'

  export default {
    components: {
      'app-lang': Lang
    },
   name: 'menu',
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
         setTimeout(displayNone, 100);
       } else {
         body.classList.add("hidden");
         burger.classList.add("exit");
         menu.classList.remove("menu-none");
         menu.classList.remove("menu-none-transition");
         menu.classList.add("menu-active");
       }
     }
   },
 }
</script>

<style lang="scss" scoped>

  @import "../assets/scss/variebles";
  @import "../assets/scss/templates";

  /***Burger***/
  .wrapper-burger {
    position: relative;
    display: flex;
    align-items: center;
    padding: 10px;
    width: 60px;
    height: 50px;
    z-index: 265;
  }

  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;
  }

  .burger {
    position: relative;
    display: block;
    top: -5px;
    width: 40px;
    height: 3px;
    background: #000;
    transition: transform .15s ease-in-out, background .1s ease-in-out, opacity .15s ease-in-out;

  }

  .burger::before,
  .burger::after {
    content: "";
    position: absolute;
    display: block;
    top: 10px;
    right: 0;
    width: 85%;
    height: 100%;
    background: $black;
    transition: top .15s ease-in-out, transform .15s ease-in-out, width .1s ease-in-out,background .15s ease-in-out;

  }

  .burger::after {
    top: -10px;
    width: 68%;
  }

  button:hover + .burger,
  button:hover + .burger::after,
  button:hover + .burger::before {
    background: $blue;
  }

  .exit {
    transform: rotate(-135deg) scale(1.2);
  }

  .exit::before {
    top: 0;
    width: 100%;
    transform: rotate(-90deg);
  }

  .exit::after {
    top: 0;
    width: 0;
    opacity: 0;
  }

  /***Menu***/

  #menu-lang {
    display: none;
  }

  .menu-block {
    position: absolute;
    top: 0;
    right: 0;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    background: #fff;
    transition:  transform .3s ease-in-out;
    animation-name: viewBlock;
    animation-duration: .2s;
    animation-timing-function: ease-in-out;
    z-index: 260;
    overflow: auto;
  }

  .link-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .menu-list {
    list-style: none;
    margin: 20vh 0;
  }

  .list-item {
    text-align: right;
  }

  .list-item a {
    display: inline-block;
    text-transform: uppercase;
    font-size: $menu;
    font-weight: $extra_bold;
    color: $black;
    text-decoration: none;
    transition: transform .3s ease-in-out, color .2s ease-in-out, opacity .1s ease-in-out;
    animation-name: viewLink;
    animation-duration: 0.55s;
    animation-timing-function: ease-in-out;
  }

  .list-item .link-text{
    display: inline-block;
    padding: 3vh;
  }
  .active {
    color: $blue !important;
  }
  .active:hover {
    color: $blue !important;
  }

  .list-item:nth-child(2) a {
    animation-duration: 0.6s;
  }

  .list-item:nth-child(3) a {
    animation-duration: 0.65s;
  }

  .list-item a:hover {
    @extend %transition-link
  }

  .list-item a:active {
    opacity: .6;
    transform: scale(.99);
    transition: transform .1s ease-in-out;
  }

  .social {
    padding: 30px;
  }

  .social svg {
    transform: scale(1.5);
  }

  .social svg path {
    transition: fill .2s ease-in-out;
  }

  .social:hover svg path {
    fill: $blue;
  }

  .social-wrapper {
    display: flex;
    justify-content: center;
    padding-left: 60px;
    width: 100%;
    animation: viewLang .8s ease-in-out;
  }

  @media only screen and (max-width: 1140px) {
    #menu-lang {
      position: absolute;
      display: block;
      padding-left: 40px;
      top: 20vh;
      margin-right: 0;
      align-self: center;
      animation: viewLang .8s ease-in-out;
    }

    .menu-list {
      margin: 30vh 0 20vh;
    }

    .list-item a {
      font-size: 30px;
    }

    .list-item .link-text{
      padding: 2vh;
    }

    .social {
      padding: 20px;
    }

    .social svg {
      transform: scale(1.2);
    }

    .social-wrapper {
      padding-left: 50px;
    }
  }

  @media only screen and (max-height: 700px) {
    .list-item a {
      font-size: 32px;
    }
  }

  @media only screen and (max-width: 768px) {
    /***Burger***/
    .wrapper-burger {
      width: 50px;
      height: 50px;
    }

    .burger {
      top: -5px;
      width: 35px;
      height: 2px;
    }

    .burger::before,
    .burger::after {
      top: 7px;
    }

    .burger::after {
      top: -7px;
    }

    .exit::before {
      top: 0;
      width: 100%;
      transform: rotate(-90deg);
    }

    .exit::after {
      top: 0;
      width: 0;
      opacity: 0;
    }

    #menu-lang {
      padding-left: 20px;
    }

    .list-item a {
      font-size: 18px;
    }

    .list-item .link-text{
      padding: 12px;
    }

    .social {
      display: inline-flex;
      align-items: center;
      padding: 15px;
    }

    .social svg {
      transform: scale(1);
    }

    .social-wrapper {
      padding-left: 25px;
    }
  }

  @media only screen and (max-height: 450px) {
    #menu-lang {
      top: 10vh;
      padding-left: 20px;
    }

    .menu-list {
      margin: 30vh 0 15vh;
    }

    .list-item a {
      font-size: 16px;
    }

    .list-item .link-text{
      padding: 5px;
    }
  }

  /***Animation***/
  @keyframes viewLink {
    0% {
      opacity: 0;
      transform: translateY(-10vh);
    }
    55% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes viewBlock {
    0% {
      transform:  translateY(-250vh);
    }

    100% {
      transform: translateY(0);
    }
  }

  @keyframes menuNone {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-250vh);
    }
  }

  @keyframes viewLang {
    0%{
      opacity: 0;
    }
    30% {
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }

  /***Class for JS***/
  .menu-active {
    display: flex;
  }

  .menu-none-transition {
    animation: menuNone .3s ease-in-out;
    animation-fill-mode: forwards;
  }

  .menu-none {
    display: none;
  }
</style>