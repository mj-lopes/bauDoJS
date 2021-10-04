/* ADDEVENTLISTENER 
Adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo evento ocorrer neste elemento. */

const img = document.querySelector("img");

// elemento.addEventListener(event, callback, options)
img.addEventListener("click", function () {
  console.log("clicou");
});

// O terceiro parâmetro é opcional.

/* CALLBACK
É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima */

function callback() {
  console.log("Clicou");
}

img.addEventListener("click", callback); // 🚀, funciona!
img.addEventListener("click", callback()); // undefined, não funciona!
img.addEventListener("click", function () {
  // Ainda funciona, porém não é uma boa prática.
  console.log("Clicou");
});
img.addEventListener("click", () => {
  // Ainda funciona, porém não é uma boa prática.
  console.log("Clicou");
});

/* EVENT
O primeiro parâmetro do callback é referente ao evento que ocorreu. */
function callback(event) {
  console.log(event);
}

img.addEventListener("click", callback);

// Geralmente utilizam 'e' como nome do parâmetro

// PROPRIEDADES DO EVENT
const animaisLista = document.querySelector(".animais-lista"); // Selecionando a lista de elementos da classe animais-lista

function executarCallback(event) {
  const currentTarget = event.currentTarget; // this, retorna o elemento ou lista de elementos escolhidos com o seletor
  const target = event.target; // onde o clique ocorreu, em qual exato item, separando de uma lista
  const type = event.type; // tipo de evento
  const path = event.path;
  console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener("click", executarCallback);

/* EVENT.PREVENTDEFAULT()
Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado. */

const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event) {
  event.preventDefault(); // previniu que o link externo seja aberto
  console.log(event.currentTarget.href); // exibe o endereço href do item selecionado
}

linkExterno.addEventListener("click", clickNoLink);

/* THIS
A palavra chave this é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado. No exemplo a abaixo o 'img'. */

function callbacks(event) {
  console.log(this); // retorna o elemento da chamada, no caso, img
  console.log(this.getAttribute("src"));
}

img.addEventListener("click", callbacks);

// Geralmente igual ao event.currentTarget

/* DIFERENTES EVENTOS
Existem diversos eventos como click, scroll, resize, keydown, keyup, mouseenter e mais. Eventos podem ser adicionados a diferentes elementos, como o window e document também.
*/

const h1 = document.querySelector("h1");

function handleEvent(event) {
  console.log(event.type, event);
}

// h1.addEventListener("click", handleEvent); // evento que ocorre ao elemente ser clicado
// h1.addEventListener("mouseenter", handleEvent); // Evento que ocorre ao mouse ser passado e entrar na area do elemento
// h1.addEventListener("mousemove", handleEvent); // Evento que ocorre ao mouse se movimentar em cima do elemento, qualquer movimento realizado pelo mouse por cima do elemento selecionado irá disparar a chamada do evento.

// window.addEventListener("scroll", handleEvent); // Evento global que é chamado ao fazer o scroll pela janela
// window.addEventListener("resize", handleEvent); // Evento global que é chamado ao mudar o tamanho da janela
// window.addEventListener("keydown", handleEvent); // Evento global que é chamado ao se pressionar alguma tecla

// https://developer.mozilla.org/en-US/docs/Web/Events Documentação dos diversos tipos de elementos

function handleKeyboard(event) {
  if (event.key === "f") {
    // se a tecla f for pressionada a classe 'azul' é inserida ou removida do elemento body, uma forma de personalizar o site manipulando o css através de eventos JS
    document.body.classList.toggle("azul");
  }
  console.log(event.key); // Mostra o atributo key, do evento keydown, que informa qual tecla foi precionada
}
window.addEventListener("keydown", handleKeyboard);

/* FOREACH E EVENTOS
O método addEventListener é adicionado à um único elemento, então é necessário um loop entre elementos de uma lista, para adicionarmos à cada um deles. */

const imgs = document.querySelectorAll("img");

function imgSrc(event) {
  const src = event.currentTarget.getAttribute("src");
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener("click", imgSrc);
});

// EXERCICIOS

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
linksInternos = document.querySelectorAll("a[href^='#']");

function addAtivo(event) {
  event.preventDefault(); // previne o comportamento padrão

  linksInternos.forEach((link) => {
    //Remove a classe ativo de todos os links internos
    link.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo"); // adiciona a classe ativo ao elemento do evento
}

linksInternos.forEach((link) => {
  link.addEventListener("click", addAtivo);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const elementosBody = document.querySelectorAll("body *"); // Seleciona todos os elementos do body

function elementoClicado(event) {
  // Exibe os elementos clicados
  console.log(event.currentTarget);
}

elementosBody.forEach((elemento) => {
  // Loop para o acionamento do evento do click
  elemento.addEventListener("click", elementoClicado);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function excluirElementoClicado(event) {
  console.log(event.target.remove());
}

elementosBody.forEach((elemento) => {
  elemento.addEventListener("click", excluirElementoClicado);
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleClick(event) {
  if (event.key === "t") {
    document.documentElement.classList.toggle("textoMaior");
  }
}

window.addEventListener("keydown", handleClick);
