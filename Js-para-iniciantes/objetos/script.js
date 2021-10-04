// OBJETOS
// Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.
var pessoa = {
  nome: "Marcos",
  idade: 22,
  profissao: "Web Developer",
  possuiFaculdade: true,
};

console.log(pessoa.nome); // 'Marcos'
console.log(pessoa.possuiFaculdade); // true
// Propriedades e métodos consistem em nome (chave) e valor

// MÉTODOS
// É uma propriedade que possui uma função no local do seu valor.

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

console.log(quadrado.lados); // 4
console.log(quadrado.area(5)); // 25
console.log(quadrado.perimetro(5)); // 20

// Abreviação de area: function() {} para area() {}, no ES6+
// Não há a necessidade de escrever function e nem os dois pontos, simplesmente use o nome da função, os parênteses e os parametros, se houver.

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};

// ORGANIZAR O CÓDIGO
// Objetos servem para organizar o código em pequenas partes reutilizáveis.

Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14

// Math é um objeto nativo de JavaScript. Já percebeu que console é um objeto e log() um método?

// CRIAR UM OBJETO
// Um objeto é criado utilizando as chaves {}

var carro = {};
var pessoa = {};

console.log(typeof carro); // 'object'

// DOT NOTATION GET
// Acesse propriedades de um objeto utilizando o ponto .

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};

var bg = menu.backgroundColor; // '#84E'
console.log(bg);

// DOT NOTATION SET
// Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};

menu.backgroundColor = "#000";
console.log(menu.backgroundColor); // '#000'

// ADICIONAR PROPRIEDADES E MÉTODOS
// Basta adicionar um novo nome e definir o valor.

var menu = {
  width: 800,
};

menu.height = 50; // Nova propríedade
menu.position = "fixed";
// Novo método
menu.newWidth = function (novaLargura) {
  menu.width = novaLargura;
};

console.log(`Antigo valor de width: ${menu.width}`);
menu.newWidth(400);
console.log(`Novo valor de width: ${menu.width}`);

// PALAVRA-CHAVE THIS
// this irá fazer uma referência ao próprio objeto.

var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
    // sem o this, o objeto irá pegar o valor de height, variavel fora do objeto, e não a propriedade height do objeto menu
  },
};

menu.metadeHeight(); // 25
// sem o this, seria 60

// PROTÓTIPO E HERANÇA
// O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.

var menu = {
  width: 800,
};

menu.hasOwnProperty("width"); // true
menu.hasOwnProperty("height"); // false

// hasOwnProperty é um método de Object, que o objeto menu herda automaticamente ao ser declarado um tipo Object.

// EXERCÍCIO

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var pessoa = {
  nome: "Marcos",
  sobrenome: "Lopes",
};

// Crie um método no objeto anterior, que mostre o seu nome completo
var pessoa = {
  nome: "Marcos",
  sobrenome: "Lopes",
  mostraNome() {
    return console.log(`O meu nome é ${this.nome} ${this.sobrenome}`);
  },
};

pessoa.mostraNome();

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  viuHomem() {
    return console.log("Está latindo...");
  },
};
console.log(cachorro);
cachorro.viuHomem();

// TUDO É OBJETO
// Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.

var nome = "André";

nome.length; // 5
nome.charAt(1); // 'n'
nome.replace("ré", "rei"); // 'Andrei'
nome; // 'André', os métodos anteriores NÃO alteram o valor da variável

// NÚMEROS
var altura = 1.8;

altura.toString(); // '1.8', converte o valor de number para string
altura.toFixed(); // '2', arredonda o valor

// Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos

// FUNÇÕES
// Funções também são objetos.
function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString(); // converte todo o conteúdo da função em uma string
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

areaQuadrado.length; // 1, retorna a quantidade de argumentos que uma função recebe

// ELEMENTOS DO DOM
var btn = document.querySelector(".btn"); // seleciona no document (html) os elementos que possuem a classe btn

btn.classList.add("azul"); // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener("click", function () {
  console.log("Clicou");
});

// Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.
// OBJETOS REVOLUCIONARAM A PROGRAMAÇÃO
// Web API's são métodos e propriedades que permitem a interação JavaScript e Browser.

// EXERCÍCIO

// nomeie 3 propriedades ou métodos de strings
var nome = "Marcos";
// bold
// charAt
// slice

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector(".btn");
// addEventListener
// id
// innerHtml
// outerHtml
// appendChild

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
