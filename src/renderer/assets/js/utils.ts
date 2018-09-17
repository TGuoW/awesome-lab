import Axios from 'axios'
import Vue from 'vue'

let API_HOST = 'https://www.easy-mock.com/mock/5b98c2aa71f96e20a4daaf60/admin'
Vue.prototype.$http = (url) => {
  url = API_HOST + url
  return Axios(url)
}
