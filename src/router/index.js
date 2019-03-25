import Vue from 'vue'
import Router from 'vue-router'
import Home from 'home/Homebefore'
import Newphone from 'newphone/Newphonebefore'
import Polife from 'polife/Polifebefore'
import Recommended from 'home/recommended/Recommended'
import Sale from 'home/sale/Sale'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: '1',
      redirect: '/home/recommended',
      component: Home,
      children: [
        {
          path: 'recommended',
          name: 'home',
          component: Recommended
        },
        {
          path: 'sale',
          name: 'sale',
          component: Sale
        }
      ]
    },
    {
      path: '/newphone',
      name: '2',
      component: Newphone
    },
    {
      path: '/polife',
      name: '3',
      component: Polife
    }
  ]
})
