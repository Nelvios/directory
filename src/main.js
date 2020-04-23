import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://dataemp-9c786.firebaseio.com'
axios.defaults.headers.get.Accepts = 'application/json'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
