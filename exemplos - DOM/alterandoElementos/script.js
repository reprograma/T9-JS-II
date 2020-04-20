// sempre declarar a referencia do seu elemento
const div = document.querySelector('#div')
const outraDiv = document.querySelector('#outradiv')
const paragrafo = document.querySelector('p')
const strong = document.querySelector('strong')
const imagem = document.querySelector('img')

const botao = document.querySelector('button')

//botao = "alguma"

botao.innerText = "algumacoisa"

// ------------------------------------------------------
//altera o conteúdo textual do elemento
//console.log(strong.innerText)

//strong.innerText = "Olá, Marisa!"

// strong.innerText = "Alterado"

// console.log(strong.innerText)

//-------------------------------------------
//altera o conteúdo HTML do elemento

//substitui o valor todo pela string
//div.innerHTML = "<h2>HTML add por JS</h2>"

//concatena o valor atual com o valor atribuido
//div.innerHTML += "<h2>HTML somando com o valor atual</h2>"

// -----------------------------------------------
// alterar o conteúdo do body 
// document.body.innerHTML = ...

// ---------------------------------------------
//altera o estilo do elemento
// outraDiv.style.height = "200px"
// outraDiv.style.width = '200px'
// outraDiv.style.backgroundColor = "red"

// div.style.backgroundColor = "red"
// div.style.padding = "10px"

//paragrafo.style.color = "#fff"

//----------------------------------------------

//chamando classList
// o classList é uma lista de todas as classes definidas no HTML para o elemento
//adicionando uma classe na lista de classes do meu elemento
//console.log(div.classList)
//div.classList.add('divAlteradaPorJS')
//console.log(div.classList)

//removendo classes
//div.classList.remove('divAlteradaPorJS', 'divCSS')

// -----------------------------------------------
// alterando atributos HTML

//imagem.src = "https://media.giphy.com/media/7wDEaTbCupuRq/giphy.gif"

// usando setAtributte
// div.setAttribute("id", "idNOvo")

// botao.name = "logout"

// div.setAttribute("name", "logout")

// console.log(botao.name)