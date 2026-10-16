import { createRouter, createWebHashHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'inicio', component: InicioView },
    { path: '/v-if', name: 'v-if', component: () => import('../views/VIfView.vue') },
    { path: '/v-show', name: 'v-show', component: () => import('../views/VShowView.vue') },
    { path: '/v-for', name: 'v-for', component: () => import('../views/VForView.vue') },
    { path: '/v-key', name: 'v-key', component: () => import('../views/VKeyView.vue') },
  ],
})

export default router
