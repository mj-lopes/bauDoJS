// element -> elemento que chamou a função
// events -> tipo de eventos para os listeners
// callback -> função para retirada da classe

export default function outsideClick(element, events, callback) {
  const html = document.documentElement; // selecionado o elemento html <html></html>
  const outside = 'data-outside';

  // é verificado se o html tem o atributo 'data-outside', para evitar adicionar vários listeners iguais para o mesmo
  // Se tiver o atributo, significa que o listener já está na pilha de callback esperando ser executado
  // Se não possuir, significa que o listener ainda não foi chamado e então é add com o bloco de código abaixo 
  if(!element.hasAttribute(outside)){
    events.forEach((event) => {
      html.addEventListener(event, handleOutsideClick); // add os eventos ao elemento html e guarda na memória o callback
    })
    element.setAttribute(outside, ''); // é adicionado ao elemento que chamou a função o atributo data-outside, para a verificação do if
  }

  // Ao acontecer o click no elemento html é executado a função
  function handleOutsideClick (event) {

    // é verificado se o elemento clicado é diferente do elemento que chamou a função 
    // Se o elemento clicado no html tiver contigo no elemento que chamou a função originalmente, significa que o click aconteceu no elemento original, não sendo então para ocultá-lo.
    // Caso contrário, significa que o click no elemento html foi fora da região do elemento que chamou a função outsideClick, o qual irá ocultar o elemento anterior 
    if(!element.contains(event.target)) {
      element.removeAttribute(outside); // remove o atributo data-outside para a verificação do if do HasAttribute
      events.forEach((event) => { // faz um loop nos tipos de eventos e os remove da pilha do callback
        html.removeEventListener(event, handleOutsideClick);
      })
      callback(); // executa a função anonima passada como parametro do outsideClick, que retira a classe do elemento original
    }
  }
}