import Vue from 'vue'
import VueRouter from 'vue-router'
import App from 'App'
import User from 'components/User'
import Home from 'components/Home'
import Order from 'components/Order'
import Header from 'components/Header'
import Footer from 'components/Footer'
import All from 'components/All'
import Book from 'components/Book'
import Complete from 'components/Complete'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [

    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      children: [
        {path: '/order/all',name:'all', component: All},
        {path: '/order/book',name:'book', component: Book},
        {path: '/order/complete',name:'complete', component: Complete}
      ]
    },
    {
      path: '/header',
      name: 'header',
      component: Header
    },
    {
      path: '/footer',
      name: 'Footer',
      component: Footer
    }
  ]
})

