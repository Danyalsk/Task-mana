import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SIgnUpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signUp',
      component: SignupView
    },
    {
      path: '/signin',
      name: 'signIn',
      component: () => import('../views/SignInView.vue')
    }
  ]
})

export default router
