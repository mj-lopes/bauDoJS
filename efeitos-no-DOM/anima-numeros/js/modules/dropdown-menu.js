import outsideClick from './outsideclick.js'; // importa o module outsideClick


export default function initDropdownMenu() {
  
  // seleciona todos drop down menus
  const menusDropdown = document.querySelectorAll("[data-dropdown]");
  
  // loop nos menus para adicionar os events
  menusDropdown.forEach ((menu) => {
    // É feito desta forma para que não seja necessario criar vários addEventListeners. Desta forma é criado um array com os tipos de eventos, é feito um foreach deste array, que a cada iteração é passado um dos parametros do array de triggers de evento
    ['touchstart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    })
  })
  
  function handleClick(event) {
    event.preventDefault(); // previne o padrão do click da <a></a>
    this.classList.add('ativo'); // adiciona a classe ativo ao menu
  
    // é chamado a função outsideClick do module de mesmo nome, nele são passados o this (menu), um array com o tipo de eventos (click, touch, etc) e uma arrow-function com uma função que remove a classe ativo do this ao acontecer o click fora do dropdown-menu
    outsideClick(this, ['touchstart', 'click'],() => { 
      this.classList.remove('ativo');
    });
  }
}

