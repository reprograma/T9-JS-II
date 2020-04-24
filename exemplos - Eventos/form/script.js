window.addEventListener('DOMContentLoaded', function () {

    // selecionando o formulário do HTML
    const form = document.querySelector('form')


    // declarando a func saudacao
    function saudacao(event) {
        event.preventDefault()

        const divSaudacao = document.createElement('div')

        const name = document.querySelector('input').value
        const lang = document.querySelector('#lang').value

        let message;

        if (lang == 'pt') {
            message = "Olá, " + name + "!"
        } if (lang == "en") {
            message = "Hello, " + name + "!"
        } if (lang == 'es') {
            message = "Hola, " + name + "!"
        }

        divSaudacao.innerText = message

        document.body.appendChild(divSaudacao)
    }

    // adicionando o evento submit no formulário
    form.addEventListener('submit', saudacao)

    // seleciona e pega o valor do select no evento change
    // const lang = document.querySelector('#lang')
    // lang.addEventListener('change', function () {
    //     console.log(lang.value)
    // })
})