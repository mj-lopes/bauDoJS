// FUNÇÕES
/* Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor. */

function areaQuadrado(lado) {
  console.log(lado * lado);
}
// Chamada de function declaration, a declaração da função areaQuadrado

areaQuadrado(10);

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7
// Parênteses () executam uma função

// PARÂMETROS E ARGUMENTOS
/* Ao criar uma função, você pode definir parâmetros.
Ao executar uma função, você pode passar argumentos. */

// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

imc(80, 1.8); // 80 e 1.80 são os argumentos
imc(60, 1.7); // 60 e 1.70 são os argumentos

// Separar por vírgula cada parâmetro. Você pode definir mais de um parâmetro ou nenhum também

// PARÊNTESES EXECUTA A FUNÇÃO
function corFavorita(cor) {
  if (cor === "azul") {
    return "Você gosta do céu";
  } else if (cor === "verde") {
    return "Você gosta de mato";
  } else {
    return "Você gosta de nada";
  }
}
corFavorita(); // retorna 'Você não gosta de nada', caso não tenha como executar a função sem a passagem de um parâmetro
// é retornado um 'undefined'

//ARGUMENTOS PODEM SER FUNÇÕES
//Chamadas de Callback, geralmente são funções que ocorrem após algum evento.

addEventListener("click", function () {
  console.log("Clicou");
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

//PODE OU NÃO RETORNAR UM VALOR
/* Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não. */

function imc2(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc2(80, 1.8); // retorna o imc
console.log(imc2(80, 1.8)); // retorna o imc e undefined

// VALORES RETORNADOS
// Uma função pode retornar qualquer tipo de dado e até outras funções.

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    // verifica se o valor é um number, um número
    return "Por favor informe um número válido!";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade("60anos"));
// Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa prática de programação.

//ESCOPO
//Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;
}
console.log(precisoVisitar(1)); // execução normal da function
console.log(totalPaises); // erro, totalPaises não definido

// ESCOPO LÉXICO
// Funções conseguem acessar variáveis que foram criadas no contexto pai

var profissao = "Designer"; // variavel global, acessavel por qualquer função ou código do arquivo

function dados() {
  var nome = "André"; // variavel local
  var idade = 28;
  function outrosDados() {
    // função encapsulada, ela só "existe" dentro do contexto da função dados()
    var endereco = "Rio de Janeiro";
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`; // junção da variavel global profissao, nome, que é herdado da função dados e endereco e idade, variaveis locais da função outrosDados. A variável idade da função outrosDados sobrescreve a variável idade da função dados.
  }
  return outrosDados(); // para acessar a função outrosDados() é preciso ainda realizar a sua chamada mesmo dentro de outra função, neste caso com o return
}

dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
// outrosDados(); // retorna um erro, pois tenta acessar a função outrosDados, porém que só "existe" dentro do escopo da função dados

// HOISTING
// Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória, "o topo do arquivo", igualmente com as variaveis, assim que um arquivo é executado.

imc3(80, 1.8); // imc3 aparece no console, mesmo a chamada da função ter vindo primeiro do que a sua declaração
function imc3(peso, altura) {
  const imc3 = peso / altura ** 2;
  console.log(imc3);
}

// EXERCICIOS

// Crie uma função para verificar se um valor é Truthy
function isTruthy(valor) {
  if (!!valor) {
    console.log("É truthy!");
  } else {
    console.log("Não é truthy!");
  }
}
isTruthy(1);

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return console.log(`A área do perímetro do quadrado é de ${lado * 4}`);
}
perimetroQuadrado(10);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  console.log(`O seu nome completo é ${nome} ${sobrenome}`);
}
nomeCompleto("Marcos", "Lopes");

// Crie uma função que verifica se um número é par
function imparPar(numero) {
  if (numero % 2 === 0) {
    console.log("O número é par!");
  } else {
    console.log("O número é impar!");
  }
}
imparPar(38);

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(valor) {
  console.log(typeof valor);
}

tipoDeDado(-10);

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("scroll", function () {
  console.log("Olá, o meu nome é Marcos Lopes! :D");
});

// Corrija o erro abaixo
var totalPaises = 193; // totalPaises era uma variável local da função precisoVisitar, o que a tornava impossivel acesso a essa variável, retornando que a variável não era declarada
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
