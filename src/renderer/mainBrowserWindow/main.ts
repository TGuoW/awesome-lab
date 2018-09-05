import Vue from 'vue'
import Electron from 'vue-electron'
import unhandled from 'electron-unhandled'
import 'element-ui/lib/theme-chalk/index.css'
import 'modern-normalize/modern-normalize.css'

import App from './App.vue'
import router from './router'

Vue.use(Electron)
unhandled()

if (process.env.NODE_ENV === 'production') {
  Vue.config.productionTip = false
  Vue.config.devtools = false
}

// Customize Autocomplete component to match out needs

new Vue({
  router,
  components: { App },
  render (h) {
    return h('App')
  },
  name: 'root'
}).$mount('#app')
