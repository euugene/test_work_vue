import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main-layout' }
    // component: () => import('./../components/catalog/v-catalog.vue')
  },
  {
    path: '/catalog',
    name: 'VCatalog',
    meta: { layout: 'main-layout' },
    component: () => import('./../components/catalog/v-catalog.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
