import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import about from '@/pages/about'
import contacts from '@/pages/contacts'
import portfolio from '@/pages/portfolio'
import portfolio_item from '@/pages/portfolio_item'
import NotFound from '@/pages/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: contacts
    },
    {
      path: '/portfolio/:category',
      name: 'portfolio',
      component: portfolio
    },
    {
      path: '/portfolio/:category?/:id-:url',
      name: 'portfolio_item',
      component: portfolio_item
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})