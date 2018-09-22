import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/home'
import Login from '../views/login/login'
import Fundraising from '../views/fundraising/fundraising'
import FundraisingInfo from '../views/fundraising/fundraisinginfo/fundraisinginfo'
import StagesInfo from '../views/fundraising/stagesinfo/stagesinfo'
import ApplyForUsing from '../views/fundraising/applyforusing/applyforusing'
import DonorRegister from '../views/donor/donorregister/donorregister'
import DonorNow from '../views/donor/donornow/donornow'
import ProjectStageInfo from '../views/donor/projectstageinfo/projectstageinfo'

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
      path: '/ApplyForUsing',
      name: 'ApplyForUsing',
      component: ApplyForUsing
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
    },
    {
      path: '/ProjectStageInfo',
      name: 'ProjectStageInfo',
      component: ProjectStageInfo
    }
  ]
})

