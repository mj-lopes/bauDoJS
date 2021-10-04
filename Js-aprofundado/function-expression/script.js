// EXERCICIOS

// Remova o erro
// priceNumber('R$ 99,99');
// const priceNumber = n => +n.replace('R$', '').replace(',', '.');
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
priceNumber('R$ 99,99');

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
  const teste = 'teste fora do escopo';

  (() => {
    const teste = 'teste dentro do escopo';
    console.log(teste);
  })();

  console.log(teste);


// Como podemos utilizar
// a função abaixo.
const call = () => {
  console.log('callback');
} 
const active = callback => callback();
active(call);