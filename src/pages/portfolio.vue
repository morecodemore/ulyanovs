<template>
  <main class="portfolio">
    <app-logo></app-logo>
    <div class="head-title">
      <span :text="categories">{{title}}</span>
      <h1 v-lang.portfolio.title></h1>
    </div>
    <div class="gallery-controls">
      <button id="prev" class="controls prev" @click="prevButton"></button>
      <button id="next" class="controls next" @click="nextButton"></button>
    </div>
    <div class="gallery-wrapper" @mouseup="filterNone">
      <transition-group name="view" tag="div" id="gallery" class="gallery">
          <div class="picture-item" v-for="art in elements" :key="art.id">
              <img class="art-item" :src=art.image.thumb[0]><br>
              <router-link :to="{ name : 'portfolio_item', params : {id : art.id, category : art.category, url: art.url}}" id="link-title">
                <p class="picture-title" @click="localStorage"><span>{{art.title}}</span></p>
              </router-link>
              <div class="tag-block">
                <span class="tag">{{art.tags.join(', ')}}</span>
              </div>
          </div>
      </transition-group>
    </div>
    <div class="filter-wrapper">
      <div class="filter-label-wrapper">
        <button class="filter-label" id="filter-label" v-lang.portfolio.filters @click="filterShow"></button>
        <span id="close-span" class="close" @click="filterShow"></span>
      </div>
      <div class="filter filter-none" id="filter">
        <ul class="filter-list">
          <li class="filter-item" v-for="cat in allKats" @mouseup="filterNone">
            <router-link :to="{ name : 'portfolio', params : {category : cat.category, }}" active-class="active-link">
              <span>{{cat.name}}</span>
            </router-link>
          </li>
        </ul>
        <button class="filter-close-button" v-lang.portfolio.button @mouseup="filterNone"></button>
      </div>
    </div>
  </main>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import Logo from '@/components/logo_else.vue'
export default {
  components: {
    'app-logo': Logo,
  },
  data: function () {
    return {
      title: '',
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
      'allKats',
    ]),
    elements () {
      let arts = this.allArts;
      if(!this.$route.params.category) return arts;
      let elements =  arts.filter((art) =>{
       if(this.$route.params.category === art.category|| this.$route.params.category === 'works'){
         return art;
       }
      });
      return elements;
    },
    categories () {
      let cats = this.allKats;
      let categories =  cats.filter((cat) =>{
        if(cat.category === this.$route.params.category){
          this.title = cat.name;
        }
      });
      return categories;
    },
  },
  methods: {
    ...mapActions([
      'getAllArts',
      'getAllKats',
    ]),
    // slides () {
    //   const slider = document.querySelector('.gallery');
    //   let isDown = false;
    //   let startX;
    //   let scrollLeft;
    //
    //   slider.ondragstart = function() {
    //     return false;
    //   };
    //   slider.addEventListener('mousedown', (e) => {
    //     isDown = true;
    //     slider.classList.add('active');
    //     startX = e.pageX - slider.offsetLeft;
    //     scrollLeft = slider.scrollLeft;
    //   });
    //   slider.addEventListener('mouseleave', () => {
    //     isDown = false;
    //     slider.classList.remove('active');
    //   });
    //   slider.addEventListener('mouseup', ()=>  {
    //     isDown = false;
    //     slider.classList.remove('active');
    //   });
    //   document.addEventListener('mousemove', (e) => {
    //     if(!isDown) return;
    //     e.preventDefault();
    //     const x = e.pageX - slider.offsetLeft;
    //     const walk = (x - startX) * 2;
    //     slider.scrollLeft = scrollLeft - walk;
    //   });
    // },
    prevButton() {
      const slider = document.querySelector('.gallery');
      slider.scrollLeft = slider.scrollLeft - 500;
    },
    nextButton() {
      const slider = document.querySelector('.gallery');
      slider.scrollLeft = slider.scrollLeft + 500;
    },
    filterShow() {
      const filter = document.getElementById("filter");
      const body = document.querySelector("body");

      function bodyHidden() {
        body.classList.add("hidden");
      }

      if (filter.classList.contains("filter-none")) {
        filter.classList.remove("filter-none");
        setTimeout(bodyHidden, 100);
      } else {
        body.classList.remove("hidden");
        filter.classList.add("filter-none");
      }
    },
    filterNone() {
      const filter = document.getElementById('filter');
      const body = document.querySelector("body");
      body.classList.remove("hidden");
      filter.classList.add("filter-none");
    },
    localStorage() {
      let category = this.$route.params.category;
      let serialObj = JSON.stringify(category);
      if (category === undefined || category === null) {
        serialObj = 'works';
      }
      localStorage.setItem('category', serialObj);
    },
    idFirst() {
      this.firstId = this.allArts[0].id;
    },
    idLast() {
      this.lastId = this.allArts[this.allArts.length - 1].id;
    },
  },
  created() {
    this.idFirst();
    this.idLast();
  },
  name: 'portfolio'
}
</script>

<style lang="scss" scoped>

  @import "../assets/scss/variebles";
  @import "../assets/scss/templates";


  .portfolio {
    @extend %grid;
    align-items: flex-end;
    justify-content: center;
    height: 70vh;
  }

  .head-title {
    margin-top: 2vh;
    margin-right: 25vw;
    margin-bottom: 4vh;
  }

  .head-title h1 {
    line-height: 45px;
    @extend %h1-animation
  }

  .head-title span {
    display: inline-block;
    padding-left: 3px;
    font-family: $family;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: $extra_bold;
    color: rgba(0,0,0,.3);
    animation: title 1.06s ease-in-out;
  }

  /***Filter label***/
  .filter-label-wrapper {
    position: absolute;
    display: inline-flex;
    align-items: center;
    bottom: 5.5vh;
    right: 10vw;
    height: 65px;
    transition: opacity .25s ease-in-out;
  }

  .filter-label {
    padding: 20px;
    text-transform: uppercase;
    font-family: $family;
    font-weight: $extra_bold;
    font-size: $active;
    vertical-align: bottom;
    line-height: 22px;
    color: $black;
    background: transparent;
    border: none;
    outline: none;
    transition: color .2s ease-in-out;
    cursor: pointer;
  }

  .filter-label + #close-span {
    position: relative;
    display: inline-block;
    right: 15px;
    width: 15px;
    height: 15px;
    background: url("../../static/img/plus.svg") center no-repeat;
    background-size: 14px;
    transition: opacity .25s ease-in-out;
    cursor: pointer;
  }

  .filter-label-wrapper:hover .filter-label {
    color: $blue;
  }

  .filter-label:hover + #close-span,
  #close-span:hover {
    opacity: .3;
  }

  /***Filter block***/
  .filter {
    position: absolute;
    top: 0;
    right: 0;
    padding: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20vw;
    min-width: 320px;
    height: 100vh;
    background: #fff;
    box-shadow: 0 0 5px 0 rgba(0,0,0,.1);
    animation: viewFilter .4s ease-in-out;
    animation-fill-mode: forwards;
    transform: translateX(20vw);
    z-index: 270;
  }

  .filter-list {
    list-style: none;
  }

  .filter-item {
    text-align: left;
  }

  .filter-item a{
    display: inline-block;
    padding: 10px;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: $extra_bold;
    font-size: $active;
    color: $black;
    border: none;
    background: none;
    transition: transform .2s ease-in-out, color .2s ease-in-out, opacity .1s ease-in-out;
    animation: filterLinkView .8s ease-in-out;
  }

  .filter-close-button {
    position: absolute;
    left: calc(50% - 45.5px);
    bottom: 30px;
    padding: 10px;
    padding-top: 20px;
    text-transform: uppercase;
    font-family: $family;
    font-weight: $extra_bold;
    font-size: 14px;
    text-align: left;
    color: rgba(0,0,0,.3);
    border: none;
    background: none;
    cursor: pointer;
    outline: none;
    transition: color .2s ease-in-out;
  }

  .filter-close-button:hover {
    color: $blue;
  }

  .filter-item a:hover {
    @extend %transition-link;
  }

  .filter-item a:active {
    opacity: .6;
    transform: scale(.99);
    transition: transform .1s ease-in-out;
    outline: none;
  }

  .filter-item button:focus {
    outline: none;
  }

  .filter-none {
    display: none;
  }

  /***Gallery block***/
  .gallery-wrapper {
    position: relative;
    width: 100vw;
    height: 70vh;
    overflow: hidden;
  }

  .gallery-wrapper::before,
  .gallery-wrapper::after {
    position: absolute;
    content: "";
    height: 100%;
    width: 15vw;
    top: 0;
    background: linear-gradient(90deg, #fff 0%, rgba(255,255,255,0) 100%);
    z-index: 10;
  }

  .gallery-wrapper::before {
    left: 0;
  }

  .gallery-wrapper::after {
    right: 0;
    transform: rotate(180deg);
  }

  .gallery {
    position: relative;
    display: block;
    padding: 0 15vw;
    padding-right: 15vw;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    user-select: none;
    transition: all 0.3s ease-in-out;
    will-change: transform;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
  }

  .gallery::-webkit-scrollbar {
    display: none;
  }

  .picture-item {
    position: relative;
    display: inline-block;
    height: 32vh;
    width: auto;
    min-width: 100px;
    margin: 7vh 2.2vw 50vh;
    background: $white;
    background: linear-gradient(180deg, #eeeeee, $white);
    z-index: 10;
  }

  .picture-item .art-item {
    height: inherit;
    width: auto;
    max-width: 100%;
  }

  .picture-title {
    display: inline-block;
    position: absolute;
    top: 0;
    margin: 0;
    padding-top: calc(32vh + 2vh);
    width: 100%;
    font-family: $family;
    font-size: 16px;
    line-height: 20px;
    font-weight: $extra_bold;
    color: $black;
    vertical-align: top;
    text-align: left;
    white-space: pre-wrap;
    transition: color .2s ease-in-out, background-color .2s ease-in-out;
  }

  .picture-title:hover {
    background-color: rgba(255,255,255,.3);
  }

  .tag-block {
    position: absolute;
    top: 0;
    margin: 0;
    padding-top: calc(32vh + 70px);
    z-index: -1;
    line-height: $tag-height;
  }

  .tag-block .tag {
    font-family: $family;
    font-size: $tag;
    font-style: italic;
    color: $grey;
    white-space: pre-wrap;
  }

  .picture-title:hover {
    color: $blue;
  }

  .active-link {
    color: $blue !important;
  }

  .active-link:hover {
    color: $blue !important;
  }

  .filter-item:nth-child(1) a {
    color: $black !important;
  }

  .filter-item:nth-child(1) a:hover {
    color: $blue !important;
  }

  /***Controls***/
  .gallery-controls {
    display: inline-block;
    position: absolute;
    left: calc(50% - 63px);
    bottom: 6vh;
    z-index: 150;
  }
  .controls {
    display: inline-block;
    padding: 30px;
    background: url("../../static/img/arrow_next.svg") center no-repeat;
    background-size: 30px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: opacity .2s ease-in-out ,transform .2s ease-in-out, background-color .2s ease-in-out;
  }

  .controls:hover {
    background-color: $thin_black;
  }

  .controls:active {
    transform: scale(.9);
  }

  .prev {
    background: url("../../static/img/arrow_prew.svg") center no-repeat;
  }


  @media only screen and (max-width: 1140px) {
    .portfolio {
      height: auto;
      padding: 1vw;
      margin: 5vh 0;
      margin-bottom: 0;
      width: 100%;
    }

    .head-title {
      display: inline-flex;
      flex-direction: column;
      align-self: center;
      margin-top: 0;
      margin-right: 0;
      margin-bottom: 70px;
    }

    .head-title h1 {
      font-size: 30px;
      line-height: 35px;
    }

    .head-title span {
      padding-left: 1px;
      font-size: 10px;
      line-height: 10px;
    }

    /***Filter label***/
    .filter-label-wrapper {
      position: fixed;
      display: inline-flex;
      align-items: center;
      bottom: 5vh;
      right: calc(100% - 100px);
      height: 65px;
      transform: rotate(270deg);
      opacity: .3;
    }

    .filter-label-wrapper:hover {
      opacity: 1;
    }

    .filter-label {
      font-size: 16px;
      line-height: 22px;
      color: $black;
      background: transparent;
      border: none;
      outline: none;
    }

    .filter-label + #close-span {
      position: absolute;
      right: 0;
      width: 15px;
      height: 15px;
      background-size: 12px;
    }

    /***Filter block***/
    .filter {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      animation: viewFilterTable .3s ease-in-out;
      animation-fill-mode: forwards;
      transform: translateX(-100vw);
    }

    .filter-item a{
      display: inline-block;
      padding: 10px;
      text-transform: uppercase;
      text-decoration: none;
      font-weight: $extra_bold;
      font-size: $active;
      color: $black;
      border: none;
      background: none;
      transition: transform .2s ease-in-out, color .2s ease-in-out, opacity .1s ease-in-out;
    }

    .filter-none {
      display: none;
    }

    /***Gallery block***/
    .gallery-wrapper {
      width: inherit;
      height: auto;
      overflow: auto;
    }

    .gallery-wrapper::before,
    .gallery-wrapper::after {
      display: none;
    }

    .gallery {
      height: auto;
      max-width: 75vw;
      margin: 0 auto;
      padding: 0!important;
      overflow: hidden;
      column-width: 33vw;
    }

    .picture-item {
      display: block;
      margin: 0 3vw;
      margin-bottom: 130px;
      height: auto;
      max-width: 30vw;
      min-height: 150px;
    }

    .picture-item:last-child {
      margin-right: 0;
    }

    .picture-item .art-item {
      height: auto;
      width: 100%;
    }

    .picture-title {
      display: inline-flex;
      align-items: flex-end;
      margin: 0;
      padding-top: 0;
      height: calc(100% + 35px);
    }

    .tag-block {
      display: inline-flex;
      align-items: flex-end;
      margin: 0;
      padding-top: 0;
      width: 100%;
      height: calc(100% + 70px);
      z-index: -1;
    }

    .gallery-controls {
      display: none;
    }

  }

  @media only screen and (max-height: 700px) {
    .portfolio {
      height: auto;
      padding: 1vw;
      margin: 5vh 0;
      margin-bottom: 0;
      width: 100%;
    }

    .head-title {
      display: inline-flex;
      flex-direction: column;
      align-self: center;
      margin-top: 0;
      margin-right: 0;
      margin-bottom: 70px;
    }

    .head-title h1 {
      font-size: 30px;
      line-height: 35px;
    }

    .head-title span {
      padding-left: 1px;
      font-size: 10px;
      line-height: 10px;
    }

    /***Filter label***/
    .filter-label-wrapper {
      position: fixed;
      display: inline-flex;
      align-items: center;
      bottom: 5vh;
      right: calc(100% - 100px);
      height: 65px;
      transform: rotate(270deg);
      opacity: .3;
    }

    .filter-label-wrapper:hover {
      opacity: 1;
    }

    .filter-label {
      font-size: 16px;
      line-height: 22px;
      color: $black;
      background: transparent;
      border: none;
      outline: none;
    }

    .filter-label + #close-span {
      position: absolute;
      right: 0;
      width: 15px;
      height: 15px;
      background-size: 12px;
    }

    /***Filter block***/
    .filter {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      animation: viewFilterTable .3s ease-in-out;
      animation-fill-mode: forwards;
      transform: translateX(-100vw);
    }

    .filter-item a{
      display: inline-block;
      padding: 10px;
      text-transform: uppercase;
      text-decoration: none;
      font-weight: $extra_bold;
      font-size: $active;
      color: $black;
      border: none;
      background: none;
      transition: transform .2s ease-in-out, color .2s ease-in-out, opacity .1s ease-in-out;
    }

    .filter-none {
      display: none;
    }

    /***Gallery block***/
    .gallery-wrapper {
      width: inherit;
      height: auto;
      overflow: auto;
    }

    .gallery-wrapper::before,
    .gallery-wrapper::after {
      display: none;
    }

    .gallery {
      height: auto;
      max-width: 75vw;
      margin: 0 auto;
      padding: 0!important;
      overflow: hidden;
      column-width: 33vw;
    }

    .picture-item {
      display: block;
      margin: 0 3vw;
      margin-bottom: 130px;
      height: auto;
      max-width: 30vw;
      min-height: 150px;
    }

    .picture-item:last-child {
      margin-right: 0;
    }

    .picture-item .art-item {
      height: auto;
      width: 100%;
    }

    .picture-title {
      display: inline-flex;
      align-items: flex-end;
      margin: 0;
      padding-top: 0;
      height: calc(100% + 35px);
    }

    .tag-block {
      display: inline-flex;
      align-items: flex-end;
      margin: 0;
      padding-top: 0;
      width: 100%;
      height: calc(100% + 70px);
      z-index: -1;
    }

    .gallery-controls {
      display: none;
    }

  }


  @media only screen and (max-width: 768px) {

    .portfolio {
      margin:0;
      margin-top: 40px;
    }

    .gallery {
      column-width: 70vw;
    }

    .picture-item {
      margin: 0 auto;
      margin-bottom: 130px;
      max-width: 69.9vw;
    }

    .head-title {
      display: inline-flex;
      flex-direction: column;
      align-self: center;
      margin-top: 0;
      margin-right: 0;
      margin-bottom: 50px;
    }

    .head-title h1 {
      font-size: $h1-m;
      line-height: 30px;
    }

    .filter-label-wrapper {
      position: fixed;
      display: inline-flex;
      align-items: center;
      bottom: 10vh;
      right: calc(100% - 70px);
      height: 20px;
      transform: rotate(270deg);
    }

    .filter-label {
      padding: 15px;
      font-size: 12px;
      line-height: 12px;
    }

    .filter-label + #close-span {
      right: -2px;
      width: 9px;
      height: 9px;
      background-size: 9px;
    }

    .filter-item a{
      font-size: 16px;
    }
  }

  @media only screen and (max-height: 450px) {

    .filter-list {
      padding-bottom: 20vh;
    }

    .filter-item a{
      padding: 5px;
      font-size: 12px;
    }
  }

  /***Animation***/
  @keyframes viewFilter {
    0%{
      transform: translateX(20vw);
    }
    100%{
      transform: translateX(0);
    }
  }

  @keyframes viewFilterTable {
    0%{
      transform: translateX(-100vw);
    }
    100%{
      transform: translateX(0);
    }
  }

  @keyframes filterLinkView {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  /***Class for JS***/
  /*.active {
    transform: scale(.98);
    cursor: grabbing;
  }*/
</style>