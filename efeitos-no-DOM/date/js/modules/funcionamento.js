export default function initFuncionamento() {
  // selectores
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.hora.split(',').map(Number);
  
  // variaveis
  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay(); // Dia atual
  const horarioAgora = dataAgora.getHours(); // Horario atual
  
  // será feito uma busca no array semanaAberto (0,1,2,3,4,5,6), procurando o index do valor de diaAgora, se retornar -1 significa que o valor não se encontra no array, portanto não sendo um dos dias abertos 
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  
  // é verificado se a hora atual é maior ou igual ao horario de abertura horarioSemana[0] e se é menor que o horario de fechamento horarioSemana[1]
  
  const horarioAberto = ( horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);
  
  console.log(semanaAberto, horarioAberto)
  if (semanaAberto & horarioAberto) {
    funcionamento.classList.add('aberto');
  }

}