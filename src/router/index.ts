import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import AppLayout from '@/views/AppLayout.vue'
import DashboardView from '@/views/DashboardView.vue'
import ProfileView from '@/views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Public
    { path: '/', name: 'home', component: HomeView },
    { path: '/login', name: 'login', component: LoginView },

    // Protected area
    {
      path: '/app',
      component: AppLayout,
      meta: { requiresAuth: true },
      children: [
        { path: '', redirect: '/app/dashboard' },
        { path: 'dashboard', name: 'dashboard', component: DashboardView },
        { path: 'profile', name: 'profile', component: ProfileView },
      ],
    },

    // Fallback
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

router.beforeEach((to) => {
  const isAuthed = localStorage.getItem('authed') === 'true'

  // если идем в закрытую часть без логина -> на login + redirect back
  if (to.meta.requiresAuth && !isAuthed) {
    return {
      name: 'login',
      query: { redirect: to.fullPath },
    }
  }

  // если уже залогинен и пытаемся попасть на /login -> на dashboard
  if (to.name === 'login' && isAuthed) {
    return { name: 'dashboard' }
  }
})

export default router
