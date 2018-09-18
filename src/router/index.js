import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/home'
import Login from '../views/login/login'
import Register from '../views/register/register'
import Fundraising from '../views/fundraising/fundraising'
import FundraisingFailed from '../views/fundraising/fundraisingresult/failed/failed'
import FundraisingSuccess from '../views/fundraising/fundraisingresult/success/success'
import FundraisingInfo from '../views/fundraising/fundraisinginfo/fundraisinginfo'
import StagesInfo from '../views/fundraising/stagesinfo/stagesinfo'
import FundraisingCompelete from '../views/fundraisingstatus/fundraisingcomplete/fundraisingcomplete'
import FundraisingUncompelete from '../views/fundraisingstatus/fundraisinguncomplete/fundraisinguncomplete'
import ApplyForUsing from '../views/fundraising/applyforusing/applyforusing'
import FundraisingUsingInfo from '../views/applyforusing/fundraisingusinginfo/fundraisingusinginfo'
import DonorRegister from '../views/donor/donorregister/donorregister'
import DonorNow from '../views/donor/donornow/donornow'

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
      path: '/Register',
      name: 'Register',
      component: Register
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
      path: '/StagesInfo',
      name: 'StagesInfo',
      component: StagesInfo
    },
    {
      path: '/FundraisingCompelete',
      name: 'FundraisingCompelete',
      component: FundraisingCompelete
    },
    {
      path: '/FundraisingUncompelete',
      name: 'FundraisingUncompelete',
      component: FundraisingUncompelete
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
    },
    {
      path: '/DonorRegister',
      name: 'DonorRegister',
      component: DonorRegister
    },
    {
      path: '/DonorNow',
      name: 'DonorNow',
      component: DonorNow
    }
  ]
})

