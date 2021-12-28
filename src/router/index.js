import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Intro',
    name: 'Intro',
    component: () => import('../views/Intro.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
