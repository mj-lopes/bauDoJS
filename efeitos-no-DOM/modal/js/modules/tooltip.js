export default function initTooltip() {
  
  const toolTips = document.querySelectorAll("[data-tooltip]"); // Seleciona todos os tooltips do site
  
  toolTips.forEach ((toolTip) => {
    toolTip.addEventListener('mouseover', onMouseOver); // adiciona o a função para cuidado do evento ao mouse entrar no elemento
  });
  
  function onMouseOver (event) {
    const tooltipBox = criarTooltipBox(this); // adiciona na tooltipbox o return da função responsavel pela criação da tooltip
    
    //Event = this = elemento toolTip do foreach
    
    // tooltipBox.style.top = event.pageY + "px"; // movido para objeto onMouseMove
    // tooltipBox.style.left = event.pageX + "px";
    // .style permite adicionar e modificar atributos css diretamente no JS, no caso, para posicionar o elemento tooltip na área que o mouseover ocorrer
    
    
    
    // this.addEventListener('mouseleave', function(){
      //   onMouseLeave(tooltipBox);
      // })  
  
      // function onMouseLeave(tooltipBox) {
      //   tooltipBox.remove();
      // }
      
      // novo método para chamar uma função listener dentro de outra função listener
      // para esse método funcionar é passado um objeto ao invés de uma função
      
      onMouseLeave.tooltipBox = tooltipBox; // Atribui ao atributo do objeto a tooltipbox
      onMouseLeave.element = this; // Atribui ao atributo do objeto o tooltip do foreach
      this.addEventListener('mouseleave', onMouseLeave); // é usado this, pois o evento é adicionado no mesmo elemento tooltip do loop do foreach
      
      // event para que a tooltipbox siga o mouse onde estiver ao entrar no elemento
      onMouseMove.tooltipBox = tooltipBox;
      this.addEventListener('mousemove', onMouseMove);
  }
  
  const onMouseLeave = {
    tooltipBox: "",
    element: "",
    handleEvent() { // Este método somente funcionará se o objeto tiver o método handleEvent()!!
     this.tooltipBox.remove(); // Exclui o elemento tooltip
     this.element.removeEventListener('mouseleave', onMouseLeave); // Exclui o listener do evento, para motivos de perfomace, precisa ser igual ao addEventListener
     this.element.removeEventListener('mousemove', onMouseMove); // Exclui o listener do evento, para motivos de perfomace, precisa ser igual ao addEventListener
  
    }
  }
  
  const onMouseMove = {
    tooltipBox: '',
    handleEvent(event) {
      // agora, ao invés do elemento ficar em uma posição fixa ao entrar no element, ele irá seguir o mouse atualizando constantemente a posição da tooltipbox
      this.tooltipBox.style.left = event.pageX + 20 + "px";
      this.tooltipBox.style.top = event.pageY + 20 + "px"; 
    }
  }
  
  
  function criarTooltipBox (element) {
    const tooltipBox = document.createElement('div'); // cria um novo elemento (div)
    const textoTooltip = element.getAttribute('aria-label'); // pega o atributo de aria-label - o texto interno da tooltip
  
    tooltipBox.classList.add('tooltip'); //para permitir personalização com o css
    tooltipBox.innerText = textoTooltip; // add o texto da aria-label como o texto interno da tooltip
    document.body.appendChild(tooltipBox); // adiciona o elemento ao fim do body
  
    return tooltipBox; // retorna o elemento criado e personalizado para a função onMouseOver;
  }  

};
