// OBJETOS
// Criar um objeto é simples, basta definirmos uma variável e iniciar a definição do seu valor com chaves {}. Mas e se precisarmos criar um novo objeto, com as mesmas características do anterior? É possível com o Object.create, mas veremos ele mais tarde.

// const carro = {
//   marca: "Marca",
//   preco: 0,
// };

// const honda = carro;
// honda.marca = "Honda";
// honda.preco = 2000;

// const fiat = carro;
// fiat.marca = "fiat";
// fiat.preco = 3000;

// carro, fiat e honda apontam para o mesmo objeto, gerando o mesmo resultado para os objetos.

// CONSTRUCTOR FUNCTIONS
// Para isso existem as Constructor Functions, ou seja, Funções Construtoras que são responsáveis por construir novos objetos sempre que chamamos a mesma.

// function Carro() {
//   this.marca = "Marca";
//   this.preco = 2000;
// }

// const honda = new Carro();
// const fiat = new Carro();

// PARÂMETROS E ARGUMENTOS
// Podemos passar argumentos que serão utilizados no momento da criação do objeto.

function Carro(marcaAtribuido, precoAtribuido) {
  this.marca = marcaAtribuido;
  this.preco = precoAtribuido;
}

const honda = new Carro("Honda", 3000);
const fiat = new Carro("Fiat", 4000);

function Carro2(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = taxa * precoInicial;
  this.marca = marca;
  this.preco = precoFinal;
}

const mazda = new Carro2("Mazda", 5000);
