import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'LoginLayout',
    component: () => import(/* webpackChunk: "loginLayout" */'@/modules/login/layouts/LoginLayout.vue'),

  },
  {
    path: '/login-auth',
    name: 'LoginAuth',
    component: () => import(/* webpackChunk: "loginAuth" */'@/modules/login/pages/LoginAuth.vue'),

  },
  {
    path: '/home-page',
    name: 'HomePage',
    component: () => import(/* webpackChunk: "homepage" */'@/modules/login/pages/HomePage.vue'),

  },
  {
    path: '/listar-pacientes',
    name: 'Listar-pacientes',
    component: () => import(/* webpackChunk: "listar paceintes" */'@/modules/paciente/pages/Listar-pacientes.vue'),

  }, {
    path: '/listar-tratamientos',
    name: 'Listar-tratamientos',
    component: () => import(/* webpackChunk: "listar trtameintos" */'@/modules/tratamiento/pages/Listar-tratamientos'),

  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
