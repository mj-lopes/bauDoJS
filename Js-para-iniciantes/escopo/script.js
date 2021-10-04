/* ESCOPO DE FUNÇÃO
Variáveis declaradas dentro de funções não são acessadas fora das mesmas. */
function mostrarCarro() {
  var carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined
// Escopo evita o conflito entre nomes.

/* VARIÁVEL GLOBAL (ERRO)
Declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser acessar em qualquer escopo (global). Isso é um erro. */

// 'use strict';
function mostrarCarro() {
  fusca = "Fusca";
  console.log(fusca);
}

mostrarCarro(); // Fusca
console.log(fusca); // Fusca

//'use strict' impede isso.

/* ESCOPO DE FUNÇÃO (PAI)
Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções. */

var carros = "Fusca";

function mostrarCarros() {
  var frase = `Meu carro é um ${carros}`;
  console.log(frase);
}

mostrarCarros(); // Meu carro é um Fusca
console.log(carros); // Fusca

/* ESCOPO DE BLOCO
Variáveis criadas com var, vazam o bloco (condicionais, loops ou blocos de {} sem ser funções). Por isso com a introdução do ES6 a melhor forma de declarmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco. */

if (true) {
  let moto = "CG";
  console.log(moto);
}
// console.log(moto); // CG se usado var, usando let ou const é consta que a variavel não é definida

/* VAR VAZA O BLOCO
Mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting e o valor ficará como undefined. */

if (false) {
  var carro = "Fusca";
  console.log(carro);
}
console.log(carro); // undefined

/* CONST E LET NO LUGAR DE VAR
A partir de agora vamos utilizar apenas const e let para declarmos variáveis. */

if (true) {
  const moto = "cg500";
  console.log(moto);
}
// console.log(moto); // erro, moto is not defined

/* {} CRIA UM BLOCO
Chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {} */

{
  var carro2 = "Fusca 2";
  const ano = 2018;
}
console.log(carro2); // Carro
// console.log(ano); // erro ano is not defined

/* FOR LOOP
Ao utilizar var dentro de um for loop, que é um bloco, o valor do variável utilizada irá vazar e existir fora do loop. */

for (var i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // 10

/* FOR LOOP COM LET
Com o let evitamos que o número vaze. */

for (let j = 0; j < 10; j++) {
  console.log(`Número ${j}`);
}
// console.log(j); // j is not defined

/* CONST
Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código. */

const mes = "Dezembro";
// mes = "Janeiro"; // erro, tentou modificar o valor
// const semana; // erro, declarou sem valor
// const mes = "Janeiro"; // erro, o valor já foi declarado

const data = {
  dia: 28,
  mes: "Dezembro",
  ano: 2018,
};

data.dia = 29; // Funciona, é possivel mudar as propriedades de um objeto mesmo declarado como const
// data = "Janeiro"; // Erro, tentou modificar o valor

// Variáveis com valores constantes devem utilizar o const.

/* LET
Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável. */

let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

// let ano = 2020; // erro, redeclarou a variável

// Geralmente vamos utilizar o const.

// EXERCÍCIO

// Por qual motivo o código abaixo retorna com erros?
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
}
// console.log(cor, marca, portas);
// Pois const e let não vazam os valores fora do escopo de bloco, porém var sim. marca e portas só existem dentro do escopo do bloco, não fora dele.

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  // const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
somarDois(4);
dividirDois(6);
// a variável 'dois' só existia dentro do escopo da função somarDois, então é necessário passa-la para fora da função para que ela seja acessivel pela função dividirDois.

// O que fazer para total retornar 500?
var numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);

// transformar a variável numero de dentro do for de var para let, para que o valor de numero não altere o valor de var numero fora do for loop.
