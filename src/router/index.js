import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/home'
import Login from '../views/login/login'
import Fundraising from '../views/fundraising/fundraising'
import FundraisingFailed from '../views/fundraising/fundraisingresult/failed/failed'
import FundraisingSuccess from '../views/fundraising/fundraisingresult/success/success'
import FundraisingInfo from '../views/fundraisinginfo/fundraisinginfo'
import ApplyForUsing from '../views/applyforusing/applyforusing'
import FundraisingUsingInfo from '../views/applyforusing/fundraisingusinginfo/fundraisingusinginfo'

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
    },
    {
      path: '/Fundraising',
      name: 'Fundraising',
      component: Fundraising
    },
    {
      path: '/FundraisingFailed',
      name: 'FundraisingFailed',
      component: FundraisingFailed
    },
    {
      path: '/FundraisingSuccess',
      name: 'FundraisingSuccess',
      component: FundraisingSuccess
    },
    {
      path: '/FundraisingInfo',
      name: 'FundraisingInfo',
      component: FundraisingInfo
    },
    {
      path: '/ApplyForUsing',
      name: 'ApplyForUsing',
      component: ApplyForUsing
    },
    {
      path: '/FundraisingUsingInfo',
      name: 'FundraisingUsingInfo',
      component: FundraisingUsingInfo
    }
  ]
})

