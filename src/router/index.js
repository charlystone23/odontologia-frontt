import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    name: 'LoginLayout',
    component: () => import(/* webpackChunk: "loginLayout" */'@/modules/login/layouts/LoginLayout.vue'),
   
  },
  {
    path:'/login-auth',
    name: 'LoginAuth',
    component: () => import(/* webpackChunk: "loginLayout" */'@/modules/login/pages/LoginAuth.vue'),
   
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
