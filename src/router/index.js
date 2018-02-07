import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Detail from '../components/Detail'
import Add from '../components/Add'
import Collect from '../components/Collect'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    }, {
      path: '/home',
      name: 'home',
      component: Home
    }, {
      path: '/detail',
      name: 'detail',
      component: Detail
    }, {
      path: '/add',
      name: 'add',
      component: Add
    }, {
      path: '/collect',
      name: 'collect',
      component: Collect
    }, {
      path: '*',
      component: Home
    }
  ],
  linkActiveClass: 'active'
})
