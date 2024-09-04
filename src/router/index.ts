import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
// import SignUpView from '@/views/SignUpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/signup',
    //   name: 'signUp',
    //   component: SignUpView
    // },
    {
      path: '/signin',
      name: 'signIn',
      component: () => import('@/views/SignInView.vue')
    }
  ]
})

export default router
