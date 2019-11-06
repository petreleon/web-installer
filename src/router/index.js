import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Folder from '../views/Folder.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/folder',
    name: 'home',
    component: Folder
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
