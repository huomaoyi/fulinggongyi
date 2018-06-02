import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/home'
import Login  from '../views/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Default',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})

