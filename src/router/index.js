import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import PartnerRegister from '@/views/PartnerRegister.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'DgRegister',
    component: RegisterView
  },
  {
    path: '/login',
    name: 'DgLogin',
    component: LoginView
  },
  {
    path: '/partner/Register',
    name: 'DgPartnerRegister',
    component: PartnerRegister
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
