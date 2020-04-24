/*
  Exercício 2
  -----------

  Adicionar tarefas

  1. selecione o input e o botão da página.
  2. crie uma função "addTarefa" que adicione os valores inseridos no input dentro de uma div na página.
  3. adicione um observador de "click" no botão para executar a função addTarefa.

*/

//seu código vai aqui

window.addEventListener('DOMContentLoaded', function () {
  // COLOCAR TODO O CÓDIGO AQUI

  // selecionando input
  const input = document.querySelector('#input')

  // selecionando o botão
  const botao = document.querySelector('#add')

  // selecionando a div de tarefas
  const listaTarefas = document.querySelector('#lista')

  // declarando a função addTarefa
  function addTarefa() {
    // criando um li para receber a tarefa do input
    const tarefa = document.createElement('li')

    // atribuindo ao innerText do li (tarefa) o valor do input
    tarefa.innerText = input.value

    // adciona tarefa (li) dentro da lista de tarefas (ul)
    listaTarefas.appendChild(tarefa)
  }

  // adicionando evento de click no botão
  botao.addEventListener('click', addTarefa)
})





// para pegar o valor que está sendo inputado no input precisamos
// acessar o atributo value desse input.
// input.value

// botao.addEventListener('click', function() {
//   console.log(input.value)
// })




// change é evento que podemos adicionar no input
// input.addEventListener('change', function() {
//   console.log('estou sendo inputado')
// })