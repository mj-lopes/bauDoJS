function initTabNav() {
  // Dessas listas é necessário selecionar cada conteúdo individualmente, em uma relação 1 para 1, um elemento do tabMenu é relacionado a um elemento do tabContent. No exemplo, um LI (imagem da lista) é responsável por uma section (descrição do animal), relacionando a imagem do animal ao seu conteúdo descritivo.
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  // verifica se tabMenu E tabContent não estão vazias, se estiverem vazias o código abaixo não é executado e não gera um erro no console. Pq? Pois se estiver em uma outra página do site tabMenu e/ou tabContent podem não existir, assim gerando um node vazio, de tamanho 0. Por 0 ser um valor falsy, ao ser verificar o length de ambos se um desses retornar 0 (node vazio/inexistente) a condição do IF não é suprida e o código abaixo não é executado, evitando erros.
  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      // Index é o parametro passado para a seleção do elemento de tabContent
      const direcao = tabContent[index].dataset.anime;

      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      }); // Remove a classe 'ativo' de todos os elementos de tabContent, pois somente o elemento do respectivo index nos interessa para a manipulação

      tabContent[index].classList.add("ativo", direcao); // o respectivo elemento referente ao index recebe a classe 'ativo' para a manipulação
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

function initAccordion() {
  const accordionList = document.querySelectorAll("[data-anime='accordion'] dt");
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
  const linksInternos = document.querySelectorAll('[data-scroll=suave] a[href^="#"');

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

function initAnimacaoScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const windowMetade = window.innerHeight * 0.6;

  if (sections.length) {
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }
    window.addEventListener("scroll", animaScroll);
    animaScroll();
  }
}

initTabNav();
initAccordion();
initScrollSuave();
initAnimacaoScroll();
