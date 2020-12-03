import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '../views/home/main.vue'
import Home from '../views/index/main.vue'
import Query from '../views/query/main.vue'
import Borrow from '../views/borrow/main.vue'
import Retuen from '../views/return/main.vue'
import Navigation from '../views/navigation/main.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'main',
    component: Main,
    redirect:'/home',
    children:[
      {
        path:'/home',
        name:'home',
        component:Home
      },
      {
        path: '/query',
        name: 'query',
        component: Query
      },
      {
        path: '/borrow',
        name: 'borrow',
        component: Borrow
      },
      {
        path: '/return',
        name: 'return',
        component: Retuen
      },
      {
        path: '/navigation',
        name: 'navigation',
        component: Navigation
      },  
    ]
  },
  {
    path: '/main',
    name: 'main',
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
