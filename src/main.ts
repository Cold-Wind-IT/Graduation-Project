import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './styles/style.scss'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$api = "http://localhost:8081"
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
