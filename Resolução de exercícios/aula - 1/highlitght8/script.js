/*
  Exercício 1
  -----------

  Marque todas as palavras que possuem mais de 8 caracteres com um um background amarelo.

  Dica: procure sobre os métodos split, map e join.
    
*/

//primeiro passo - selecionar o parágrado do HTML
const paragrafo = document.querySelector('p')


// o método split quebra uma string em um array
// split recebe como oargumento o separador 

//segundo passo - criei um array com o texto do parágrafo
const arrayPalavras = paragrafo.innerText.split(" ")

// terceiro passo - criar um array que vai receber o novo texto com as palavras maiores que 8 marcadas de amarelo
let novoTexto = []
console.log(novoTexto)

// quarto passo - andei pelo array e verifiquei o tamanho de cada palavra
for(let contador = 0; contador < arrayPalavras.length; contador++){
    if(arrayPalavras[contador].length > 8){
        novoTexto.push('<span style="background-color: yellow;">' + arrayPalavras[contador] + '</span>')
    }
}

console.log(novoTexto)




// método replace 
// troca um valor por outro em string 
// const teste = "Brennda.Farinha"
// let testeSemPonto

// console.log(teste)
// testeSemPonto =  teste.replace('Farinha', "cuscuz")
// console.log(testeSemPonto)























// const paragrafo = document.querySelector('p')

// const arrayPalavras = paragrafo.innerText.split(' ')
// let newContent = []

// for (let count = 0; count < arrayPalavras.length; count++) {
//     if (arrayPalavras[count].length > 8) {
//         newContent.push('<span style="background-color: yellow">' + arrayPalavras[count] + '</span>')
//     } else {
//         newContent.push(arrayPalavras[count])
//     }
// }












// forma avançada 
// paragrafo.innerHTML = paragrafo.innerText.split(' ').map(
//     (palavra) =>
//         palavra.length > 8 ?
//             '<span style="background-color: yellow">' + palavra + '</span>'
//             : palavra

// ).join(' ')


//paragrafo.innerHTML = newContent.join(' ')
