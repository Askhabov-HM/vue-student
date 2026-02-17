import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import AppLayout from '@/views/AppLayout.vue'
import CounterView from '@/views/CounterView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/app/counter' },
    { path: '/login', name: 'login', component: LoginView },

    {
      path: '/app',
      component: AppLayout,
      meta: { requiresAuth: true },
      children: [
        { path: '', redirect: '/app/counter' },
        { path: 'counter', name: 'counter', component: CounterView },
        { path: 'about', name: 'about', component: AboutView },
      ],
    },
  ],
})

router.beforeEach((to) => {
  const isAuthed = localStorage.getItem('authed') === 'true'
  if (to.meta.requiresAuth && !isAuthed) return { name: 'login' }
  if (to.name === 'login' && isAuthed) return { name: 'counter' }
})

export default router
