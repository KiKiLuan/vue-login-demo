import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../pages/index/Index'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../pages/login/Login'], resolve)
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['../pages/home/Home'], resolve)
    },
    {
      path: '/signout',
      component: resolve => require(['../pages/signout/Signout'], resolve)
    },
    {
      path: '*',
      redirect: {
        name: 'login'
      }
    }
  ]
})
