const cor = ["azul", "vermelho", "roxo", "rosa", "preto", "branco"]


// gera numeros randomicos
// Math.floor(Math.random() * o limite))

const numeroRandomico = Math.floor(Math.random() * cor.length)

console.log('tamanho do array', cor.length)

console.log(cor[numeroRandomico])