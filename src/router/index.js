import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [

  //rutas de login
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

  //rutas de tratamientos
  {
    path: '/listar-tratamientos',
    name: 'Listar-tratamientos',
    component: () => import(/* webpackChunk: "listar trtameintos" */'@/modules/tratamiento/pages/Listar-tratamientos.vue'),

  },
  {
    path: '/editar-tratamientos/:id',
    name: 'Editar-tratamientos',
    component: () => import(/* webpackChunk: "editar trtameintos" */'@/modules/tratamiento/pages/Editar-tratamientos.vue'),

  },
  {
    path:'/nuevo-tratamiento',
    name: 'Nuevo-Tratameinto',
    component: () => import(/* webpackChunk: "nuevo trtameintos" */'@/modules/tratamiento/pages/Nuevo-tratamiento.vue'),

  },
  //rutas de pacientes
  {
    path: '/listar-pacientes',
    name: 'Listar-pacientes',
    component: () => import(/* webpackChunk: "listar paceintes" */'@/modules/paciente/pages/Listar-pacientes.vue'),

  },
  {
    path: '/editar-pacientes/:id',
    name: 'Editar-pacientes',
    component: () => import(/* webpackChunk: "editar paceintes" */'@/modules/paciente/pages/Editar-pacientes.vue'),

  },
  {
    path:'/nuevo-paciente',
    name: 'Nuevo-Paciente',
    component: () => import(/* webpackChunk: "nuevo paceinte" */'@/modules/paciente/pages/Nuevo-paciente.vue'),

  },
  //rutas gestion paciente

  {
    path:'/paciente-tratamiento/:id',
    name: 'Paciente-tratamiento',
    component: () => import(/* webpackChunk: " paceinte tratamiento" */'@/modules/pacientetratamiento/pages/PacienteTratamiento.vue'),

  },
  {
    path:'/paciente-tratamiento-listar/:id',
    name: 'Paciente-tratamiento-listar',
    component: () => import(/* webpackChunk: " paceinte tratamiento" */'@/modules/pacientetratamiento/pages/Paciente-tratamiento-listar.vue'),

  },
  {
    path:'/paciente-tratamiento-crear/:id',
    name: 'Paciente-tratamiento-crear',
    component: () => import(/* webpackChunk: " paceinte tratamiento" */'@/modules/pacientetratamiento/pages/Paciente-tratamiento-crear.vue'),

  },
  {
    path:'/paciente-tratamiento-editar/:id/:idT',
    name: 'Paciente-tratamiento-editar',
    component: () => import(/* webpackChunk: " paceinte tratamiento" */'@/modules/pacientetratamiento/pages/Paciente-tratamiento-editar.vue'),

  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
