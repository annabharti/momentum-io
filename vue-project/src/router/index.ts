import { createRouter, createWebHistory } from 'vue-router'

import CreateLaunchView from '../views/CreateLaunchView.vue'
import HomeView from '../views/HomeView.vue'
import LaunchDetails from '../views/LaunchDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/launch-details/:name',
      name: 'launch-details',
      component: LaunchDetails
    },
    {
      path: '/create-launch',
      name: 'create-launch',
      component: CreateLaunchView
    }
  ]
})

export default router
