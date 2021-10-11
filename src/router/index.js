import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Projects from '../views/Projects'
import Project from '../views/Project'
import Contact from '../views/Contact'
import KamilCraftInfo from '../views/KamilCraftInfo'
import NotFound from '../views/NotFound'

Vue.use(VueRouter)

const mainTitle = 'kamilcraft.com'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Witam! 😊'
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
    path: '/projects/:id',
    name: 'Project',
    meta: {
      title: 'Projekt'
    },
    component: Project
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
    path: '/contact',
    name: 'Kontakt',
    meta: {
      title: 'Kontakt'
    },
    component: Contact
  },
  {
    path: '/info',
    name: 'KamilCraftProject',
    meta: {
      title: 'KamilCraft Project'
    },
    component: KamilCraftInfo
  },
  {
    path: '*',
    name: '404',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL ?? '/',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { x: 0, y: 0 }
    }
  }
})

const title = ' :: ' + mainTitle
router.beforeEach((to, form, next) => {
  const documentTitle = to.meta.title + title || mainTitle
  document.title = documentTitle === to.meta.title ? title : documentTitle
  next()
})

export default router
