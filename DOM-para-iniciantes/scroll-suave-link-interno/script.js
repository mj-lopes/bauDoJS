function initTabNav() {
  // Dessas listas é necessário selecionar cada conteúdo individualmente, em uma relação 1 para 1, um elemento do tabMenu é relacionado a um elemento do tabContent. No exemplo, um LI (imagem da lista) é responsável por uma section (descrição do animal), relacionando a imagem do animal ao seu conteúdo descritivo.
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  // verifica se tabMenu E tabContent não estão vazias, se estiverem vazias o código abaixo não é executado e não gera um erro no console. Pq? Pois se estiver em uma outra página do site tabMenu e/ou tabContent podem não existir, assim gerando um node vazio, de tamanho 0. Por 0 ser um valor falsy, ao ser verificar o length de ambos se um desses retornar 0 (node vazio/inexistente) a condição do IF não é suprida e o código abaixo não é executado, evitando erros.
  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      // Index é o parametro passado para a seleção do elemento de tabContent
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      }); // Remove a classe 'ativo' de todos os elementos de tabContent, pois somente o elemento do respectivo index nos interessa para a manipulação

      tabContent[index].classList.add("ativo"); // o respectivo elemento referente ao index recebe a classe 'ativo' para a manipulação
    }

    // É usado um forEach para adicionar um evento, do tipo click, em cada elemento da lista de tabMenu (cada imagem), ao ocorrer o click em determinado elemento (imagem), é chamado a função activeTab, que recebe o index (posição) do elemento na lista. A posição da imagem na lista é igual (e precisa ser para funcionar) a posição do seu conteúdo na lista de conteúdo.
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });

    tabContent[0].classList.add("ativo"); // adiciona a classe 'ativo' ao primeiro elemento de tabContent, para o site ser carregado e já ser exibido um conteúdo, não ficar um bloco em branco
  }
}

let nome = 'joaodasneves';

if(nome.length > 7){
  nome = nome.slice(0,7);
  nome = nome.concat('...');
}

console.log(nome); 



function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion(event) {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"');

  if (linksInternos.length) {
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    linksInternos.forEach((item) => {
      item.addEventListener("click", scrollToSection);
    });
  }
}

initTabNav();
initAccordion();
initScrollSuave();
