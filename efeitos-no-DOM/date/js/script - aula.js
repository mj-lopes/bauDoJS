import initScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initAnimaNumeros from './modules/anima-numeros.js';
import initFuncionamento from './modules/funcionamento.js';

initModal();
initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();
initTooltip();
initDropdownMenu();
initMenuMobile();
initAnimaNumeros();
initFuncionamento();


// NEW DATE()
// O construtor Date cria um objeto contendo valores como mês, dia, ano, horário e mais. A data é baseada no relógio interno do computador.

{
  const agora = new Date();
  agora;  // Semana Mês Dia Ano HH:MM:SS GMT

  agora.getDate() // Dia
  agora.getDay() // Dia da Semana ex: 5 = Fri
  agora.getMonth() // Número dia mês
  agora.getFullYear() // Ano
  agora.getHours() // Hora
  agora.getMinutes() // Minutos
  agora.getTime() // ms desde 1970
  agora.getUTCHours() - 3 // Brasília

}

// GETTIME() 
// O método getTime() mostra o tempo total em milessegundos desde o dia 1 de janeiro de 1970.

{
  const agora = new Date();
  agora.getTime(); 
  // console.log(agora.getTime());
  // total de dias desde 1 de janeiro de 1970
  const diasPassados = agora.getTime() / (24 * 60 * 60 * 1000);

}

// DIAS ATÉ
// Podemos criar um objeto com uma data no futuro, passando uma string com o valor da data.

{
  const agora = new Date();
  const promocao = new Date('December 24 2018 23:59');

  function converterEmDias(time) {
    return time / (24 * 60 * 60 * 1000); // horas * minutos * segundos * milesegundos 
  }

  const diasAgora = converterEmDias(agora);
  const diasPromocao = converterEmDias(promocao);

  const faltam = diasPromocao - diasAgora;

}