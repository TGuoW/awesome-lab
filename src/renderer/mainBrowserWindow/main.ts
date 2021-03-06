import Vue from 'vue'
import Electron from 'vue-electron'
import unhandled from 'electron-unhandled'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'modern-normalize/modern-normalize.css'
import '../assets/js/utils'

import App from './App.vue'
import router from './router'
import store from '../../shared/store/mainStore'

Vue.use(ElementUI)
Vue.use(Electron)
unhandled()

if (process.env.NODE_ENV === 'production') {
  Vue.config.productionTip = false
  Vue.config.devtools = false
}

// Customize Autocomplete component to match out needs

new Vue({
  router,
  store,
  components: { App },
  render (h) {
    return h('App')
  },
  name: 'root'
}).$mount('#app')
