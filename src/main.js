import Vue from 'vue'
import App from '../frontend/App.vue'
import router from '../frontend/router'

Vue.config.productionTip = false

import store from '../frontend/store'
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
