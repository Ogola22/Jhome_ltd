import { createRouter, createWebHistory } from 'vue-router'
import AdminHomeView from '../views/AdminVeiw/AdminHomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/admin',
            name: 'admin',
            component: AdminHomeView
        },
    ]
})