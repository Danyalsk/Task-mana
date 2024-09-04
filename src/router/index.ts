import { createRouter, createWebHistory } from 'vue-router'
// import SignUpView from '@/views/SignUpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('@/views/HomeView.vue')
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
