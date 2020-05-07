import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(require('vue-faker'), {locale: 'pt_BR'});

new Vue({
	render: h => h(App),
}).$mount('#app')
