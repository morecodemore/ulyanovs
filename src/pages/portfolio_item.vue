<template>
  <main class="portfolio-item">
    <app-logo id="logo" ></app-logo>
    <div class="wrapper">
      <div id="prevLink" class="rout-link prevLink" v-show="!disablePrev">
      <router-link :to="{ name : 'portfolio_item', params : {id : art.id-1, category : art.category, url: art.url}}" ></router-link>
      </div>
      <div id="nextLink" class="rout-link nextLink" v-show="!disableNext">
        <router-link :to="{ name : 'portfolio_item', params : {id : art.id+1, category : art.category, url: art.url}}"></router-link>
      </div>
      <transition-group name="slide" tag="div" class="portfolio-item-block" id="portfolio-item">
        <div class="picture-block-wrapper" :key="art">
          <div id="div">
            <div class="picture-block" v-for="number in [currentNumber]">
              <a>
                <img id="img" class="img-transition" :src="art.image.thumb[Math.abs(currentNumber) % art.image.thumb.length]" :alt=art.title @click="viewModal" >
              </a>
              <div v-show="!controls" class="control">
                <a href="#" class="link photo-prev" @click.prevent="prev"></a>
                <span><span class="number">{{1 + (Math.abs(currentNumber) % art.image.thumb.length)}}</span> из <span class="number">{{art.image.thumb.length}}</span></span>
                <a href="#" class="link photo-next" @click.prevent="next" ></a>
              </div>
              <div id="modal" class="modal" v-show="!closeModalKey">
                <div class="img-wrapper" id="slide"  @mouseover="slide">
                  <div>
                    <img class="modal-img" :src="art.image.thumb[Math.abs(currentNumber) % art.image.thumb.length]" :alt=art.title >
                  </div>
                </div>
                <button id="close" class="close" @click="closeModal"></button>
              </div>
            </div>
          </div>
        </div>
        <div class="text-block" :key="art">
          <p class="picture-title">{{art.title}}</p>
          <div class="tag-block">
            <span class="tag">{{art.tags.join(', ')}}</span>
          </div>
          <p class="description">{{art.description}}</p>
          <span class="year">{{art.year}}</span>
        </div>
      </transition-group>
      <router-link :to="{ name : 'portfolio', params : {category : art.category}}" class="label-back" active-class="active" :text="categories">{{title}}<span class="arrow"></span></router-link>
    </div>
  </main>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Logo from '@/components/logo_else.vue'

  export default {
    components: {
      'app-logo': Logo,
    },
    data: function () {
      return {
        title: 'Back',
        currentNumber: 0,
        timer: null,
        number: 1,
        firstId: null,
        lastId: null,
      }
    },
    mounted () {
      this.getAllArts();
      this.getAllKats();
    },
    computed: {
      ...mapGetters([
        'allArts',
        'allKats'
      ]),
      art () {
        let id = parseInt(this.$route.params.id);
        return this.allArts.find((art) => art.id === id) || {};
      },
      categories () {
        let cats = this.allKats;
        let returnObj = JSON.parse(localStorage.getItem('category'));
        let categories =  cats.filter((cat) =>{
          if(cat.category === returnObj || cat.category === 'works'){
            this.title = cat.name;
            this.art.category = cat.category;
          }
        });
        return categories;
      },
      controls () {
        return this.art.image.thumb.length === 1
      },
      closeModalKey () {
        window.addEventListener("keydown", function (evt) {
          const modal = document.getElementById('modal');
          const body = document.querySelector("body");
          const logo = document.getElementById("logo");
          if (evt.keyCode === 27) {
            if (modal.classList.contains('modal-active')) {
              modal.classList.remove('modal-active');
              body.classList.remove("hidden");
              logo.style.position = 'absolute';
            }
          }
        });
      },
      disablePrev() {
        /*let id = this.$route.params.id;
        let first = this.allArts[0].id;
        let prev = document.getElementById('prevLink');
        let next = document.getElementById('nextLink');
        let last = this.allArts[this.allArts.length - 1].id;
        next.classList.remove('disable');
        if(id === first) {
          prev.classList.add('disable');
        }*/
        return this.art.id === this.firstId
      },
      disableNext() {
        /*let id = this.$route.params.id;
        let first = this.allArts[0].id;
        let prev = document.getElementById('prevLink');
        let next = document.getElementById('nextLink');
        let last = this.allArts[this.allArts.length - 1].id;
        prev.classList.remove('disable');
        if(id === last) {
          next.classList.add('disable');
        }*/
        return this.art.id === this.lastId
      },
    },
    methods: {
      ...mapActions([
        'getAllArts',
        'getAllKats'
      ]),
      /*startRotation: function() {
        this.timer = setInterval(this.next, 6000);
      },
      stopRotation: function() {
        clearTimeout(this.timer);
        this.timer = null;
      },*/
      next: function() {
        this.currentNumber += 1;
      },
      prev: function() {
        this.currentNumber -= 1;
      },
      viewModal () {
        const modal = document.getElementById('modal');
        const body = document.querySelector("body");
        const logo = document.getElementById("logo");
        modal.classList.add('modal-active');
        body.classList.add("hidden");
        logo.style.position = 'fixed';
      },
      closeModal () {
        const modal = document.getElementById('modal');
        const body = document.querySelector("body");
        const logo = document.getElementById("logo");
        modal.classList.remove('modal-active');
        body.classList.remove("hidden");
        logo.style.position = 'absolute';
      },
      slide () {
        const slider= document.getElementById('slide');
        let isDown = false;
        let startY;
        let startX;
        let scrollTop;
        let scrollLeft;

        slider.ondragstart = function() {
          return false;
        };

        slider.addEventListener('mousedown', (e) => {
          isDown = true;
          slider.classList.add('active-slide');
          startY = e.pageY - slider.offsetTop;
          startX = e.pageX - slider.offsetLeft;
          scrollTop = slider.scrollTop;
          scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
          isDown = false;
          slider.classList.remove('active-slide');
        });
        slider.addEventListener('mouseup', ()=>  {
          isDown = false;
          slider.classList.remove('active-slide');
        });
        document.addEventListener('mousemove', (e) => {
          if(!isDown) return;
          e.preventDefault();
          const Y = e.pageY - slider.offsetTop;
          const X = e.pageX - slider.offsetLeft;
          const walkY = (Y- startY) * 2;
          const walkX = (X- startX) * 2;
          slider.scrollTop = scrollTop - walkY;
          slider.scrollLeft = scrollLeft - walkX;
        });
      },
      idFirst () {
        this.firstId = this.allArts[0].id;
      },
      idLast () {
        this.lastId = this.allArts[this.allArts.length - 1].id;
      },
      // back() {
      //   const item = document.getElementById('portfolio-item');
      //   item.addEventListener("keydown", function (evt) {
      //     if (evt.keyCode === 27) {
      //       window.location = "#/portfolio/all_arts"
      //     }
      //   });
      // }
    },
    created() {
      this.idFirst();
      this.idLast();
    },
    name: "portfolio_item"
  }
</script>

<style lang="scss" scoped>

  @import "../assets/scss/variebles";
  @import "../assets/scss/templates";

  /*transition render*/
  .slide-enter-active, .slide-leave-active {
    transition-property: opacity, transform;
    transition-duration: 0s;
  }

  .slide-enter-active {
    transition-delay: 0s;
  }

  .slide-enter-active, .slide-leave-active {
    opacity: 0;
  }

  /*Styles*/
  .portfolio-item {
    @extend %container;
    height: 70vh;
  }

  .rout-link a {
    position: fixed;
    top: calc(50vh - 60px);
    background: $thin_black url("../../static/img/arrow_light.svg") center no-repeat;
    background-size: 20px;
    width: 60px;
    height: 60px;
    transition: width .1s ease-in-out, opacity .2s ease-in-out, background-color .2s ease-in-out;
  }

  .prevLink a {
    left: 0;
    transform: rotate(180deg);
  }

  .nextLink a {
    right: 0;
  }

  .rout-link a:hover {
    width: 70px;
    background-color: rgba(0,0,0,.12);
  }

  .rout-link a:active {
    opacity: .3;
    width: 60px;
  }

  .portfolio-item-block {
    display: flex;
    padding: 7.5vh 0;
    height: inherit;
  }

  /*Photo*/
  .picture-block-wrapper {
    position: relative;
    width: 50vw;
  }

  .picture-block {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55vh;
  }

  .picture-block #img {
    max-width: 100%;
    max-height: 55vh;
    cursor: pointer;
    animation: img-item .7s ease-in-out;
    transition: opacity .2s ease-in-out;
  }

  .picture-block #img:hover {
    opacity: .8;
  }

  /*Text*/
  .text-block {
    margin-left: 7vw;
    width: 23vw;
  }

  .picture-title {
    margin-top: 7vh;
    font-family: $family;
    font-size: $p;
    font-weight: $extra_bold;
    animation: text-block .8s ease-in-out;
  }
  
  .tag-block {
    margin-bottom: 10vh;
    font-family: $family;
    font-size: 18px;
    font-weight: $light;
    font-style: italic;
    color: $grey;
    animation: text-block .9s ease-in-out;
  }

  .description {
    margin-bottom: 5vh;
    max-width: 380px;
    font-family: $family;
    font-size: 18px;
    font-weight: $light;
    line-height: $active-height;
    animation: text-block 1s ease-in-out;
  }
  
  .year {
    font-family: $family;
    font-size: $p;
    font-weight: $thin;
    font-style: italic;
    color: $light_black;
    animation: text-block 1.1s ease-in-out;
  }

  /*Controls*/
  .control {
    display: inline-flex;
    position: absolute;
    bottom: -7vh;
    font-size: 16px;
    line-height: 16px;
    align-items: center;
    font-weight: $light;
    animation: text-block 1.1s ease-in-out;
  }

  .control .link {
    display: inline-block;
    width: 20px;
    height: 20px;
    padding: 20px 30px;
    background: url("../../static/img/arrow_light.svg") center no-repeat;
    background-size: 15px;
    opacity: .3;
    transition: opacity .2s ease-in-out;
  }

  .control .photo-prev {
    transform: rotate(180deg);
  }

  .control .link:hover {
    opacity: 1;
  }

  .number {
    display: inline-block;
    padding: 0 3px;
    font-family: $family;
    font-weight: $bold;
  }

  .label-back {
    position: absolute;
    padding: 20px;
    bottom: 5.5vh;
    right: 10vw;
    display: inline-flex;
    align-items: center;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: $extra_bold;
    font-size: 22px;
    line-height: 22px;
    color: $black;
    transition: opacity .05s ease-in-out, transform .1s ease-in-out, color .2s ease-in-out;
  }

  .label-back:hover {
    color: #4bcaff;
  }

  .label-back:active {
    opacity: .6;
    transform: scale(.95);
    transition: transform .1s ease-in-out;
  }

  .arrow {
    position: relative;
    top: 0;
    right: -8px;
    display: block;
    width: 26px;
    height: 1px;
    background: $black;
    opacity: .6;
    transition: background .1s ease-in-out, opacity .2s ease-in-out;
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
    transform: translate(1px, -3.5px) rotate(45deg);
    transition: width .15s ease-in-out, transform .2s ease-in-out;
  }

  .arrow::after {
    transform: translate(1px, 3.5px) rotate(-45deg);
  }

  .label-back:hover > .arrow {
    background: transparent;
    transform: translateX(10px);
    opacity: 1;
  }

  .label-back:hover > .arrow::before,
  .label-back:hover > .arrow::after {
    width: 60%;
    transform: translate(2px, -5.5px) rotate(45deg);
  }

  .label-back:hover > .arrow::after {
    transform: translate(2px, 5.5px) rotate(-45deg);
  }

  .img-transition-left {
    animation: transition-left .6s ease-in-out;
  }

  /*Modal*/
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    width: 100vw;
    height: 100vh;
    z-index: 300;
    overflow: hidden;
    animation: modal .5s ease-in-out;
  }

  .img-wrapper {
    display: flex;
    width: 102vw;
    height: 102vh;
    overflow: auto;
    background: rgba(0,0,0,.9);
    cursor: grab;
  }

  .modal-img {
    width: auto;
    margin: 0;
    padding: 0;
    max-width: 100%;
    min-width: 100vw;
    height: auto;
  }

  .close {
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 60px;
    background: rgba(255,255,255,.3) url("../../static/img/close.svg") center no-repeat;
    background-size: 25px;
    border: none;
    cursor: pointer;
    outline: none;
    transition: background-color .2s ease-in-out, transform .2s ease-in-out;
  }

  .close:hover {
    background-color: rgba(255,255,255,.6);
  }

  .close:active {
    transform: scale(.9);
  }

  .modal-active {
    display: block;
  }

  .active-slide {
    cursor: grabbing;
  }

  /*.disable {*/
    /*opacity: .3;*/
  /*}*/


  @media only screen and (max-width: 1300px) {

    .rout-link a {
      top: calc(50vh - 50px);
      background-size: 15px;
      width: 50px;
      height: 50px;
    }

    .rout-link a:hover {
      width: 60px;
    }

    .rout-link a:active {
      width: 50px;
    }

    .text-block {
      width: 23vw;
    }

    .picture-title {
      margin-top: 5vh;
      font-size: 20px;
    }

    .tag-block {
      margin-bottom: 6vh;
      font-size: 14px;
      line-height: 18px;
    }

    .description {
      font-size: 16px;
      line-height: 28px;
    }

    .year {
      font-size: 18px;
    }

    .control {
      bottom: -8vh;
      font-size: 14px;
    }

    .control .link {
      padding: 20px 25px;
      background-size: 12px;
    }

    .label-back {
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

    .label-back:hover > .arrow::before,
    .label-back:hover > .arrow::after {
      transform: translate(2px, -4.5px) rotate(45deg);
    }

    .label-back:hover > .arrow::after {
      transform: translate(2px, 4.5px) rotate(-45deg);
    }

    .modal-img {
      width: auto;
      min-height: 100vh;
      max-width: 200vh;
    }

  }

  @media only screen and (max-height: 700px) {

    .rout-link a {
      top: calc(50vh - 50px);
      background-size: 15px;
      width: 50px;
      height: 50px;
    }

    .rout-link a:hover {
      width: 60px;
    }

    .rout-link a:active {
      width: 50px;
    }

    .text-block {
      width: 23vw;
    }

    .picture-title {
      margin-top: 5vh;
      font-size: 20px;
    }

    .tag-block {
      margin-bottom: 6vh;
      font-size: 14px;
      line-height: 18px;
    }

    .description {
      font-size: 16px;
      line-height: 28px;
    }

    .year {
      font-size: 18px;
    }

    .control {
      bottom: -8vh;
      font-size: 14px;
    }

    .control .link {
      padding: 20px 25px;
      background-size: 12px;
    }

    .label-back {
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

    .label-back:hover > .arrow::before,
    .label-back:hover > .arrow::after {
      transform: translate(2px, -4.5px) rotate(45deg);
    }

    .label-back:hover > .arrow::after {
      transform: translate(2px, 4.5px) rotate(-45deg);
    }

    .modal-img {
      width: auto;
      min-height: 100vh;
      max-width: 200vh;
    }

  }

  @media only screen and (max-width: 1040px) {

    .portfolio-item {
      height: auto;
    }

    .rout-link a {
      position: fixed;
      top: calc(100vh - 60px);
      background-size: 20px;
      width: 50%;
      height: 60px;
      z-index: 150;
    }

    .prevLink a {
      border-left: 1px solid $light_white;
    }

    .nextLink a {
      border-right: 1px solid $light_white;
    }

    .rout-link a:hover {
      width: 50%;
    }

    .rout-link a:active {
      opacity: .3;
      width: 50%;
    }

    .portfolio-item-block {
      flex-direction: column;
      align-items: center;
      padding: 80px 0 150px;
    }

    .picture-block-wrapper {
      width: inherit;
    }

    .picture-block {
      height: 450px;
    }

    .picture-block #img {
      max-height: 450px;
    }

    .text-block {
      margin-left: 0;
      margin-top: 50px;
      width: 70%;
    }

    .picture-title {
      font-size: $p;
      line-height: 35px;
    }

    .tag-block {
      margin-bottom: 50px;
      font-size: 16px;
    }

    .description {
      margin-bottom: 30px;
      max-width: 100%;
      font-size: $p;
      line-height: 38px;
    }

    .year {
      font-size: 18px;
    }

    .control {
      bottom: -60px;
      font-size: 16px;
      line-height: 16px;
    }

    .label-back {
      bottom: 85px;
      right: 10vw;
    }

    .label-back:hover > .arrow {
      transform: translateX(8px);
    }

  }

  @media only screen and (max-width: 585px) {

    .rout-link a {
      top: calc(100vh - 40px);
      background-size: 15px;
      height: 40px;
    }

    .portfolio-item-block {
      flex-direction: column;
      align-items: center;
      padding: 50px 0 100px;
    }

    .picture-block-wrapper {
      width: inherit;
    }

    .picture-block {
      height: auto;
    }

    .picture-block #img {
      max-height: 450px;
    }

    .text-block {
      margin-top: 50px;
      width: 100%;
    }

    .picture-title {
      font-size: 18px;
      line-height: 30px;
    }

    .tag-block {
      margin-bottom: 40px;
      font-size: $p-m;
    }

    .description {
      margin-bottom: 20px;
      font-size: $p-m;
      line-height: $p-height-m;
    }

    .year {
      font-size: $p-m;
    }

    .control {
      bottom: -55px;
      font-size: 16px;
      line-height: 16px;
    }

    .label-back {
      font-size: $p-m;
      bottom: 55px;
      right: 7.5vw;
    }

    .arrow {
      right: -5px;
      width: 14px;
    }

    .arrow::before,
    .arrow::after {
      transform: translate(1px, -2.2px) rotate(45deg);
    }

    .arrow::after {
      transform: translate(1px, 2.2px) rotate(-45deg);
    }

    .label-back:hover > .arrow {
      transform: translateX(5px);
    }

    .label-back:hover > .arrow::before,
    .label-back:hover > .arrow::after {
      width: 60%;
      transform: translate(2px, -2.6px) rotate(45deg);
    }

    .label-back:hover > .arrow::after {
      transform: translate(2px, 2.6px) rotate(-45deg);
    }

  }


  /***Animation***/

  @keyframes transition-left {
    0% {
      opacity: .6;
      transform: translateX(-10px);
    }
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }

  .img-transition-right {
    animation: transition-right .6s ease-in-out;
  }

  @keyframes transition-right {
    0% {
      opacity: .6;
      transform: translateX(10px);
    }
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }

  @keyframes modal {
    0% {
      opacity: 0;
      transform: scale(.3);
    }
    20% {
      transform: scale(.3);
    }
    55% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @keyframes img-item {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .fixed {
    position: fixed;
  }

</style>