/*
  Exercício 3
  -----------

    Removendo itens com cliques

    Instruções:

    1. selecione os itens - gatinhos
    2. crie uma função com a lógica para alterar o estilo dos itens.
    3. adicione um observador de evento em todos os itens

*/

window.addEventListener('DOMContentLoaded', function () {

  const gatinhos = document.querySelectorAll('.item__imagem')

  for (let i = 0; i < gatinhos.length; i++) {
    const estilo = () => {
      gatinhos[i].style.display = 'none'
    }
    gatinhos[i].addEventListener('click', estilo)
  }

  console.log(gatinhos)
  
})


