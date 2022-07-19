import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Typer from "../views/Typer.vue"
import Mysteries from "../views/Mysteries.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/typer',
    name: "Typer",
    component: Typer
  },
  {
    path: '/mysteries',
    name: "Mysteries",
    component: Mysteries
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
