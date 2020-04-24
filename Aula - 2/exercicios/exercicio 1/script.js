/*
  Exercício 1
  -----------

  A função insertion cria elementos no DOM e para isso recebe três argumentos, o elemento, o ID de um elemento
  já existente no seu HTML e o texto que será inserido no elemento criado. 
  
  
*/

// entenda argumento como um dado que a sua função vai receber de "fora" ao ser
// invocada, e dentro da função vc pode utilizar cada um desses argumentos

// criando a função que recebe três argumentos
function insereElementoDeTexto(elemento,id,texto){
  
  // criamos um elemento novo que recebe o retorno do método
  // createElement, e createElement vai criar um elemento especificado no
  // argumento "elemento"
  const elementoNovo = document.createElement(elemento)

  // inserindo texto dentro do elementoNovo - usando o innerText
  elementoNovo.innerText = texto

  // seleciona um elemento existente através do argumento ID
  // ex.: "#iddoelemento"
  const elementoExistente = document.querySelector(`#${id}`)

  // inserindo o elementoNovo dentro do elementoExistente usando appendChild
  elementoExistente.appendChild(elementoNovo)

}

// executando a função passando os argumentos
//a função de criar um parágrafo dentro do elemento com ID "conteudo" e com o texto "Fui criado com Javascript"
insereElementoDeTexto('h1', "container", "Fui criado com JS dentro da div container :)")

insereElementoDeTexto('p', 'outraDiv', "Fui criado com JS dentro da div outraDiv :)")

insereElementoDeTexto('strong', "texto", " agora melhor ainda com JS")

// definindo string

// aspas duplas 
//"string"

//aspas simples 
//'string' == "string"

// erro
//'string'


// REVISÃO DE FUNÇÕES

// cria a função 
// pode não receber nenhum argumento
// function nomeDaFunção() {
//   // bloco de código que a função vai executar
// }

// executando a função sem args
// nomeDaFunção()

// // a função pode receber n = vários argumentos
// function funcComVariosArgumentos(argumento1, argumento2, argumento3) {
//   // bloco de código que a função vai executar
//   console.log(argumento1, argumento2, argumento3)
// }

// // executando função com args
// funcComVariosArgumentos(1, 2, 3)


