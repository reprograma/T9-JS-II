const div = document.querySelector('div')
const paragrafo = document.querySelector('#paragrafo')
const h1 = document.querySelector('h1')

console.log("div", div)
console.log("paragrafo", paragrafo)


/// VOLTANDO AO APPEND
// tanto o appendChild quanto o append, necessitam do 
// elemento pai para adicionar o elemento filho!!!!

// DIFERENTE DO REMOVE 
// APENAS O removeChild PRECISA DO ELEMENTO PAI PARA ELIMINAR O FILHO
// JÁ O REMOVE NÃO LEVA ARGUMENTOS E REMOVE O ELEMENTO QUE ESTÁ 
// CHAMANDO ELE

// removendo o paragrafo da div
// o appendChild REMOVE O FILHO (PASSADO NO ARGUMENTO) DO ELEMENTO PAI
div.removeChild(paragrafo)


// removendo h1 sem referenciar o elemento pai
// O REMOVE REMOVE O ELEMENTO QUE CHAMA ELE
h1.remove()


function removeItem() {
    const item = document.querySelector('#remove')
    div.removeChild(item)
}

