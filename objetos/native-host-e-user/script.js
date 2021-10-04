// Liste 5 objetos nativos

Object;
String;
Number;
Array;
Function;

// Liste 5 objetos do browser
Window;
Document;
NodeList;
HTMLCollection;
Element;

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

// - webkitHidden e webkitVisibilityState

if (typeof document.webkitVisibilityState !== "undefined") {
  console.log("Existe");
} else {
  console.log("Não existe");
}
