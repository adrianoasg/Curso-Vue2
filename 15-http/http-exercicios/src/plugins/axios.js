import Vue from 'vue'
import axios from 'axios'

//axios instancia global
// axios.defaults.baseURL = 'https://curso-vue-5044f.firebaseio.com/'
//headers
// axios.defaults.headers.common['Authorization'] = 'abc123'
// axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use({
  install(Vue) {
    // Vue.prototype.$http = axios
    //instancia
    Vue.prototype.$http = axios.create({
      baseURL: 'https://curso-vue-5044f.firebaseio.com/',
      headers: {
        "Authorization": "abc123"
      }
    })

    // interceptando requisições
    Vue.prototype.$http.interceptors.request.use(config => {
      console.log(config.method)
      // if(config.method == 'post') {
      //   config.method = 'put'
      // }
      return config
    }, error => Promise.reject(error))

    // interceptando respostas
    Vue.prototype.$http.interceptors.response.use(res => {
      // const array = []
      // for(let chave in res.data) {
        // array.push({ id: chave, nome: res.data[chave].nome, email: res.data[chave].email })
        // ou usando operador spread
      //   array.push({ id: chave, ...res.data[chave] })
      // }

      // res.data = array
      return res
    },  error => Promise.reject(error))
  }
})