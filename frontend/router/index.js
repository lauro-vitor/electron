import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//users
import User from '../views/User/User'
import Person from '../views/Person/Person'
import RegisterUser from '../views/User/RegisterUser'
import UpdateUser from '../views/User/UpdateUser'

//persons
import RegisterPerson from '../views/Person/RegisterPerson'

Vue.use(VueRouter)
  const routesUser = [
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
    }
  ]
  const routesPersons = [
    {
      path: '/persons',
      name: 'Person',
      component: Person
    },
    {
      path: '/persons/register',
      name: 'RegisterPerson',
      component: RegisterPerson
    }
  ]
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  ... routesUser,
  ... routesPersons
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
