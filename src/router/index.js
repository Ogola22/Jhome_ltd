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
    },
    {
      path: '/myProperties',
      name: 'myProperties',
      component: ()=> import('../views/property/myProperty.vue')
    },
    {
      path: '/addProperty',
      name: 'addProperty',
      component: ()=> import('../views/property/AddProperty/Step1.vue')
    },
    {
      path: '/editProperty',
      name: 'editProperty',
      component: ()=> import('../views/property/editProperty.vue')
    },
    {
      path: '/step2',
      name: 'step2',
      component: ()=> import('../views/property/AddProperty/Step2.vue')
    },
    {
      path: '/step3',
      name: 'step3',
      component: ()=> import('../views/property/AddProperty/Step3.vue')
    },
    {
      path: '/step4',
      name: 'step4',
      component: ()=> import('../views/property/AddProperty/Step4.vue')
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: ()=> import('../views/Blogs/blogsDetails.vue')
    },
    {
      path: '/propertyList',
      name: 'propertyList',
      component: ()=> import('../views/property/proprtyList.vue')
    },
    {
      path: '/membership',
      name: 'membership',
      component: ()=> import('../views/MembershipView.vue')
    },
  ]
})
export default router
