//Mostrar todos os métodos para selecionar elementos no DOM

// acessando pela TagName
// um array de elementos
// [elemento, elemento, ...]
// me retorna mais de um elemento
// const meuarraydeh2 = document.getElementsByTagName('h2')
// console.log(meuarraydeh2)

// for (let count = 0; count < meuarraydeh2.length; count++) {
//     console.log(meuarraydeh2[count])
// }

//console.log("por tag", document.getElementsByTagName('h2')


//acessando pelo atributo ID
// retorna um único elemento
// const sectionA = document.getElementById('a')
// console.log(sectionA)


//acessando pelo atributo name
// retorna um array de elementos com o atributo name
// const email = document.getElementsByName('email')
// console.log(email)

// const cores = document.getElementsByName('cor')
// console.log(cores)

// for (let count = 0; count < cores.length; count++){
//     console.log(cores[count])
// }


//acessando pelo atributo class
// const btns = document.getElementsByClassName('purple-btns')
// console.log(btns)

// for (let count = 0; count < btns.length; count++){
//     console.log(btns[count])
// }


// acessar com querySelector 


const meuArrayDeH2 = document.querySelectorAll('h2')
console.log(meuArrayDeH2)

const sectionA = document.querySelector('#a')
console.log(sectionA)

const cores = document.querySelectorAll('input[name="cor"]')
console.log(cores)

const btns = document.querySelector('.purple-btns')
console.log(btns)