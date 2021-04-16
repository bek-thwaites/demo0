import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import loginit from '@/components/loginit'
import login_bg from '@/components/login_bg'
import home from '@/components/home'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/loginit',
      name: 'loginit',
      component: loginit
    },{
      path: '/login_bg',
      name: 'login_bg',
      component: login_bg
    },{
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/home',
      name: 'home',
      component: () => import('@/components/home.vue'),
      children: [
        {
          path: '/index',
          component: () => import('../pages/index.vue'),
          meta: { title: '系统首页' }
        },
        {
          path: '/test',
          component: () => import('../pages/test.vue'),
          meta: { title: '测试' }
        },
      ]
    }
  ]
})
