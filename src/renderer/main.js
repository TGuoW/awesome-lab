import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/common.css'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(ElementUI)
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
/* tslint-disable no-new */
Vue.http = Vue.prototype.$http = axios
// Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
