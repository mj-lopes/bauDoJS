// PROTOTYPE
// A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada.

// EM PROTOTYPE É POSTO QUAIS QUER MÉTODOS E PROPRIEDADES GENERALISTAS PARA UMA "CLASSE" PARA EVITAR QUE SEJA REESCRITO OU REDECLARADO, TODA PESSOA ANDA, ENTÃO NÃO PRECISA SER DECLARADO NA "CLASSE" PESSOA, PORÉM, CADA PESSOA TEM IDADE E NOMES PROPRÍOS E DIFERENTES ENTRE SI, ENTÃO POR ISTO PRECISAM SER DECLARADAS NA CLASSE PESSOA, PARA EVITAR QUE UMA INSTANCIA DESTA CLASSE ALTERE O VALOR DE PROPRIEDADE DE OUTRA INSTANCIA DA MESMA CLASSE

// Em resumo, é como JS lida com herença

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = function () {
  return this.nome + " andou";
};

const marcos = new Pessoa("Marcos", 22);

// É possivel adicionar a prototype propriedades e métodos. É possivel adicionar a uma classe/function, porém não diretamente a um objeto instânciado de uma classe. Ex.: marcos.prototype.andar... Neste caso é adicionado a classe Pessoa, e é possivel acessar esse método/propriedade pelo objeto diretamente (marcos.andar) pois a classe Pessoa herda de prototype

// CONSTRUTORES NATIVOS
// Objetos, Funções, Números, Strings e outros tipos de dados são criados utilizando construtores. Esses construtores possuem um protótipo com propriedades e métodos, que poderão ser acessadas pelo tipo de dado.

const pais = "Brasil";
const cidade = new String("Mucuri");

const listaAnimais = ["Cachorro", "Gato", "Lagarto"];

const lista = document.querySelectorAll("li"); // retorna uma nodelist

// Transforma em uma array
const listaArray = Array.prototype.slice.call(lista);

// Existe o método Array.from() tbm para essa função

/* ENTENDA O QUE ESTÁ SENDO RETORNADO
Os métodos e propriedades acessado com o . são referentes ao tipo de dados que é retornado antes desse .*/

// const carro = {
//   marca: "Ford",
//   preco: 2000,
//   andar() {
//     return true;
//   },
// };

// Carro; // Object
// Carro.marca; // String
// Carro.preco; // Number
// Carro.andar; // Function
// Carro.andar(); // Boolean
// Carro.marca.charAt; // Function
// Carro.marca.charAt(0); // String

// Verifique o nome do construtor com .constructor.name

// EXERCÍCIOS

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoas.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};

const joao = new Pessoas("João", "Otávio", 25);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li; //HTMLLIElement
li.click; //function
li.innerText; //string
li.value; //number
li.hidden; //boolean
li.offsetLeft; //number
li.click(); //undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
// String, pois retorna uma STRING escrito "Boolean"
