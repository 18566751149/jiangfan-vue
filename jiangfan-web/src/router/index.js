import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'HelloWorld',
          component: resolve => require(['../components/HelloWorld.vue'], resolve),
          meta: {
            keepAlive: true
          }
        },
        {
          path: 'Breadcrumb',
          component: resolve => require(['../views/Breadcrumb/Index.vue'], resolve),
          meta: {
            keepAlive: true
          }
        },
        {
          path: 'Customer',
          component: resolve => require(['../views/Customer/Index.vue'], resolve),
          meta: {
            keepAlive: true
          }
        },
        {
          path: 'Tabs',
          component: resolve => require(['../views/Tabs/Index.vue'], resolve),
          meta: {
            keepAlive: true
          }
        }
      ]
    }
  ]
})
