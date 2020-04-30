new Vue({
    el: '#desafio',
    data: {
        nome: 'Adriano Souza Guimarães',
        idade: 34,
        imagem: 'https://media.gazetadopovo.com.br/2020/01/17155825/lamborghini-huracan-Alexander-Migl-wikimedia-commons-660x372.jpg'
    },
    methods: {
        randomico() {
            return Math.random()
        }
    },
})
