import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'

Vue.use(Router);

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/:id?',
      name: 'home',
      component: home
    },
    {
      path: '*',
      redirect: '/'
    }

  ]
})