/* ID
getElementById seleciona e retorna elementos do DOM */

// Seleciona pelo ID
const animaisSection = document.getElementById("animais");
const contatoSection = document.getElementById("contato");

// Retorna null caso não exista
const naoExiste = document.getElementById("teste");

/* CLASSE E TAG
getElementsByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.
 */

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName("grid-section"); // seleciona todos que tiver a classe, mesmo que retorne somente um
const contato = document.getElementsByClassName("grid-section contato"); // seleciona todos que tiver ambas classes

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName("ul");

// Retorna o elemento baseado no seu posicionamento através do index
console.log(gridSection[0]); // animais
console.log(gridSection[1]); // faq

/* SELETOR GERAL ÚNICO
querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.
*/

const animais = document.querySelector(".animais"); // classe
const contact = document.querySelector("#contato"); // id
const ultimoItem = document.querySelector(".animais-lista li:last-child"); // classe usando o atributo especial para selecionar o ultimo elemento da tag
const linkCSS = document.querySelector('[href^="https://"]'); //
const primeiroUl = document.querySelector("ul"); // tag

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector("li"); // É possivel usar o querySelector tbm dentro de um elemento já selecionado. No caso a busca será apenas dentro do UL selecionado anteriormente.

/* SELETOR GERAL LISTA
querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList 
*/

const grid = document.querySelectorAll(".grid-section");
const listas = document.querySelectorAll("ul");
const titulos = document.querySelectorAll(".titulo");
const fotosAnimais = document.querySelectorAll(".animais-lista img");

// Retorna o terceiro elemento
console.log(grid[2]);

// Diferente do getElementsByClassName, a lista aqui é estática

/* HTMLCOLLECTION VS NODELIST
A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática.*/

const titulo = document.querySelector(".titulo");
const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

titulo.classList.add("grid-section");

console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens

/* ARRAY-LIKE
HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList. */

const gridSections = document.querySelectorAll(".grid-section");

gridSections.forEach(function (gridItem, index, array) {
  gridItem.classList.add("azul");
  console.log(index); // index do item na array
  console.log(array); // a array completa
});
// É possível transformar array-like em uma Array real, utilizando o método Array.from(gridSection)

// EXERCÍCIO

// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll("img");
console.log(imagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const unicasImagens = document.querySelectorAll('img[src^="img/imagem"]');
console.log(unicasImagens);

// Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelectorAll('[href^="#"]');
console.log(linksInterno);

// Selecione o primeiro h2 dentro de .animais-descricao
const animais_desc = document.querySelector(".animais-descricao");
const primeiroH2 = animais_desc.querySelector("h2");
console.log(primeiroH2);

// Selecione o último p do site
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos[paragrafos.length - 1]);
