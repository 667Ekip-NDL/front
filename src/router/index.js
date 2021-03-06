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
  },
  {
    path: '/aide',
    name: 'Aide',
    component: () => import('@/views/Aide.vue')
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import('@/views/Add.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
