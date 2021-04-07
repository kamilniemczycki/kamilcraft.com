import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import NotFound from '../views/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Witam serdecznie 😊'
    },
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    meta: {
      title: 'Moje projekty'
    },
    component: Projects
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'O mnie'
    },
    component: About
  },
  {
    path: '*',
    name: '404',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const title = 'KamilCraft.com'
router.beforeEach((to, form, next) => {
  document.title = to.meta.title || title
  next()
})

export default router
