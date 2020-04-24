const cor = ["azul", "vermelho", "roxo", "rosa", "preto", "branco"]

// gera numeros randomicos
// Math.floor(Math.random() * o limite))

//console.log('random', Math.floor(Math.random() * 5))

const numeroRandomico = Math.floor(Math.random() * cor.length)

// console.log('tamanho do array', cor.length)

//console.log(cor[numeroRandomico])

let bg = 'white'

if(bg == "white") {
    bg = "black"
} else {
    bg = "white"
}

