new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlert() {
            alert('Alerta!!!!')
        },
        armazenarValor(event) {
            this.valor = event.target.value
        }
    },
})