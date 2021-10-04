export default function initModal() {




  
const botaoAbrir = document.querySelector("[data-modal='abrir']");
const botaoFechar = document.querySelector("[data-modal='fechar']")
const modal = document.querySelector("[data-modal='container']")


function toggleModal (event) {
  event.preventDefault();
  modal.classList.toggle('ativo');
}

function clickForaModal (event) {
  if (event.target === this) // This é a const modal, que é o dom element do container do modal, se o target do click for igual ao do this, o que quer dizer que o click ocorreu na area do container, ele realiza a função de fechar o modal
  toggleModal(event);
}

botaoAbrir.addEventListener('click', toggleModal);
botaoFechar.addEventListener('click', toggleModal);
modal.addEventListener('click', clickForaModal);

































};


