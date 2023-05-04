import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  // Home page routes
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: ()=> import('../views/ContactView.vue')
    },
    {
      path: '/agents',
      name: 'agents',
      component: ()=> import('../views/Agents/AgentsView.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: ()=> import('../views/Services.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: ()=> import('../views/Auths/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: ()=> import('../views/Auths/Register.vue')
    },

    {
      path: '/profile',
      name: 'profile',
      component: ()=> import('../views/users/userProfile.vue')
    },
    {
      path: '/agentDetails',
      name: 'agentDetails',
      component: ()=> import('../views/Agents/AgentDetail.vue')
    }
  ]
})
export default router
