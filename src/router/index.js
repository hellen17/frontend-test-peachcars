import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/components/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        showNavbar: false
      }

    },
    {
      path: '/',
      name: 'homeView',
      component: HomeView
    },
    {
      path: '/sell',
      name: 'SubmitBatch',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SubmitBatchView.vue')
    },

  ]
})

export default router
