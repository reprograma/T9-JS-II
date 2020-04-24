/*
  Exercício 1
  -----------

  Faça o gato falar!

  1. acessar e guardar o elemento que contém a imagem do gato
  2. criar uma função que execute uma lógica para alterar o texto da div "cat-chat"
  3. adicionar um observador de eventos na imagem do gato que faça com que ao clicar na imagem
  o texto da div "cat-chat" seja alterado.

    
*/

//seu código vai aqui

window.addEventListener('DOMContentLoaded', () => {
  // selecionando a imagem do gato no HTML
  const gato = document.querySelector('#cat-pic')

  // declarando um função que altera o conteúdo textual da div com o id "cat-chat"
  const falaGato = (event) => {
    console.log("evento:", event)

    // selecionando a div cat-chat
    const miau = document.querySelector('#cat-chat')

    // alterando o texto da div miau
    miau.innerText = "Meowwwww"
  }

  // add um evento click na imagem (gato) para que a faleGato() seja executada
  gato.addEventListener('click', falaGato)
})

