import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User/User'
import Person from '../views/Person/Person'
import RegisterUser from '../views/User/RegisterUser'
import UpdateUser from '../views/User/UpdateUser'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'User',
    component: User
  },
  {
    path: '/users/register',
    name: 'UserRegister',
    component: RegisterUser
  },
  {
    path: '/users/update/:id',
    name: 'UpdateUser',
    component: UpdateUser
  },
  {
    path: '/persons',
    name: 'Person',
    component: Person
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
