const body = document.querySelector('body')

// criando elementos
const paragrafo = document.createElement('p')
const imagem = document.createElement('img')

const lista = document.createElement('ul')
const item = document.createElement('li')

console.log('paragrafo', paragrafo)
console.log('imagem', imagem)
console.log("lista", lista)
console.log('item', item)


paragrafo.innerText = "Olá! Fui criado com Javascript!"
imagem.src = "https://media.giphy.com/media/gH9mmqt8VKfe0/giphy.gif"
imagem.classList.add('classeImagem')
item.innerText = "Item de lista criado com JS!"

// console.log("paragrafo", paragrafo) 

//adicionando elementos

// "body adiciona esse parágrafo como seu filho"
body.appendChild(paragrafo)

// "body adiciona essa imagem como sua filha"
body.appendChild(imagem)


// // "body adiciona essa lista como sua filha"
body.appendChild(lista)


// "lista adiciona esse item como seu filho"
lista.appendChild(item)

// console.log(lista)

const namesArray = ['ana', 'patricia', 'milena', 'liana']

for(let contador = 0; contador < namesArray.length; contador++){
    //criei o li
    const nomeLi = document.createElement('li')
    // adicionei o nome no li
    nomeLi.innerText = namesArray[contador]
    lista.appendChild(nomeLi)
}

