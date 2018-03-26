import Vuex from 'vuex'
import Vue from 'vue'
import Works from './works'
import Categories from './categories'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: this.language
  },
  modules: {
    Works,
    Categories,
  }
})