import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '../views/home/main.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/main',
    name: 'main',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
