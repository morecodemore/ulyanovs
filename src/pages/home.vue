<template>
  <main class="home">
    <section class="title-block container">
      <h1 class="title" v-lang.home.title></h1>
      <h2 class="subtitle" v-lang.home.subtitle></h2>
    </section>
    <section class="about-me">
      <div  class="me-foto">
        <img src="static/img/me.jpg" alt="Ulyanov's BOSS">
      </div>
      <div class="text-wrapper">
        <h3 class="about-me-heading" v-lang.home.aboutMeHeading></h3>
        <p class="about-me-text" v-lang.home.aboutMeText></p>
      </div>
    </section>
    <section class="i-can">
      <h3 class="i-can-heading" v-lang.home.iCanHeading></h3>
      <div class="i-can-section container">
        <div class="i-can-section-part picture">
          <img src="static/img/svg/prototyping.svg" class="prototyping" alt="Prototyping">
        </div>
        <div class="i-can-section-part text">
          <p v-lang.home.prototypingText></p>
          <div class="link-wrapper"><a href="#portfolio" class="portfolio-link" v-lang.home.portfolioLinkText></a><span class="link-arrow"></span></div>
          <div class="use-block">
            <p class="use-title" v-lang.home.useTitle></p>
            <div class="use-logo-block">
              <img src="static/img/png/xd.png" alt="Adobe XD" class="use-logo">
              <img src="static/img/png/figma.png" alt="Figma" class="use-logo">
              <img src="static/img/png/sketch.png" alt="Sketch"class="use-logo">
              <img src="static/img/png/invision.png" alt="InVision" class="use-logo">
              <img src="static/img/png/xmind.jpg" alt="Xmind" class="use-logo">
            </div>
          </div>
        </div>
      </div>
      <div class="i-can-section container">
        <div class="i-can-section-part picture">
          <img src="static/img/svg/design.svg" class="design" alt="Design">
        </div>
        <div class="i-can-section-part text">
          <p v-lang.home.designText></p>
          <div class="link-wrapper"><a href="#portfolio" class="portfolio-link" v-lang.home.portfolioLinkText></a><span class="link-arrow"></span></div>
          <div class="use-block">
            <p class="use-title" v-lang.home.useTitle></p>
            <div class="use-logo-block">
              <img src="static/img/png/xd.png" alt="Adobe XD" class="use-logo">
              <img src="static/img/png/figma.png" alt="Figma" class="use-logo">
              <img src="static/img/png/sketch.png" alt="Sketch"class="use-logo">
              <img src="static/img/png/ps.png" alt="Adobe Photoshop" class="use-logo">
              <img src="static/img/png/ai.png" alt="Adobe Illustrator" class="use-logo">
              <img src="static/img/png/invision.png" alt="InVision" class="use-logo">
            </div>
          </div>
        </div>
      </div>
      <div class="i-can-section container">
        <div class="i-can-section-part picture">
          <img src="static/img/svg/imposition.svg" class="imposition" alt="Imposition">
        </div>
        <div class="i-can-section-part text">
          <p v-lang.home.impositionText></p>
          <div class="link-wrapper"><a href="#portfolio" class="portfolio-link" v-lang.home.portfolioLinkText></a><span class="link-arrow"></span></div>
          <div class="use-block">
            <p class="use-title" v-lang.home.useTitle></p>
            <div class="use-logo-block">
              <img src="static/img/png/html.png" alt="HTML5" class="use-logo">
              <img src="static/img/png/css3.png" alt="CSS3" class="use-logo">
              <img src="static/img/png/gulp.png" alt="Gulp" class="use-logo">
              <img src="static/img/png/sass.png" alt="Sass"class="use-logo">
              <img src="static/img/png/less.png" alt="Less" class="use-logo">
              <img src="static/img/png/sublime3.png" alt="Sublime 3" class="use-logo">
            </div>
          </div>
        </div>
      </div>
      <div class="i-can-section container">
        <div class="i-can-section-part picture">
          <img src="static/img/svg/frontend.svg" class="frontend" alt="Frontend">
        </div>
        <div class="i-can-section-part text">
          <p v-lang.home.frontendText></p>
          <div class="link-wrapper"><a href="#portfolio" class="portfolio-link" v-lang.home.portfolioLinkText></a><span class="link-arrow"></span></div>
          <div class="use-block">
            <p class="use-title" v-lang.home.useTitle></p>
            <div class="use-logo-block">
              <img src="static/img/png/js.png" alt="JavaScript" class="use-logo">
              <img src="static/img/png/vue.png" alt="Vue.js" class="use-logo">
              <img src="static/img/png/node.png" alt="Node.js" class="use-logo">
              <img src="static/img/png/webpack.png" alt="Webpack"class="use-logo">
              <img src="static/img/png/git.png" alt="Git" class="use-logo">
              <img src="static/img/png/phpstorm.png" alt="PhpStorm" class="use-logo">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="info-block">
      <h3 class="info-heading" v-lang.home.infoHeading></h3>
      <p class="info-text" v-lang.home.infoTextTitle></p>
      <p class="info-text"><span v-lang.home.infoTextPharagraph1></span><a href="#portfolio" class="info-link" v-lang.home.infoTextPharagraphLink1></a><span v-lang.home.infoTextPharagraph2></span><a class="info-link" id="modal-button" @click="viewModal" v-lang.home.infoTextPharagraphLink2></a><span v-lang.home.infoTextPharagraph3></span></p>
      <transition name="modal">
        <div class="modal-info-block" id="modal-info" v-show="!show">
          <button class="close-modal-info" id="modal-close" @click="closeModal" v-lang.home.closeText></button>
          <div>
            <h3 class="modal-info-heading" v-lang.info.title></h3>
            <div class="modal-info-section">
              <div class="modal-info-foto-block projecting-foto"><p v-lang.info.projecting></p></div>
              <p class="modal-info-text container" v-lang.info.text></p>
            </div>
            <div class="modal-info-section">
              <div class="modal-info-foto-block design-foto"><p v-lang.info.design></p></div>
              <p class="modal-info-text container" v-lang.info.text></p>
            </div>
            <div class="modal-info-section">
              <div class="modal-info-foto-block page_making-foto"><p v-lang.info.page_making></p></div>
              <p class="modal-info-text container" v-lang.info.text></p>
            </div>
            <div class="modal-info-section">
              <div class="modal-info-foto-block frontend-foto"><p v-lang.info.frontend></p></div>
              <p class="modal-info-text container" v-lang.info.text></p>
            </div>
          </div>
        </div>
      </transition>
    </section>
    <section class="portfolio-block">
      <a name="portfolio"></a>
      <h3 class="portfolio-heading" v-lang.home.portfolioHeading></h3>
      <div class="portfolio-items-block container">
        <article class="portfolio-item" v-for="work in allWorks" :key="work.id">
          <div class="item">
            <div class="item-preview">
              <img :src=work.image.thumb[0] :alt=work.title>
              <div class="item-info">
                <div class="tag-block">
                  <span class="tag">{{work.tags.join(', ')}}</span>
                </div>
                <p class="item-text">{{work.description[0]}}</p>
                <div class="link-wrapper info-link-wrapper">
                  <router-link :to="{ name : 'home', params : {id : work.id}}"><span v-lang.home.portfolioLink @click="viewModalItem"></span></router-link><span class="link-arrow info-link-arrow"></span>
                </div>
              </div>

                <transition-group name="modal" tag="div">
                  <div class="modal-info-block" id="item-modal" v-if="!modal" :key="workD.id">
                    <div id="prevLink" class="rout-link prevLink" v-show="!disablePrev">
                      <router-link :to="{ name : 'home', params : {id : workD.id-1}}" >Prev</router-link>
                    </div>
                    <div id="nextLink" class="rout-link nextLink" v-show="!disableNext">
                      <router-link :to="{ name : 'home', params : {id : workD.id+1}}">Next</router-link>
                    </div>
                    <button class="close-modal-info" @click="closeModalItem" v-lang.home.closeText></button>
                    <h3 class="modal-info-heading container">{{workD.title}}</h3>
                    <p class="modal-info-text container">{{workD.description[1]}}</p>
                    <div class="modal-img-big">
                      <img :src=workD.image.thumb[1] :alt=workD.title>
                    </div>
                    <div class="modal-info-text container">
                    <p class="link-heading" v-lang.home.linkHeading></p>
                      <div class="modal-info-text link-wrapper-modal">
                        <p><span>{{workD.linkHeading[0]}}</span><a class="modal-link" :href=workD.link[0] target="_blank">{{workD.link[0]}}</a></p>
                        <p><span>{{workD.linkHeading[1]}}</span><a class="modal-link" :href=workD.link[1] target="_blank">{{workD.link[1]}}</a></p>
                        <p><span>{{workD.linkHeading[2]}}</span><a class="modal-link" :href=workD.link[2] target="_blank">{{workD.link[2]}}</a></p>
                        <p><span>{{workD.linkHeading[3]}}</span><a class="modal-link" :href=workD.link[3] target="_blank">{{workD.link[3]}}</a></p>
                      </div>
                    </div>
                  </div>
                </transition-group>

            </div>
          </div>
        </article>
      </div>
    </section>
    <section class="letter-block">
      <h3 class="letter-heading" v-lang.home.letterHeading></h3>
      <p class="letter-text" v-lang.home.letterText></p>
      <div class="letter-link-wrapper container">
        <a href="mailto:ulyanovs.studio@gmail.com?subject=Вопрос c ULYANOV'S" class="letter-link">ulyanovs.studio@gmail.com</a>
      </div>
    </section>
    <section class="social-links">
      <div class="container">
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
  import { mapGetters, mapActions } from 'vuex'
export default {
  data: function  () {
    return {
      show: true,
      modal: true
    }
  },
  mounted () {
    this.getAllWorks();
    //this.getAllKats();
  },

  computed: {
    ...mapGetters([
      'allWorks',
      //'allKats',
    ]),
    workD () {
      let id = parseInt(this.$route.params.id);
      return this.allWorks.find((workD) => workD.id === id) || {};
    },
    links () {
      return this.workD.link.length === 1
    },
    disablePrev() {
      const firstId = this.allWorks[0].id;
      return this.workD.id === firstId
    },
    disableNext() {
      const lastId = this.allWorks[this.allWorks.length - 1].id;
      return this.workD.id === lastId
    },

  },
  methods: {
    ...mapActions([
      'getAllWorks',
      //'getAllKats',
    ]),
    viewModal() {
      const body = document.querySelector('body');
      this.show = !this.show;
      body.classList.add('hidden')
    },
    closeModal() {
      const body = document.querySelector('body');
      this.show = !this.show;
      body.classList.remove('hidden');
    },
    viewModalItem() {
      const body = document.querySelector('body');
      this.modal = !this.modal;
      body.classList.add('hidden')
    },
    closeModalItem() {
      const body = document.querySelector('body');
      this.modal = !this.modal;
      body.classList.remove('hidden');
    },


  },
  created() {
  },
  name: 'home'
}
</script>


<style lang="scss" scoped>

  @import "../assets/scss/variebles";
  @import "../assets/scss/templates";


  .container {
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
    display: flex;
    @extend %container-fluid;
    @extend %home-section;
    padding: 0;
    background: $black;
    border: none;
  }

  .me-foto {
    position: relative;
    width: 40vw;
    min-width: 520px;
    height: 775px;
    text-align: center;
    overflow: hidden;
  }

  .me-foto img {
    margin-left: -10vw;
    width: auto;
    height: 775px;
  }

  .text-wrapper {
    @extend %grid;
    justify-content: center;
    width: 60vw;
    max-width: 810px;
  }

  .about-me-heading {
    color: $red;
  }

  .about-me-text {
    color: rgba(255, 78, 90, .8);
  }

  .about-me-heading {
    padding-left: 100px;
    @extend %heading;
    margin-bottom: 100px;
    text-align: left;
  }

  .about-me-text {
    padding: 0 100px;
    font-family: $family-pharagraph;
    font-weight: $light;
  }

  /***I can***/
  .i-can {
    @extend %home-section;
    border: none;
    padding-bottom: 0;
  }

  .i-can-heading {
    font-size: $heading;
    font-family: $family;
    text-align: center;
  }

  .i-can-section {
    position: relative;
    display: flex;
    @extend %home-section;
    border: none;
  }

  .i-can-section:nth-child(2n + 1) {
    flex-direction: row-reverse;
  }

  .i-can-section:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: calc(50% - 50px);
    display: block;
    width: 100px;
    height: 10px;
    background: $black;
  }

  .i-can-section-part {
    width: 50%;
  }

  .picture {
    text-align: center;
  }

  .text, use-title {
    font-family: $family-pharagraph;
    font-weight: $normal;
    color: $light_black;
  }

  .text {
    @extend %grid;
    max-width: 490px;
  }

  .i-can-section-part img {
    max-width: 435px;
  }

  .link-wrapper {
    margin-top: 35px;
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
  }

  .portfolio-link {
    align-self: flex-end;
    font-family: $family;
    font-weight: $extra_bold;
    font-size: $active;
    line-height: 24px;
    text-transform: uppercase;
    color: $black;
    text-decoration: none;
    transition: color .3s ease-in-out;
  }

  .portfolio-link:hover {
    color: $red;
  }

  .portfolio-link:hover + .link-arrow {
    animation: go .6s ease-in-out;
  }

  @keyframes go {
   0% {
     transform: translateY(0);
   }
    25% {
      transform: translateY(2px);
    }
    50% {
      transform: translateY(0);
    }
    75% {
      transform: translateY(2px);
    }
    100% {
      transform: translateY(0);
    }
  }

  .link-arrow {
    margin-left: 8px;
    width: 18px;
    height: 18px;
    background: url('../../static/img/svg/arrow.svg') center no-repeat;
    font-size: 100%;
  }

  .use-title {
    margin-top: 65px;
  }

  .use-logo-block {
    margin-top: 15px;
  }

  .use-logo {
    height: 40px;
    width: auto;
  }

  .use-logo:not(last-child) {
    margin-right: 15px;
  }

  /***Info block***/
  .info-block {
    @extend %home-section
  }

  .info-heading {
    @extend %heading
  }

  .info-text {
    margin: 70px auto 0;
    max-width: 900px;
    font-family: $family-pharagraph;
    font-weight: $normal;
  }

  .modal-info-block {
    padding: 150px 0;
    display: block;
    top:0;
    left: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: $white;
    z-index: 100;
    overflow-y: auto;
    border: 10px solid $thin_black;
  }

  .modal-info-heading {
    @extend %heading;
  }

  .modal-info-text {
    margin-top: 70px;
    font-family: $family-pharagraph;
    font-weight: $normal;
    font-size: $p;
  }

  .modal-info-foto-block {
    margin-top: 70px;
    position: relative;
    display: flex;
    @extend %flex-center;
    height: 200px;
    border-top: 10px solid $thin_black;
    border-bottom: 10px solid $thin_black;
  }

  .modal-info-foto-block p {
    z-index: 20;
    text-transform: uppercase;
    font-size: $h1;
    color: $red;
  }

  .close-modal-info {
    position: fixed;
    padding: 30px;
    top: 20px;
    right: 40px;
    font-family: $family;
    font-size: $active;
    font-weight: $extra_bold;
    text-transform: uppercase;
    color: $thin_black;
    border: none;
    background: none;
    outline: none;
    z-index: 105;
    transition: color .2s ease-in-out;
    cursor: pointer;
  }

  .modal-img-big img {
    width: auto;
    min-width: inherit;
    max-width: 100% !important;
  }

  .modal-img-big {
    margin-top: 70px;
    min-height: 50vh;
    display: flex;
    align-items: center;
    border-top: 1px solid $thin_black;
    border-bottom: 1px solid $thin_black;
  }

  .link-heading {
    font-family: $family;
    text-transform: uppercase;
  }

  .link-wrapper-modal {
    display: block;
  }

  .link-wrapper-modal p:not(:first-child) {
    margin-top: 30px;
  }

  .close-modal-info:hover, .close-modal-info:focus {
    color: $red;
  }

  .modal-link {
    position: relative;
  }

  .modal-link::after,
  .rout-link a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #000000;
    z-index: -1;
    -webkit-transition: height .3s ease-in-out;
    transition: height .3s ease-in-out, transform .3s ease-in-out;
  }

  .modal-link:hover::after,
  .rout-link a:hover::after {
    height: calc(100% + 8px);
  }

  .rout-link {
    position: fixed;
    bottom: 10px;
    padding: 30px;
  }

  .rout-link a {
    color: $light_black;
    transition: color .3s ease-in-out;
  }

  .rout-link a:active::after {
    transform: scale(.9);
  }

  .rout-link a:hover {
    color: $red;
  }

  .nextLink {
    right: 10px;
  }

  /***Portfolio block***/
  .portfolio-block {
    @extend %home-section
  }

  .portfolio-heading {
    @extend  %heading
  }

  .portfolio-items-block {
    display: flex;
    flex-wrap: wrap;
  }

  .portfolio-item {
    margin-top: 100px;
    display: flex;
    @extend %flex-center;
    width: 50%;
  }

  .item-preview {
    display: flex;
    @extend %flex-center;
    width: 440px;
    height: 440px;
    position: relative;
    border: 1px solid $black;
  }

  .item-preview img {
    max-width: 350px;
  }

  .item-info {
    left: 0;
    top: 0;
    padding: 20px;
    display: none;
    @extend %grid;
    justify-content: space-between;
    position: absolute;
    width: 438px;
    height: 438px;
    background: rgba(255,78,90,.9);
    animation: viewInfo .3s ease-in-out;
    z-index: 50;
  }

  @keyframes viewInfo {
    0% {
      opacity: .3;
      transform: scale(.98);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .item-preview:hover .item-info {
    display: flex;
  }

  .item-info:hover {
    display: flex;
  }

  .tag-block {
    display: flex;
    justify-content: flex-end;
  }

  .tag {
    padding: 12px;
    display: inline-block;
    font-family: $family-pharagraph;
    font-size: $tag;
    line-height: $tag;
    background: $white;
    color: $red;
  }

  .item-text {
    padding: 25px 15px;
    font-family: $family-pharagraph;
    font-size: $mask-text;
    line-height: $mask-height;
    color: $white;
    border-left: 5px solid $white;
    background: rgba(255,255,255,.1);
  }

  .info-link-wrapper {
    margin-top: 0;
  }

  .info-link-wrapper > a {
    font-size: $mask-text;
    color: $white;
    transition: opacity .3s ease-in-out;
  }

  .info-link-wrapper .info-link-arrow {
    margin-left: 5px;
    width: 15px;
    height: 15px;
    background: url('../../static/img/svg/arrow_white.svg');
  }

  .info-link-wrapper > a:hover {
    opacity: .7;
  }

  .info-link-wrapper > a:hover + .info-link-arrow {
    animation: more .2s ease-in-out;
    animation-fill-mode: forwards;
  }

  @keyframes more {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(180deg);
    }
  }

  /***Letter block***/
  .letter-block {
    @extend %home-section
  }
  
  .letter-text {
    margin: 70px 0;
    font-family: $family-pharagraph;
    text-align: center;
  }

  .letter-heading {
    @extend %heading
  }

  .letter-link-wrapper {
    display: flex;
    justify-content: center;
  }

  .letter-link {
    position: relative;
    font-family: $family;
    font-weight: $extra_bold;
    font-size: $h1;
    text-decoration: none;
    text-align: center;
    color: $black;
    z-index: 10;
    transition: color .5s ease-in-out;
  }

  .letter-link::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    height: 1px;
    background: $black;
    z-index: -1;
    transition: height .3s ease-in-out;
  }

  .letter-link:hover {
    color: $red;
  }

  .letter-link:hover::after {
    height: calc(100% + 20px);
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

  .modal-enter-active {
    animation: modal .4s ease-in-out;
  }
  .modal-leave-active {
    animation: modal .4s ease-in-out reverse;
  }
  @keyframes modal {
    0% {
      opacity: 0;

    }
    100% {
      opacity: 1;

    }
  }

</style>
