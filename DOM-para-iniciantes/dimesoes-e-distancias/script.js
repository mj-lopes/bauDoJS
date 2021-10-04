// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector("img");

console.log(primeiraImg.offsetTop);

// Retorne a soma da largura de todas as imagens

window.onload = function(){
  let somaLarguraImgs = 0;
  
  const imgs = document.querySelectorAll("img");
  imgs.forEach((img) => {
    somaLarguraImgs += img.offsetWidth;
  });

  console.log(somaLarguraImgs);
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll("a");

links.forEach((item, index) =>{
  if ((item.offsetWidth < 48) || (item.offsetHeight < 48)) {
    console.log(`O link ${index} não respeita o mínimo recomendado para telas touch`);
  }
  console.log(index, item.offsetWidth);
  console.log(index, item.offsetHeight);
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
// const menu = document.querySelector(".menu");

// if (window.innerWidth < 720) {
//   menu.classList.add("menu-mobile");
// } 

const browserSmall = window.matchMedia("(max-width: 720px)").matches;

if (browserSmall){
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
}