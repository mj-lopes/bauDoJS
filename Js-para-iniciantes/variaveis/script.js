// Declaração de variaveis com var
var nome = "Marcos";
var idade = 22;
var possuiFaculdade = true;

// exibir os dados no console do navegador
console.log(nome, idade, possuiFaculdade);

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;

console.log("Total gasto R$", totalPreco);

// declaração de multiplas variaveis usando só uma função var
var sobrenome = "Lopes",
  cidade = "Mucuri";

console.log(sobrenome, cidade);

// variavel sem valor vai gerar como resultado 'undefined' no console
var semDefinir;

console.log(semDefinir);

/* Uma variavel sem ser declarada antes vai gerar um erro
  console.log(aindaNaoDefinir)
*/

/* mesmo que uma variavel seja declarada após sua chamada com uma função, o resultado da sua chamada não vai gerar um erro, mas sim retornar uma variavel vázia 'undefined', pois quando o arquivo JS é carregado, todas declarações de variaveis são "postas" no inicio do arquivo automaticamente, isso é chamado de Hoisting */

console.log(comida);
var comida = "pizza";
comida = "pizza";
console.log(comida);

/* É possivel alterar os valores das variaveis var e let durante a execução do script, mas não de const */

/* Exercicios */

// Declarar uma variável com o seu nome
var nome = "Marcos";

// Declarar uma variável com a sua idade
var idade = 22;

// Declarar uma variável com a sua comida
// favorita e não atribuir valor
var comidaFavorita;

// Atribuir valor a sua comida favorita
comidaFavorita = "Strogonoff";

// Declarar 5 variáveis diferentes sem valores
var _curso, produto, $altura, Produto, nomeEstudadante01;

console.log(nome, idade, comidaFavorita, produto, Produto);
