import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/views/HomeView.vue');
const About = () => import('@/views/AboutView.vue');
const Projects = () => import('@/views/ProjectsView.vue');
const Project = () => import('@/views/ProjectView.vue');
const Contact = () => import('@/views/ContactView.vue');
const NotFound = () => import('@/views/NotFound.vue');

const mainTitle = 'kamilcraft.com'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Dzień dobry! 😊'
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
    path: '/:catchAll(.*)',
    name: '404',
    meta: {
      title: 'Błąd 404'
    },
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({
            selector: to.hash
          }, 1000)
        })
      })
    } else {
      return { left: 0, top: 0 }
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
