const h1 = document.querySelector("h1");
const animaisDescricao = document.querySelector(".animais-descricao");

// console.log(animaisDescricao.innerText); // Pega somente o texto dentro de elemento/s do DOM
// console.log(animaisDescricao.innerHTML); // Pega o texto + mais tags internas
// console.log(animaisDescricao.outerHTML); // Pega o texto + mais as tags internas e a do proprio elemento selecionado


const animaisLista = document.querySelector(".animais-lista");

console.log(animaisLista.parentElement); // Pega o elemento pai 
console.log(animaisLista.parentElement.parentElement); // Pega o elemento pai do pai 
console.log(animaisLista.previousElementSibling); // Pega o elemento irmão anterior
console.log(animaisLista.nextElementSibling); // Pega o próximo elemento irmão 

console.log(animaisLista.children); // Retorna um HTMLCollection com os elementos filhos 

console.log(animaisLista.children[animaisLista.children.length - 1]);
console.log(animaisLista.querySelector('li:last-child'));


