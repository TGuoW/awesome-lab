import Vue from 'vue'
import Router from 'vue-router'
import editor from '../components/editor.vue'
import toDoList from '../components/toDoList/index.vue'
// import BrowserMainView from '../components/LandingPage.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
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
        }
      ]
    }
  ]
})
