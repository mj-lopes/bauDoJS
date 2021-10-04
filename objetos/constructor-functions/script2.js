// EXEMPLO REAL
// Quando mudamos a propriedade seletor, o objeto Dom irá passar a selecionar o novo seletor em seus métodos.

// const Dom = {
//   seletor: "li",
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     return this.element().classList.add("ativado");
//   },
// };

// function Dom(seletor) {
//   this.element = function () {
//     return document.querySelector(seletor);
//   };
//   this.ativar = function () {
//     this.element().classList.add("ativado");
//   };
// }

// const li = new Dom("li");
// const ul = new Dom("ul");

// EXERCÍCIOS

// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: "Nome pessoa",
  idade: 0,
  andar() {
    console.log(this.nome + " andou");
  },
};

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function() {
    console.log(this.nome + " andou");
  };
}


// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const joao = new Pessoa("João", 20);
const maria = new Pessoa("Maria", 25);
const bruno = new Pessoa("Bruno", 15);


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom (seletor) {
  this.elements = document.querySelectorAll(seletor);
  
  this.addClass = function (classe) {
    this.elements.forEach((elemento) =>{
      elemento.classList.add(classe);
    });
  }

  this.removeClass = function (classe) {
    this.elements.forEach((elemento) =>{
      elemento.classList.remove(classe);
    });
  }
}

const lis = new Dom('li');