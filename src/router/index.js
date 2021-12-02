import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/form',
    name: 'Forms',
    component: () => import('@/views/Forms.vue')
  },
  {
    path: '/blob',
    name: 'Blob',
    component: () => import('@/views/BlobTutorial.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
