/* FOREACH
Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach. */

const imagens = document.querySelectorAll("img");

imagens.forEach(function (item) {
  //console.log(item);
});

/* PARÂMETROS DO FOREACH
O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Esse função pode receber três parâmetros: valorAtual, index e array; */

// const imgs = document.querySelectorAll("img");

/*imgs.forEach(function (valorAtual, index, array) {
  console.log(item); // o item atual no loop, pode ter qualquer nome
  console.log(index); // o número do index
  console.log(array); // a Array completa
});*/

/* FOREACH E ARRAY
forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array. */

// A método getElementsByClassName retorna uma html colletion e não uma node list, node list é um objeto array-like, uma html colletion não, portanto precisa ser convertida para um array primeiramente antes de se usar o método forEach
const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);

// titulosArray.forEach(function (item) {
//   console.log(item);
// });

/* ARROW FUNCTION
Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.
*/

// const imgs = document.querySelectorAll("img");

// imgs.forEach((item) => {
//   console.log(item);
// });

/* ARGUMENTOS E PARÊNTESES */

// const imgs = document.querySelectorAll('img');

// // argumento único não precisa de parênteses
// imgs.forEach(item => {
//   console.log(item);
// });

// // multiplos argumentos precisam de parênteses
// imgs.forEach((item, index) => {
//   console.log(item, index);
// });

// // sem argumentos precisa dos parênteses, mesmo vazio
// let i = 0;
// imgs.forEach(() => {
//   console.log(i++);
// });

// ---------------- É melhor utilizar os parênteses ---------------------------

/* RETURN
É possível omitir as chaves {} para uma função que retorna uma linha. */

// const imgs = document.querySelectorAll('img');

// imgs.forEach(item =>
//   console.log(item)
// );

// imgs.forEach(item => console.log(item));

// ---------------- Não é permitido fechar a linha com ; ---------------------------

// EXERCICIO

// Mostre no console cada parágrado do site
const p = document.querySelectorAll("p");
console.log(p);

// Mostre o texto dos parágrafos no console
p.forEach((item) => {
  console.log(item.innerText);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
