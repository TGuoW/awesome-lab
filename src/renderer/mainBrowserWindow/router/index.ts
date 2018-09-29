import Vue from 'vue'
import Router from 'vue-router'
import editor from '../components/editor.vue'
import toDoList from '../components/toDoList/index.vue'
import ts2048 from '../components/2048/index.vue'
// import BrowserMainView from '../components/LandingPage.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: require('../components/index.vue').default,
      children: [
        {
          path: '',
          name: 'front',
          component: require('../components/front.vue').default
        },
        {
          path: 'editor',
          name: 'editor',
          component: editor
        },
        {
          path: 'calculator',
          name: 'calculator',
          component: require('../components/calculator/HelloWorld.vue').default
        },
        {
          path: 'toDoList',
          name: 'toDoList',
          component: toDoList
        },
        {
          path: 'ts2048',
          name: 'ts2048',
          component: ts2048
        }
      ]
    }
  ]
})
