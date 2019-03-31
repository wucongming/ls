// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import '@/common/stylus/index.styl'
import store from './store/store';
import axios from 'axios'
import thor from 'thor-x'
import 'thor-x/dist/index.css'
Vue.use(thor)
Vue.prototype.axios = axios
Vue.config.productionTip = false
Vue.prototype.axios.defaults.withCredentials = true
Vue.prototype.linkPrefix = 'http://localhost:8082'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
