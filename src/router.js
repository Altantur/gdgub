import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const metaTitle = "GDG Ulaanbaatar";
const metaDescription = "Google Developer Group（GDG）Ulaanbaatar";

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/devfest2019',
      // component: Home
    },
    {
      path: '*',
      name: 'home',
      redirect: '/devfest2019',
      // component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('./views/Team.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('./views/Events.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/devfest2019',
      name: 'devfest',
      component: () => import('./views/DevFest2019.vue'),
      meta: { title: 'DevFest2019 | GDG Ulaanbaatar', description: 'DevFest Google Developer Group (GDG), Ulaanbaatar' }
    }
  ]
})

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = metaTitle
  }
  if (to.meta && to.meta.description) {
    document.querySelector("meta[name='description']").setAttribute('content', to.meta.description)
    document.querySelector("meta[name='og:description']").setAttribute('content', to.meta.description)
  } else {
    document.querySelector("meta[name='description']").setAttribute('content', metaDescription)
    document.querySelector("meta[name='og:description']").setAttribute('content', metaDescription)
  }
})

export default router
