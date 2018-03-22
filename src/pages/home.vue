<template>
  <main class="home">
    <section class="title-block wrapper">
      <h1 class="title" v-lang.home.title></h1>
      <h2 class="subtitle" v-lang.home.subtitle></h2>
    </section>
    <section class="about-me">
      <div class="wrapper">
        <h3 class="about-me-heading" v-lang.home.aboutMeHeading></h3>
        <p class="about-me-text" v-lang.home.aboutMeText></p>
      </div>
    </section>
    <section class="social-links">
      <div class="wrapper">
        <h3 class="social-heading" v-lang.home.socialHeading></h3>
        <div class="my-social-networks">
          <a href="https://vk.com/morecodemore" class="social-networks-links" target="_blank"><svg class="vk" xmlns="http://www.w3.org/2000/svg" viewBox="-1754 2611 59.777 35.501">
            <path id="ic_head_logo" class="cls-1" d="M58.705,2.4c.416-1.386,0-2.4-1.978-2.4h-6.54a2.824,2.824,0,0,0-2.845,1.85s-3.326,8.106-8.037,13.372c-1.524,1.524-2.217,2.009-3.049,2.009-.416,0-1.039-.485-1.039-1.871V2.4c0-1.663-.461-2.4-1.846-2.4H23.1a1.576,1.576,0,0,0-1.664,1.5c0,1.576,2.355,1.94,2.6,6.374v9.63c0,2.111-.381,2.494-1.213,2.494-2.217,0-7.61-8.142-10.808-17.459C11.382.731,10.753,0,9.082,0H2.542C.674,0,.3.88.3,1.85c0,1.732,2.217,10.323,10.323,21.686,5.4,7.76,13.018,11.966,19.946,11.966,4.157,0,4.671-.934,4.671-2.543V27.093c0-1.868.394-2.241,1.71-2.241.97,0,2.633.485,6.513,4.226C47.9,33.512,48.628,35.5,51.122,35.5h6.54c1.868,0,2.8-.934,2.264-2.778-.59-1.837-2.707-4.5-5.516-7.664-1.524-1.8-3.811-3.741-4.5-4.711-.97-1.247-.693-1.8,0-2.91C49.906,17.438,57.874,6.214,58.705,2.4Z" transform="translate(-1754.3 2611)"/>
          </svg></a>
          <a href="https://github.com/morecodemore" class="social-networks-links" target="_blank"><svg class="git" xmlns="http://www.w3.org/2000/svg" viewBox="-1624 2600 59.616 58.148">
            <path id="if_github_317712" class="cls-1" d="M29.814,0a29.812,29.812,0,0,0-9.42,58.1c1.491.272,1.96-.611,1.96-1.4,0-.708.015-2.687,0-5.175-8.291,1.8-10.009-3.926-10.009-3.926-1.355-3.444-3.308-4.361-3.308-4.361-2.706-1.849.2-1.813.2-1.813a6.267,6.267,0,0,1,4.567,3.073c2.659,4.552,6.975,3.237,8.673,2.477a6.379,6.379,0,0,1,1.9-3.986C17.758,42.23,10.8,39.673,10.8,28.25a11.518,11.518,0,0,1,3.067-8,10.7,10.7,0,0,1,.293-7.89s2.5-.8,8.2,3.058a28.28,28.28,0,0,1,14.926,0c5.693-3.857,8.192-3.058,8.192-3.058a10.72,10.72,0,0,1,.3,7.89,11.516,11.516,0,0,1,3.064,8c0,11.453-6.969,13.972-13.611,14.708,1.07.922,2.04,2.711,2.04,5.492V56.7c0,.8.481,1.679,1.994,1.39A29.814,29.814,0,0,0,29.814,0Z" transform="translate(-1624.008 2600)"/>
          </svg></a>
          <a href="https://t.me/morecodemore" class="social-networks-links" target="_blank"><svg class="tg" xmlns="http://www.w3.org/2000/svg" viewBox="-1493.67 2604 59.92 50.257">
            <g id="if_Telegram_2744933" transform="translate(-1505.9 2585.955)">
              <g id="Social_icons" transform="translate(12.23 18.045)">
                <g id="Telegram" transform="translate(0 0)">
                  <path id="Shape" class="cls-1" d="M27.847,63.622c-1.785,0-1.482-.674-2.1-2.374L20.5,43.972,60.908,20" transform="translate(-5.31 -16.409)"/>
                  <path id="Shape-2" data-name="Shape" class="cls-2" d="M24.5,50.15a3.53,3.53,0,0,0,2.755-1.378L34.6,41.628,25.438,36.1" transform="translate(-1.963 -2.937)"/>
                  <path id="Shape-3" data-name="Shape" class="cls-3" d="M35.7,51.212,57.91,67.618c2.534,1.4,4.363.674,4.994-2.353l9.039-42.6c.926-3.71-1.414-5.393-3.838-4.292L15.027,38.844c-3.623,1.453-3.6,3.475-.66,4.375L27.988,47.47,59.521,27.576c1.489-.9,2.855-.417,1.734.578" transform="translate(-12.23 -18.045)"/>
                </g>
              </g>
            </g>
          </svg></a>
        </div>
      </div>
    </section>
  </main>
</template>


<script>

export default {
  computed: {
  },
  name: 'home'
}
</script>


<style lang="scss" scoped>

  @import "../assets/scss/variebles";
  @import "../assets/scss/templates";


  .wrapper {
    @extend %container
  }

  .title-block {
    margin-top: 180px;
    margin-bottom: 180px;
    padding-left: 100px;
    @extend %grid;
  }

  .title {
    display: inline-block;
  }

  .subtitle {
    display: inline-block;
    font-size: $heading;
    line-height: $h1-height;
    color: $grey;
  }

  /***About-me***/
  .about-me {
    @extend %container-fluid;
    @extend %home-section;
    background: $black;
  }

  .about-me-heading, .about-me-text {
    color: $red;
  }

  .about-me-heading {
    @extend %heading;
  }

  .about-me-text {
    font-family: $family-pharagraph;
  }

  /***Social links***/
  .social-heading {
    @extend %heading;
  }

  .social-links {
    @extend %container-fluid;
    @extend %home-section
  }

  .my-social-networks {
    margin-top: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /***For SVG***/
  .cls-1 {
    fill: #ff4e5a;
  }

  .cls-1, .cls-2, .cls-3 {
    fill-rule: evenodd;
  }

  .cls-2 {
    fill: #d13a44;
  }

  .cls-3 {
    fill: #ff4e5a;
  }
  /******/

  .social-networks-links {
    margin-right: 70px;
    width: 60px;
  }

  .social-networks-links:last-child {
    margin-right: 0;
  }

  .my-social-networks svg {
    display: inline-block;
  }

  .my-social-networks .tg  path.cls-1 {
    fill: #E4454F;
  }

  .my-social-networks svg:hover {
    animation: scale .2s ease;
  }

  .my-social-networks svg:hover  path {
    transition: fill .6s ease;
  }

  .my-social-networks .git:hover  path {
    fill: #000;
  }

  .my-social-networks .vk:hover  path {
    fill: #4a76a8;
  }

  .my-social-networks .tg:hover  path.cls-3 {
    fill: #249bd7;
  }

  .my-social-networks .tg:hover  path.cls-1 {
    fill: #2090C8;
  }

  .my-social-networks .tg:hover  path.cls-2 {
    fill: #1F7FAF;
  }


  @media only screen and (max-width: 1140px) {

  }

  @media only screen and (max-width: 768px) {
  }

  /***Animation***/
  @keyframes scale {
    to {
      transform: scale(.9);
    }
    from {
      transform: scale(1.2);
    }
  }

</style>
