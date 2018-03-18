import Vuex from 'vuex'
import Vue from 'vue'
import Arts from './arts'
import Categories from './categories'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: this.language
  },
  modules: {
    Arts,
    Categories,
  }
})