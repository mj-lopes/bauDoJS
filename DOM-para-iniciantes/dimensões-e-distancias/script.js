/* HEIGHT E WIDTH
Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only */

const listaAnimais = document.querySelector(".animais-lista");

listaAnimais.clientHeight; // height + padding
listaAnimais.offsetHeight; // height + padding + border
listaAnimais.scrollHeight; // height total, mesmo dentro de scroll

// Mesma coisa para o Width, clientWidth ...

// OFFSETTOP E OFFSETLEFT
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

// Distância entre o topo do elemento e o topo da página
animaisTop.offsetTop;

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
const raposaH2 = document.querySelector("h2");
console.log(raposaH2.offsetLeft);

/* GETBOUNDINGCLIENTRECT()
Método que retorna um objeto com valores de width, height, distâncias do elemento e mais. */

const H2rect = raposaH2.getBoundingClientRect();
console.log(H2rect);

if (H2rect.top < 0) {
  console.log("Passou do elemento");
}
// WINDOW

window.innerWidth; // width do janela
window.outerWidth; // soma dev tools do navegador também
window.innerHeight; // height do janela
window.outerWidth; // soma a barra de endereço também

window.pageYOffset; // distância total do scroll horizontal
window.pageXOffset; // distância total do scroll vertical

if (window.innerWidth < 600) {
  // Não recomendado, pois browers possuem tamanhos diferentes um do outro
  // console.log("Tela menor que 600px");
}

/* MATCHMEDIA();
Utilize um media-querie como no CSS para verificar a largura do browser */

const small = window.matchMedia("(max-width: 600px)");

if (small.matches) {
  console.log("Tela menor que 600px");
} else {
  console.log("Tela maior que 600px");
}

/* DICA PARA RÁPIDO TESTING DE FUNÇÕES, ATRIBUTOS, ETC. NO NAVEGADOR 
Selecione o elemento no inspetor do browser (dom)

Abra o console e digite $0 para selecionar o mesmo

Os elementos selecionados anteriormente são $1, $2 ... */

// EXERCÍCIO

// Verifique a distância da primeira imagem
// em relação ao topo da página
const distanciaPrimeiraImg = document.querySelector("img");

console.log(distanciaPrimeiraImg.offsetTop);

// Retorne a soma da largura de todas as imagens
const todasImgs = document.querySelectorAll("img");

function somaLarguraImagens() {
  let larguraTotalImgs = 0;

  todasImgs.forEach((img) => {
    larguraTotalImgs = img.clientHeight + larguraTotalImgs;
  });

  console.log(larguraTotalImgs);
}

window.onload = function () {
  somaLarguraImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll("a");

links.forEach((item, index) => {
  if (item.clientHeight < 48 && item.clientWidth < 48) {
    console.log(
      `O link Nº${
        index + 1
      } não possue o tamanho mínimo recomendado para telas touch`
    );
  }
});
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia("(max-width: 720px)");

if (browserSmall) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
}
