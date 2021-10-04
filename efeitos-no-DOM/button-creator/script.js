const controls = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

controls.addEventListener('change', handleChange);

const handleStyle = {
  element: btn,

  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },

  height(value) {
    this.element.style.height = value + 'px';
  },

  color(value) {
    this.element.style.color = value;
  },

  border(value) {
    this.element.style.border = value;
  },

  borderRadius(value) {
    this.element.style.borderRadius = value + 'px';
  },

  width(value) {
    this.element.style.width = value + 'px';
  },

  fontFamily(value) {
    this.element.style.fontFamily = value;
  },

  fontSize(value) {
    this.element.style.fontSize = value + 'rem';
  },

  texto(value) {
    this.element.innerText = value;
  }
}

function showCss() {
  cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join('</span><span>')
};

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;
  handleStyle[name](value);
  saveValues(name, value); // salvar no localStorage
  showCss();
}

function saveValues(key, value) {
  localStorage[key] = value; // É salvo no localStorage as chaves(key) - e.g. fontSize, e o valor - e.g. '1rem'
}



// controls = document.getElementById('controles'); //

function setValues() {
  const properties = Object.keys(localStorage); // é salvo na const as chaves do objeto localStorage, que será retornando em um array
  properties.forEach((propertie) => { 
    handleStyle[propertie](localStorage[propertie]); // handleStyle[chaveDoLocalStora] (valorDaChaveDoLocalStorage) -- e.g. handleStyle(fontSize)('1rem');
    controls.elements[propertie].value = localStorage[propertie]; // é adicionado em cada elemento do control (htmlElement) de respectivo nome (propertie) o valor que consta na localStorage de respectivo nome (propertie);
  })
  showCss(); 
}

setValues();