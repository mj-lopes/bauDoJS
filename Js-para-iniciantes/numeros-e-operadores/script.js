var numeroInteiro = 23; // Inteiros
var numeroExponencial = 2e5; // Exponencial
var numeroFracionado = 2.5; // Fracionado

// Precisão de até 15 números, após isto é aplicado um arredondamento
console.log(numeroInteiro);
console.log(numeroExponencial);
console.log(numeroFracionado);

// Operadores aritméticos
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(expoente);
console.log(modulo);

// Operadores aritméticos com strings
var soma = "100" + 50; // 10050, com soma, é concatenado os valores ou textos, e não somados, juntando os dois valores e transformando em string
var subtracao = "100" - 50; // 50, não é possível subtrair uma string com outra string, então é verificado se é possivel converter a string em um número, se possível, é realizado o cálculo
var multiplicacao = "100" * "2"; // 200, o mesmo caso da subtração ocorre com a multiplicação
var divisao = "Comprei 10" / 2; // o mesmo caso das duas anteriores acontece com a divisão, porém se não for possível realizar o cálculo vai ser retornado um NaN (Not a Number), um erro que informa que não é um número e não é possível realizar a operação.

//É possível verificar se uma variável é NaN ou não com a função isNaN()
console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(isNaN(divisao));

// NaN (Not a Number)
var numero = 80;
var unidade = "kg";
var peso = numero + unidade; // String '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number), impossivel dividir uma string sem ser ela um número puro, ex.: '20' / 10 = 2

// A ORDEM IMPORTA
// Começa por multiplicação e divisão, depois por soma e subtração.
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = (20 / 2) * 5; // 50, mesmo peso de operadores, respeita a ordem de ocorrencia
var total4 = 10 + 10 * 2 + 20 / 2; // 40

// Use parênteses para priorizar uma expressão

// OPERADORES ARITMÉTICOS UNÁRIOS
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6
// Mesma coisa para o decremento --x

// OPERADORES ARITMÉTICOS UNÁRIOS
// O + e - tenta transformar o valor seguinte em uma string em um número

var frase = "Isso é um teste"; //Não é uma string puramente númerica
+frase; // NaN
-frase; // NaN

var idade = "28";
+idade; // 28 (número) // Agora é um número, não mais uma string
-idade; // -28 (número) // Agora é um número, não mais uma string, ele tbm consegue converter em um número negativo
console.log(+idade + 5); // 33

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

// Na lógica binaria, um valor TRUE é igual a 1, e um valor FALSE é igual a 0 ou qualquer valor diferente de 1
//Usando a lógica binaria e transformando o valor em número, ele passa a ser +1 ou -1 se TRUE e convertendo usando + e - respectivamente, ou 0 ou -0 se FALSE e convertendo usando + ou -

// EXERCICIOS
// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20; // 35
console.log(total);

// Crie duas expressões que retornem NaN
var idade = "25 anos" - 5;
var peso = "91kg" / 2;
console.log(idade, peso);

// Somar a string '200' com o número 50 e retornar 250
var soma = +"200" + 50;
console.log(soma);

// Incremente o número 5 e retorne o seu valor incrementado
var incremento = 5;
console.log(++incremento);

// Como dividir o peso por 2?
var numero = "80";
var unidade = "kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

// Impossível usando esse cálculo, resultando em um NaN, pois o valor de peso é a string '80kg', não é possível realizar a divisão de uma string que não seja puramente numerica

var numero = +"80" / 2;
var unidade = "kg";
var peso = numero + unidade;
console.log(peso);
