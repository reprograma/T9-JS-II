window.addEventListener('DOMContentLoaded', function () {
    //selecionei a div com querySelector
    const div = document.querySelector('#box')
    const button = document.querySelector('#button')
    const buttonInline = document.querySelector("#inline")

    const imagem = document.createElement('img')
    imagem.src = "https://media.giphy.com/media/xTg8B47N8waMBhp0qc/giphy.gif"


    button.addEventListener('click', function () {
        // regrinha para o texto do botão
        if (button.innerText == "Faça o gif sumir clicando em mim!") {
            // lógica para remover a imagem do body
            button.innerText = "Faça aparecer um gif, clique em mim!"
            document.body.removeChild(imagem)
            button.style.backgroundColor = "green"

        } else {
            button.innerText = "Faça o gif sumir clicando em mim!"
            document.body.appendChild(imagem)
            button.style.backgroundColor = "red"
        }
    })



    function random(limite) {
        return Math.floor(Math.random() * limite)
    }

    function bgChange() {
        const corAleatoria = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')'
        return corAleatoria
    }


    // propriedade do elemento

    // button.onclick = function () {
    //     button.innerText = 'Ok!'
    // }

    // button.onclick = function () {
    //     button.style.backgroundColor = 'yellow'
    // }

    // //Inline 

    // function teste() {
    //     buttonInline.innerText = "Mudei!"

    // }


    // addEventListener

    // div add um observador em vc que toda vez que o mouse estiver
    // dentro de vc executa a função passada como argumento

    // function qualquerNome() {
    //     div.innerText = 'Olá! Seja bem-vind@!'
    // }

    // div.addEventListener('mouseenter', qualquerNome)


    div.addEventListener('mouseenter', function () {
        div.innerText = 'Olá! Seja bem-vind@!'
    })

    div.addEventListener('mouseout', function () {
        div.innerText = "Até logo!"
    })

    div.addEventListener('mousemove', function () {
        div.innerText = 'Vc tá se movendo!'
        div.style.backgroundColor = bgChange()
    })

    div.addEventListener('click', function () {
        if (div.innerText == "Vc tá clicando em mim!") {
            div.innerText = "Vc tá clicando de novo!"
        } else {
            div.innerText = "Vc tá clicando em mim!"
        }
    })

    // div.addEventListener('mousemove', function() {
    //     div.innerText = 'Você está movendo o mouse sobre mim'
    //     div.style.backgroundColor = bgChange();
    // })

    // div.addEventListener('click', e => {
    //     div.innerText = 'Click!'
    // })

    // div.addEventListener('click', e => {
    //     div.style.backgroundColor = 'purple'
    //     console.log(e)
    // })

    // div.removeEventListener('click', e => {
    //     div.style.backgroundColor = 'purple'
    //     console.log('remove')
    // })
})


