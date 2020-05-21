import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFkcmlhbm8gR3VpbWFyw6NlcyIsImVtYWlsIjoiYWRyaWFubm8tYWdAYm9sLmNvbS5iciIsImFkbWluIjp0cnVlLCJpYXQiOjE1OTAwNjc5ODQsImV4cCI6MTU5MDMyNzE4NH0.EDVt6rYFtwCyuNRCJ35lhy4RdHaOxkYxdPcn6ZFh-ck'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')