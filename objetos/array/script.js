// ARRAYS
// Arrays armazenam uma coleção de elementos. Estes podem ser strings, arrays, boolean, number, functions, objects e mais.

// CONSTRUÇÃO DE ARRAYS
// Toda array herda os métodos e propriedades do protótipo do construtor Array.
{
  const carros = new Array("Ford", "Fiat", "Honda");

  carros[2] = "Ferrari"; // Irá substituir Honda por Ferrari
  carros[3] = "Kia"; // Adicionará Kia ao array
  carros[20] = "Kia"; // Adicionará Kia ao array na posição 21 do index, adicionando espaços vazios do index 3 até o 20

  console.log(carros.length); // 21

  // Os valores das array's não são estáticos
}

// ARRAY.FROM()
// Array.from() é um método utilizado para transformar array-like objects, em uma array.
{
  const li = document.querySelectorAll("li");
  console.log(li); // Nodelist, um arraylike

  const arrayLi = Array.from(li); // Conversão de uma Nodelist para um Array

  console.log(arrayLi);

  const carros = {
    0: "Fiat",
    1: "Honda",
    2: "Ford",
  }; // Para ser convertido a um array o objeto/elemento precisa ter a propriedade como números e uma propriedade length

  // ARRAY.ISARRAY()
  // Verifica se o valor passado é uma array e retorna um valor booleano.
  Array.isArray(li); // false, é um Nodelist

  Array.isArray(arrayLi); // true, é um array
}

// ARRAY.OF(), ARRAY() E NEW ARRAY()
// Verifica se o valor passado é uma array e retorna um valor booleano. A palavra chave new não é necessária para utilizar o construtor Array.

Array.of(10); // [10] é criado um array com o/s valor/es de parametro
Array.of(1, 2, 3, 4); // [1,2,3,4] idem
new Array(5); // [,,,,] É criado um array com 5 espaços vazios
Array(5); // [,,,,] idem
Array(1, 2, 3, 4); // [1,2,3,4] é criado um array com o/s valor/es de parametro

// Array.of() cria um array com os valores de parametro
// Array(), e new Array() criam um array com os valores de parametro, porém se usado só um número como parametro ele irá criar um array com 'X' tamanho, dependendo do número passado

// PROPRIEDADES E MÉTODOS DO PROTOTYPE
// [].length retorna o tamanho da array.
const frutas = ["Banana", "Pêra", ["Uva Roxa", "Uva Verde"]];

frutas.length; // 3

frutas[0].length; // 6 - 'Banana'
frutas[1].length; // 5 - 'Pêra'
frutas[2].length; // 2 - Um array com 2 itens

// MÉTODOS MODIFICADORES [].SORT()
// Os próximos métodos que vamos falar sobre, são métodos modificadores (mutator methods). Além de retornarem um valor, eles modificam a array original. [].sort() organiza a pelo unicode.

{
  const instrumentos = ["Guitarra", "Baixo", "Violão"];
  instrumentos.sort();
  instrumentos; // ['Baixo', 'Guitarra', Violão] // É organizado alfabeticamente, porém baseando nos valores de unicode

  const idades = [32, 21, 33, 43, 1, 12, 8];
  idades.sort();
  idades; // [1, 12, 21, 32, 33, 43, 8] // Não é organizado númericamente, por se basear nos valores de unicode
  /* Ex.: 
1 - 00000031
11 - 0000003100000031
3 - 00000033 
Um sort() desses valores vai retornar [1, 11, 3] 
*/
}

// [].UNSHIFT() E [].PUSH()
// [].unshift() adiciona elementos ao início da array e retorna o length da mesma. [].push() adiciona elementos ao final da array e retorna o length da mesma.
{
  const carros = ["Ford", "Fiat", "VW"];
  carros.unshift("Honda", "Kia"); // 5
  carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

  carros.push("Ferrari"); // 6
  carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];
}

// [].SHIFT() E [].POP()
// [].shift() remove o primeiro elemento da array e retorna o mesmo. [].pop() remove o último elemento da array e retorna o mesmo.

{
  const carros = ["Ford", "Fiat", "VW", "Honda"];
  const primeiroCarro = carros.shift(); // 'Ford'
  carros; // ['Fiat', 'VW', 'Honda'];

  const ultimoCarro = carros.pop(); // 'Honda'
  carros; // ['Fiat', 'VW'];
}

// [].REVERSE()
// [].reverse() inverte os itens da array e retorna a nova array.

{
  const carros = ["Ford", "Fiat", "VW", "Honda"];
  carros.reverse(); // ['Honda', 'VW', 'Fiat', 'Ford'];
}

// [].SPLICE()
// [].splice(index, remover, item1, item2, ...) adiciona valores na array a partir do index. Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens). É como se ele cortasse o array em 2, e adiciona, ou não, novos valores ao array original

{
  const carros = ["Ford", "Fiat", "VW", "Honda"];
  carros.splice(1, 0, "Kia", "Mustang"); // []
  carros; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

  carros.splice(3, 2, "Ferrari"); // ['Fiat', 'VW']
  carros; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']
}

// [].COPYWITHIN()
// [].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. Caso omita os valores de início e final, ele irá utilizar como inicio o 0 e final o valor total da array.

{
  ["Item1", "Item2", "Item3", "Item4"].copyWithin(2, 0, 3);
  // ['Item1', 'Item2', 'Item1', 'Item2']

  ["Item1", "Item2", "Item3", "Item4"].copyWithin(-1);
  // ['Item1', 'Item2', 'Item3', 'Item1']
}

// [].FILL()
// [].fill(valor, inicio, final) preenche a array com o valor, do início até o fim.

{
  ["Item1", "Item2", "Item3", "Item4"].fill("Banana");
  // ['Banana', 'Banana', 'Banana', 'Banana']

  ["Item1", "Item2", "Item3", "Item4"].fill("Banana", 2);
  // ['Item1', 'Item2', 'Banana', 'Banana']

  ["Item1", "Item2", "Item3", "Item4"].fill("Banana", 1, 3);
  // ['Item1', 'Banana', 'Banana', 'Item4']
}

// MÉTODOS DE ACESSO [].CONCAT()
// Os métodos abaixo não modificam a array original, apenas retornam uma array modificada. [].concat() irá concatenar a array com o valor passado.

{
  const transporte1 = ["Barco", "Aviao"];
  const transporte2 = ["Carro", "Moto"];
  const transportes = transporte1.concat(transporte2);
  // ['Barco', 'Aviao', 'Carro', 'Moto'];

  const maisTransportes = [].concat(transporte1, transporte2, "Van");
  // ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];
}

// [].INCLUDES(), [].INDEXOF() E [].LASTINDEXOF()
// [].includes(valor) verifica se a array possui o valor e retorna true ou false. [].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro valor na array. Já o [].lastIndexOf(valor) retorna o index do último.

{
  const linguagens = ["html", "css", "js", "php", "python", "js"];

  linguagens.includes("css"); // true
  linguagens.includes("ruby"); // false
  linguagens.indexOf("python"); // 4
  linguagens.indexOf("js"); // 2
  linguagens.lastIndexOf("js"); // 5
}

// [].JOIN()
// [].join(separador) junta todos os valores da array e retorna uma string com eles. Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array.

{
  const linguagens = ["html", "css", "js", "php", "python"];
  linguagens.join(); // 'html,css,js,php,python'
  linguagens.join(" "); // 'html css js php python'
  linguagens.join("-_-"); // 'html-_-css-_-js-_-php-_-python'

  let htmlString = "<h2>Título Principal</h2>";
  htmlString = htmlString.split("h2");
  // ['<', '>Título Principal</', '>']
  htmlString = htmlString.join("h1");
  // <h1>Título Principal</h1>
}

// [].SLICE()
// [].slice(inicio, final) retorna os itens da array começando pelo início e indo até o valor de final.

{
  const linguagens = ["html", "css", "js", "php", "python"];
  linguagens.slice(3); // ['php', 'python']
  linguagens.slice(1, 4); // ['css', 'js', 'php']

  const cloneLinguagens = linguagens.slice();
  // Uma forma comum para se clonar um array é usando o método slice() na forma acima.
}

// EXERCÍCIOS
{
  const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
  // Remova o primeiro valor de comidas e coloque em uma variável
  // Remova o último valor de comidas e coloque em uma variável
  // Adicione 'Arroz' ao final da array
  // Adicione 'Peixe' e 'Batata' ao início da array

  const primeiroComida = comidas.shift();
  const ultimaComida = comidas.pop();

  comidas.push("Arroz");
  comidas.unshift("Peixe", "Batata");

  console.log(
    `Array de comidas: ${comidas}
    Primeira comida: ${primeiroComida}
    Ultima comida: ${ultimaComida}`
  );

  const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
  // Arrume os estudantes em ordem alfabética
  // Inverta a ordem dos estudantes
  // Verifique se Joana faz parte dos estudantes
  // Verifique se Juliana faz parte dos estudantes

  estudantes.sort();
  estudantes.reverse();
  if (estudantes.includes("Joana")) {
    console.log("Joana faz parte dos estudantes");
  } else {
    console.log("Joana não faz parte dos estudantes");
  }

  if (estudantes.includes("Juliana")) {
    console.log("Juliana faz parte dos estudantes");
  } else {
    console.log("Juliana não faz parte dos estudantes");
  }

  console.log(estudantes);

  let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
  // Substitua section por ul e div com li,
  // utilizando split e join

  arrayHtml = html.split("section").join("ul");
  arrayHtml = arrayHtml.split("div").join("li");

  console.log(arrayHtml);

  const carros = ["Ford", "Fiat", "VW", "Honda"];
  // Remova o último carro, mas antes de remover
  // salve a array original em outra variável

  const carrosBackup = carros.slice();
  carros.pop();

  console.log(carros, carrosBackup);
}
