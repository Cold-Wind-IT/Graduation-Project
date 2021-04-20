import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '../views/home/main.vue'
import Home from '../views/index/main.vue'
import User from '../views/user/main.vue'
import Borrow from '../views/borrow/main.vue'
import Retuen from '../views/return/main.vue'
import Navigation from '../views/navigation/main.vue'
import Admin from '@/views/admin/main.vue'

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
        path: '/user',
        name: 'user',
        component: User
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
    path: '/admin',
    name: 'admin',
    component: Admin
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
