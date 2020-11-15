import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('@/views/Signup.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/books/add',
    name: 'AddBooks',
    component: () => import('@/views/BookRegister.vue')
  },
  {
    path: '/books/:book_id',
    name: 'Book',
    component: () => import('@/views/Book'),
  },
  {
    path: '/read',
    name: 'read',
    component: () => import('@/views/BooksRead.vue')
  },
  {
    path: '/user/adminup',
    name: 'Adminup',
    component: () => import('@/views/AdminUp'),
  },
  {
    path: '/user/recovery',
    name: 'Recovery',
    component: () => import('@/views/Recovery.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
