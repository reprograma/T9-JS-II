const div = document.querySelector('#box')
const button = document.querySelector('#button')
const buttonInline = document.querySelector("#inline")


function random(number) {
    return Math.floor(Math.random() * number);
}

function bgChange() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    return rndCol;
}


// propriedade do elemento

button.onclick = function () {
    button.innerText = 'Ok!'
}

button.onclick = function () {
    button.style.backgroundColor = 'yellow'
}

//Inline 

function teste(){
    buttonInline.innerText = "Mudei!"
    
}


// addEventListener

div.addEventListener('mouseenter', () => {
    div.innerText = 'Olá! Seja bem-vind@!'
})

div.addEventListener('mouseout', () => {
    div.innerText = 'Até logo!'
})

div.addEventListener('mousemove', () => {
    div.innerText = 'Você está movendo o mouse sobre mim'
    div.style.backgroundColor = bgChange();
})

div.addEventListener('click', e => {
    div.innerText = 'Click!'
})

div.addEventListener('click', e => {
    div.style.backgroundColor = 'purple'
    console.log(e)
})

div.removeEventListener('click', e => {
    div.style.backgroundColor = 'purple'
    console.log('remove')
})