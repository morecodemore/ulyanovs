<template>
  <div class="lang-link">
    <button id="ru" @click="ru">RU</button>
    <button id="en" @click="en">EN</button>
  </div>
</template>

<script>
  export default {
    methods: {
      ru () {
        let language = localStorage.setItem('vue-lang', 'ru');
        language = 'ru';
        location.reload();
      },
      en () {
        let language = localStorage.setItem('vue-lang', 'en');
        language = 'en';
        location.reload();
      }
      },
    name: "lang"
  }
</script>

<style lang="scss" scoped>

  @import "../assets/scss/variebles";
  @import "../assets/scss/templates";

  .lang-link {
    margin-right: 5vw;
    z-index: 250;
  }

  .lang-link button {
    padding: 10px;
    font-family: $family;
    font-size: $lang;
    font-weight: $light;
    background: none;
    border: none;
    cursor: pointer;
    transition: color .2s ease-in-out, opacity .2s ease-in-out ;
  }

  .lang-link button:hover {
    color: $blue;
  }

  .lang-link button:active,
  .lang-link button:focus {
    opacity: .6;
    outline: none;
  }

  @media only screen and (max-width: 768px) {
    .lang-link button {
      font-size: $lang-m;
    }
  }

</style>