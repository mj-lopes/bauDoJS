// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const lis = document.querySelectorAll('li');

for(const li of lis){
  li.classList.add('ativo');
}

console.log(...lis);

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for(const propriedade in window) {
  console.log(`${propriedade}: ${window[propriedade]}`);
}