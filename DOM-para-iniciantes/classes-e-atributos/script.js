/* CLASSLIST
Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém. */

const menu = document.querySelector(".menu");

menu.className; // string
menu.classList; // lista de classes
menu.classList.add("ativo");
menu.classList.add("ativo", "mobile"); // duas classes
menu.classList.remove("ativo");
menu.classList.toggle("ativo"); // adiciona/remove a classe
menu.classList.contains("ativo"); // true ou false
// menu.classList.replace("ativo", "inativo"); // substitui uma classe por outra

if (menu.classList.contains("ativo")) {
  menu.classList.add("contem-ativo");
} else {
  menu.classList.add("não-contem-ativo");
}

/* ATTRIBUTES
Retorna uma array-like com os atributos do elemento. */

const animais = document.querySelector(".animais");

animais.attributes; // retorna todos os atributos
animais.attributes[0]; // retorna o primeiro atributo

/* GETATTRIBUTE E SETATTRIBUTE
Métodos que retornam ou definem de acordo com o atributo selecionado */

//const img = document.querySelector("img");

// img.getAttribute("src"); // valor do src
// img.setAttribute("alt", "Texto Alternativo"); // muda o alt
// img.hasAttribute("id"); // true / false
// img.removeAttribute("alt"); // remove o alt

// img.hasAttributes(); // true / false se tem algum atributo

/* READ ONLY VS WRITABLE
Existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura. */

//const animais = document.querySelector(".animais");

animais.className; // string com o nome das classes
animais.className = "azul"; // substitui completamente a string
animais.className += " vermelho"; // adiciona vermelho à string

animais.attributes = 'class="ativo"'; // não funciona, read-only

// Lembre-se que podemos modificar o valor de uma propriedade objeto.propriedade = ''

// EXERCÍCIO

// Adicione a classe ativo a todos os itens do menu
const itens_menu = document.querySelectorAll(".menu ul li");

itens_menu.forEach((item) => {
  item.classList.add("ativo");
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itens_menu.forEach((item) => {
  item.classList.remove("ativo");
});

itens_menu[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img");
imgs.forEach((img, index) => {
  if (!img.hasAttribute("alt")) {
    console.log("A nª" + index + " imagem não possue o atributo alt");
  }
});

// Modifique o href do link externo no menu
const link_externo = document.querySelector(".menu li [href^= 'https:']");
link_externo.setAttribute("href", "https://Google.com");
