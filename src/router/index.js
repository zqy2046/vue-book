import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import List from '../components/List'
import Add from '../components/Add'
import Collect from '../components/Collect'
import Detail from '../components/Detail'
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
      path: '/list',
      name: 'List',
      component: List
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
    }, {
      path: '/detail/:bid',
      name: 'detail',
      component: Detail
    }
  ],
  linkActiveClass: 'active'
})
