import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/test'

import Router1 from '@/components/router1'
import Router2 from '@/components/router2'
import Router3 from '@/components/router3'

import Content from '@/components/Content'
import List from '@/components/List'
import Article from '@/components/Article'

import User from '@/components/User'
import UserAdd from '@/components/User/UserAdd'
import UserEdit from '@/components/User/UserEdit'

Vue.use(Router);

export default new Router({
  mode: 'history', // 路由以什么分割，history: 以'\'分割，默认以'#'分割
  // base: '/card/', // 项目根目录，按需添加
  routes: [

    // 默认跳转路由配置
    {
      path: '*',
      redirect: '/'
    },

    // 路由配置
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/r1',
      name: 'router1',
      component: Router1
    },
    {
      path: '/r2',
      name: 'router2',
      component: Router2
    },
    {
      path: '/r3',
      name: 'router3',
      component: Router3
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Content
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/article/:id',
      name: 'article',
      component: Article
    },
    {
      path: '/user',
      name: 'user',
      component: User,

      // 设置子路由
      children: [
        {path: 'add',component: UserAdd},
        {path: 'edit',component: UserEdit}
      ]
    },
  ]
})
