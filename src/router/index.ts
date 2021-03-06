import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Login'
  },
  {
    path: '/Login',
    component: () => import('@/views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router