import outsideClick from "./outsideclick.js";

export default function initMenuMobide() {  
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];
  
  if (menuButton) {
    // Mesma lógica do dropdown-menu

    function openMenu(event) {
      menuList.classList.add('active');
      menuButton.classList.add('active');
    
      outsideClick(menuList, eventos, () => {
        menuList.classList.remove('active');
        menuButton.classList.remove('active');
      });
    
    }
    eventos.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu);
    })
  }
}
