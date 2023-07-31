import { createRouter, createWebHistory } from 'vue-router';
import { setHeaderTitle, setHeaderDescription, clearHeaderDescription } from '@/HeaderReference';

const Home = () => import('@/views/HomeView.vue');
const About = () => import('@/views/AboutView.vue');
const Projects = () => import('@/views/ProjectsView.vue');
const Project = () => import('@/views/ProjectView.vue');
const Contact = () => import('@/views/ContactView.vue');
const NotFound = () => import('@/views/NotFoundView.vue');

const mainTitle = 'kamilcraft.com';

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Dzień dobry! 😊',
      description: [
        'Chciałbym Państwa powitać na mojej stronie!',
        'Przedstawiam tutaj część swojego życia związaną z programowaniem i projektowaniem aplikacji internetowych.',
      ],
    },
    component: Home,
  },
  {
    path: '/projects',
    name: 'Projects',
    meta: {
      title: 'Moje projekty',
      description: [
        'Witam Państwa na podstronie z moimi projektami!',
      ],
    },
    component: Projects,
  },
  {
    path: '/projects/:id',
    name: 'Project',
    meta: {
      title: 'Projekt',
    },
    component: Project,
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'O mnie',
      description: [
        'Jestem młodym i ambitnym inżynierem oprogramowania. Specjalizuję się w tworzeniu frontendów i backendów.',
      ],
    },
    component: About,
  },
  {
    path: '/contact',
    name: 'Kontakt',
    meta: {
      title: 'Kontakt',
      description: [
        'Chcesz o coś zapytać? Chciałbyś współpracować? Napisz!',
      ],
    },
    component: Contact,
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    meta: {
      title: 'Błąd 404',
    },
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({
            selector: to.hash
          }, 1000);
        });
      });
    } else {
      return { left: 0, top: 0 };
    }
  }
});

const title = ' :: ' + mainTitle;
router.beforeEach((to, form, next) => {
  const documentTitle = to.meta.title + title || mainTitle;
  document.title = documentTitle === to.meta.title ? title : documentTitle;
  if (to.meta.title) {
    setHeaderTitle(to.meta.title);
  }
  if (to.meta.description && to.meta.description !== []) {
    setHeaderDescription(to.meta.description);
  } else {
    clearHeaderDescription();
  }
  next();
});

export default router;
