const doc = fetch('./doc.txt');

doc.then(resolucao => {
  resolucao.text().then(corpoDoTexto => {
    console.log(corpoDoTexto);
  });
})

// simplificado, mesma coisa do acima
// doc
// .then(resolucao => resolucao.text()) 
// .then(corpoDoTexto => console.log(corpoDoTexto));


// .JSON()
// Um tipo de formato de dados muito utilizado com JavaScript é o JSON (JavaScript Object Notation), pelo fato dele possuir basicamente a mesma sintaxe que a de um objeto js. .json() transforma um corpo em json em um objeto JavaScript.

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => response.json())
.then(cep => {
  console.log(cep.bairro, cep.logradouro);
});




// EXERCICIOS 

// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const btnForm = document.querySelector('form button');
const endereco = document.querySelector('.endereco');
let CEP;


function handleForm(event){
  event.preventDefault();
  CEP = document.forms[0].elements[0].value;
  fetch(`https://viacep.com.br/ws/${CEP}/json/`)
  .then((resposta) => {
    return resposta.text();
  }).then((resposta) => {
    endereco.innerText = resposta;
  })
} 

btnForm.addEventListener('click', handleForm);



// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin em reais.
// atualize este valor a cada 30s

const bitcoinSpan = document.querySelector('.bitcoin span');


function pegarBitcoin() {
  fetch('https://blockchain.info/ticker')
  .then(resposta => resposta.json())
  .then(resposta => {
    bitcoinSpan.innerText = 'R$' + resposta.BRL.buy;
  });  
}

pegarBitcoin();

setInterval(pegarBitcoin, 30000)


// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const paragrafoPiada = document.querySelector('.piadaChuck .piada');
const btnPiada = document.querySelector('.piadaChuck button');

function handleBtn() {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(resposta => resposta.json())
  .then(resposta => {
    paragrafoPiada.innerText = resposta.value;
  });  
};
 
handleBtn();

btnPiada.addEventListener('click', handleBtn);