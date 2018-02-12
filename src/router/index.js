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
      redirect: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        index:1
      }
    },
    {
      path: '/list',
      name: 'List',
      component: List,
      meta:{
        keepAlive:false,
        index:2
      }
    },
    {
      path: '/add',
      name: 'add',
      component: Add,
      meta:{
        index:3
      }
    },
    {
      path: '/collect',
      name: 'collect',
      component: Collect,
      meta:{
        index:4
      }
    },
    {
      path: '*',
      redirect: Home
    },
    {
      path: '/detail/:bid',
      name: 'detail',
      component: Detail
    }
  ],
  linkActiveClass: 'active'
})
