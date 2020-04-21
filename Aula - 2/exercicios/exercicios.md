### Exercícios - Aula 2
#

### Exercício 1 

A função insertion cria elementos no DOM e para isso recebe três argumentos, o elemento, o ID de um elemento já existente no seu HTML e o texto que será inserido no elemento criado. 

```
function insertion(el,id,text){
    //seu código aqui
}

//a função de criar um parágrafo dentro do elemento com ID "conteudo" e com o texto "Fui criado com Javascript"
insertion('p', "conteudo", "Fui criado com Javascript")
```

### Exercício 2

1. Mude o estilo do body para que a font-family seja "Arial, sans-serif"

2. Substitua cada span com informações suas.

3. Percorra por cada li e altere sua propriedade class para "list-item". Em seguida adicione no HTML a tag style com a classe "list-item"
para que a propriedade color de cada li seja red.

4. Crie um elemento img e coloque no atributo src uma foto sua. Não se esqueça de adicionar o novo elemento na página.

### Exercício 3

1. crie uma página com um h1 de "Minha lista de Livros"

2. crie um array com objetos contendo informações dos livros que você mais gosta.

    ex.: 
    ```
    {
        title: "Harry Potter e a Pedra Filosofal",
        author: "J. K. Rowling",
    }
    ```

4. percorra pelo array de livros e, para cada livro, crie uma div com o título e autor do livro e 
adicione ela na página.

Bonus: adicione uma propriedade com a URL da imagem da capa do livro e crie também um img para cada livro


### Exercício 4

1. Crie um array com o nome de todas as alunas da turma
2. selecione o elemento "lista-alunas"
3. crie uma função com a lógica que cria elementos "li" com o nome de cada aluna, e adicione na lista de alunas.