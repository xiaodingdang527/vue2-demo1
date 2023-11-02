import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'

//引入uView
import uView from "uview-ui";
Vue.use(uView);

//公共的header
import CommonHeader from '@/component/CommonHeader/index.vue'
Vue.component('CommonHeader',CommonHeader)

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif