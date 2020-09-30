import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  // Add the global store to the app
  store,
  render: h => h(App)
}).$mount('#app')
