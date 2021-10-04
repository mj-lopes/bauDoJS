var nome = "Marcos"; //String
var idade = 22; //Número
var simbolo = Symbol(); //Simbolo

console.log(typeof simbolo); //Função que retorna o tipo da variavel, neste caso symbol

//Concatenação de strings
var sobrenome = "Lopes";
var nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

//Concatenação de string com números
var gols = 1000;
var frase = "Romário fez " + gols + " gols";
console.log(frase);

//SEMPRE que concatenar um número com uma string, o resultado final será uma string
console.log(typeof frase);

//Template String, uma nova forma para declarar uma variavel dentro de uma string
var gols = 1000;
var frase1 = "Romário fez " + gols + " gols";
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String

/* Exercicios */

// Declare uma variável contendo uma string
var pais = "Brasil";
console.log(typeof pais);

// Declare uma variável contendo um número dentro de uma string
var numeroDeGols = "10";
console.log(numeroDeGols);

// Declare uma variável com a sua idade
var idade = 22;
console.log(idade);

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nome = "Marcos",
  sobrenome = "Lopes";
//var nomeCompleto = nome + " " + sobrenome;
var nomeCompleto = `${nome} ${sobrenome}`;
console.log(nomeCompleto);

// Coloque a seguinte frase em uma variável: It's time
//var frase = "It's time";
var frase = `It's time`;
console.log(frase);

// Verifique o tipo da variável que contém o seu nome
console.log(typeof nome);
