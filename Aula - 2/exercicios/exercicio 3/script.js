/*
  Exercício 3
  -----------

  Instruções:

  1. crie uma página HTML com um h1 de "Minha lista de Livros"

  2. crie um array com objetos contendo informações dos livros que você mais gosta.
  
  ex.: {
    title: "Harry Potter e a Pedra Filosofal",
    author: "J. K. Rowling",
  }

  4. percorra pelo array de livros e, para cada livro, crie uma div que receba o título e autor do livro e 
  adicione essa div na página.

  Bonus: adicione uma propriedade com a capa do livro e crie também um img para cada livro

*/

// criando o array de objetos
const arrayLivros = [
  {
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J. K. Rowling",
    capa: "./capa.jpeg"
  },
  {
    titulo: "Harry Potter e a Câmara Secreta",
    autor: "J. K. Rowling",
    capa: "./capa.jpeg"
  },
  {
    titulo: "Harry Potter e a Ordem da Fênix",
    autor: "J. K. Rowling",
    capa: "./capa.jpeg"
  },
  {
    titulo: "Harry Potter e o Enigma do Principe",
    autor: "J. K. Rowling",
    capa: "./capa.jpeg"
  }
]


// acessando o body do html com querySelector
const body = document.querySelector('body')

// percorrendo o array de livros usando o for
for (let contador = 0; contador < arrayLivros.length; contador++) {
  // console.log no titulo e autor dos livros
  //console.log('Titulo', arrayLivros[contador].titulo, "Autora", arrayLivros[contador].autor)

  // criando a div que vai receber as info do livro
  const divLivro = document.createElement('div')

  // criar um h2 para receber o titulo do livro
  const tituloH2 = document.createElement('h2')
  tituloH2.innerText = `Título: ${arrayLivros[contador].titulo}`

  // criar um paragrafo que vai receber a autora do livro
  const autoraParagrafo = document.createElement('p')
  autoraParagrafo.innerText = `Autora: ${arrayLivros[contador].autor}`

  // criar img para receber a capa do livro
  const capaImg = document.createElement('img')
  capaImg.src = arrayLivros[contador].capa

  //adicionando o tituloH2 e o autoraParágrfo dentro da divLivro
  divLivro.appendChild(capaImg)
  divLivro.appendChild(tituloH2)
  divLivro.appendChild(autoraParagrafo)

  // adicionando divLivro no body
  body.appendChild(divLivro)

  // outra forma de referenciar o body aqui
  //document.body.appendChild(divLivro)
  
  console.log(divLivro)

}














// const body = document.querySelector('body')

// for(let contador = 0; contador < arrayLivros.length; contador++){

//   const livroContainer = document.createElement('div')

//   livroContainer.innerText = `Título: ${arrayLivros[contador].titulo} - Autora: ${arrayLivros[contador].autor}`

//   body.appendChild(livroContainer)

// }