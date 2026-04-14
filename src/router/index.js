import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/card-example',
      name: 'CardExample',
      component: () => import('@/views/CardExample.vue'),
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('@/views/ProfileView.vue'),
    },
    {
      path: '/form',
      name: 'Form',
      component: () => import('@/views/FormView.vue'),
    },
  ],
});

export default router;
