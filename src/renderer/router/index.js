import Vue from 'vue'
import Router from 'vue-router'
import editor from '@/components/editor'
import toDoList from '@/components/toDoList/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/front').default
    },
    {
      path: '/editor',
      name: 'editor',
      component: editor
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: require('@/components/calculator/HelloWorld').default
    },
    {
      path: '/toDoList',
      name: 'toDoList',
      component: toDoList
    }
  ]
})