import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/test'

Vue.use(Router)

export default new Router({
  mode: 'history', // 路由以什么分割，history: 以'\'分割，默认以'#'分割
  // base: '/card/', // 项目根目录，按需添加
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
