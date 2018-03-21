<template>
  <main class="home">
    <div class="wrapper">
      <section class="title-block">
        <h1 class="title" v-lang.home.title></h1>
        <h2 class="subtitle" v-lang.home.subtitle></h2>
      </section>
    </div>
    <div class="social-wrapper">
    </div>
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


  .title-block {
    margin-top: 180px;
    margin-bottom: 180px;
    padding-left: 100px;
    @extend %container;
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

  .social-wrapper {

  }

  @media only screen and (max-width: 1140px) {

  }

  @media only screen and (max-width: 768px) {
  }

  /***Animation***/

</style>
