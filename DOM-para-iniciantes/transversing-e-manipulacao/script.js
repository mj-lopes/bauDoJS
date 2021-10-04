// OUTERHTML, INNERHTML E INNERTEXT

// Propriedades que retornam uma string contendo o html ou texto. É possível atribuir um novo valor para as mesmas element.innerText = 'Novo Texto'.

const menu = document.querySelector('.menu');

menu.outerHTML; // todo o html do elemento
menu.innerHTML; // html interno
menu.innerText; // texto, sem tags

// menu.innerText = '<p>Texto</p>'; // a tag vai como texto
// menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada


// TRASVERSING
// Como navegar pelo DOM, utilizando suas propriedades e métodos.

const lista = document.querySelector('.animais-lista');

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll('li'); // todas as LI's
lista.querySelector('li:last-child'); // último filho


// ELEMENT VS NODE
// Element's represetam um elemento html, ou seja, uma tag. Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais.

// const lista = document.querySelector('.animais-lista');

lista.previousElementSibling; // elemento acima
lista.previousSibling; // node acima

lista.firstChild; // primeiro node child
lista.childNodes; // todos os node child

// Geralmente estamos atrás de um elemento e não de qualquer node em si.

// MANIPULANDO ELEMENTOS
// É possível mover elementos no dom com métodos de Node.

// const lista = document.querySelector('.animais-lista');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

// contato.appendChild(lista); // move lista para o final de contato
// contato.insertBefore(lista, titulo); // insere a lista antes de titulo
// contato.removeChild(titulo); // remove titulo de contato
// contato.replaceChild(lista, titulo); // substitui titulo por lista


// NOVOS ELEMENTOS
// Podemos criar novos elementos com o método createElement()

const animais = document.querySelector('.animais');

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título';
novoH1.classList.add('titulo');

animais.appendChild(novoH1);


// CLONAR ELEMENTOS
// Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode()

const titulo1 = document.querySelector('h1');
const titulo2 = document.querySelector('h1');
const novoTitulo = titulo1;
// titulo1, titulo2 e novoTitulo são iguais!!

const cloneTitulo = titulo.cloneNode(true); 
// True -> clona o elemento e seus filhos 
// False -> clona somente o elemento 

// const contato = document.querySelector('.contato');
contato.appendChild(cloneTitulo);



// EXERCÍCIO 
// Duplique o menu e adicione ele em copy
const menuTopo = document.querySelector('.menu');
const cloneMenu = menuTopo.cloneNode(true);

const copy = document.querySelector('.copy');

// copy.appendChild(cloneMenu);
copy.insertBefore(cloneMenu, copy.children[0]);

// Selecione o primeiro DT da dl de Faq
const dl = document.querySelector('.faq-lista');
const primeiroDT = dl.querySelector('dt');

console.log(dl.children[0]);
console.log(primeiroDT);

// Selecione o DD referente ao primeiro DT
console.log(dl.children[1]);
console.log(primeiroDT.nextElementSibling);

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq');
// const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;

