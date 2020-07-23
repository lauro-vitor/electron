import Vue from 'vue'
import App from '../frontend/App.vue'
import router from '../frontend/router'

Vue.config.productionTip = false

import store from '../frontend/store'
import vuetify from './plugins/vuetify';
new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
