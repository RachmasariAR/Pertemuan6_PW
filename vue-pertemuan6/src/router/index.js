import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const AppName = import.meta.env.VITE_APP_NAME;
const DefaultTitle = 'Website Priofile | ' + AppName;

const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      component: () => import('../components/Contact.vue'),
      name: 'contact',
    },
    {
      path: '/information',
      component: () => import('../components/Information.vue'),
      name: 'information',
    }
  ]
})


routes.beforeEach((to, from, next) => {
  document.title = to.meta.title || DefaultTitle;
  next();
});

export default routes
