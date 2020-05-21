import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6IkFkcmlhbm8gR3VpbWFyYWVzIiwiZW1haWwiOiJhZHJpYW5vYXNnQGhvdG1haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTU5MDA3NTg4OCwiZXhwIjoxNTkwMzM1MDg4fQ.ZygJSmK_TdY2Myp80GNf7IfkltHNS7I22KGEYlrvDLs'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')